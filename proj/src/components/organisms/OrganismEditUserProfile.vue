<template>
    <div>
        <form @submit.prevent="doUpdate">
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="fname" content="First Name"/><br>
                    <input class="form-control" id="fname" type="text" v-model="form.fname"/>
                    <p v-if="!!errors.fname" class="errorMessage">{{ errors.fname }}</p>
                </div>
                <div class="col">
                    <AtomLabel for="lname" content="Last Name"/><br>
                    <input class="form-control" id="lname" type="text" v-model="form.lname" required/>
                    <p v-if="!!errors.lname" class="errorMessage">{{ errors.lname }}</p>
                </div>
            </div>
            <hr class="mt-4 mb-4"/>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="email" content="E-Mail"/><br>
                    <input class="form-control" id="email"  type="email" v-model="form.email" required/>
                    <p v-if="!!errors.email" class="errorMessage">{{ errors.email }}</p>
                </div>
                <div class="col">
                    <AtomLabel for="username" content="Username"/><br>
                    <input class="form-control" id="username" type="text" v-model="form.uname" required/>
                    <p v-if="!!errors.uname" class="errorMessage">{{ errors.uname }}</p>
                </div>
            </div>
            <hr class="mt-4 mb-4"/>
            <p v-if="!!error" class="errorMessage">{{error}}</p>
            <div class="text-end m-3">
                <AtomButton type="submit" classname="btn btnColor m-1" content="Update Profile" />
                <AtomButton type="link" classname="btn btn-secondary m-1" content="Cancel" @click="cancelEdit"/>
            </div>
        </form>
    </div>
</template>

<script>
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomButton from '../atoms/AtomButton.vue';
import { mapActions } from 'vuex';
import router from '@/router';
import * as Yup from "yup";
const updatedProfileSchema = Yup.object().shape({
    fname: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required"),
    email: Yup.string().email().required("E-Mail is required"),
    uname: Yup.string().required("Username is required"),
})

export default{
    name:'OrganismEditUserProfile',
    components:{
        AtomLabel,
        AtomButton
    },
    props:['user'],
    data() {
    return{
        form: {
            uid: this.user.uid,
            fname: this.user.fname,
            lname: this.user.lname,
            email: this.user.email,
            uname: this.user.uname,
        },
        errors: {
            fname: "",
            lname: "",
            email: "",
            uname: "",
        },
    }
    },
    methods:{
        ...mapActions('userModule', {update: 'update'}),
        cancelEdit(){
            router.push('profile')
        },
        doUpdate(){
            updatedProfileSchema
            .validate(this.form, { abortEarly: false })
            .then(() => {
                console.log("no validation errors");                
                const user = {
                    uid: this.form.uid,
                    fname: this.form.fname,
                    lname: this.form.lname,
                    email: this.form.email,
                    uname: this.form.uname,
                    imgLink: 'dummy.png'
                };
                this.update(user)
                .then(res => {
                    res.error ? this.$toast.error(res.msg) : (this.$toast.success(res.msg) && router.push('profile'))
                })
            
            })
            .catch((err) => {
                err.inner.forEach((error) => {
                    this.errors = { ...this.errors, [error.path]: error.message };
                });
            });
        },
        
        validate(field) {
            updatedProfileSchema
                .validateAt(field, this.form)
                .then(() => {
                this.errors[field] = null;
                })
                .catch((error) => {
                console.log(error);
                this.errors[field] = error.message;
                });
        },
    }
}
</script>
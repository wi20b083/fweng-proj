<template>
    <div>
        <form>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="fname" content="First Name"/><br>
                    <input class="form-control" type="text" v-model="fname"/>
                </div>
                <div class="col">
                    <AtomLabel for="lname" content="Last Name"/><br>
                    <input class="form-control" type="text" v-model="lname"/>
                </div>
            </div>
            <hr class="mt-4 mb-4"/>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="email" content="E-Mail"/><br>
                    <input class="form-control" type="email" v-model="email"/>

                </div>
                <div class="col">
                    <AtomLabel for="username" content="Username"/><br>
                    <input class="form-control" type="text" v-model="username"/>

                </div>
            </div>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="password" content="Password"/><br>
                    <input class="form-control" type="text" v-model="pw"/>

                </div>
            </div>
            <hr class="mt-4 mb-4"/>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="street" content="Streetname"/><br>
                    <input class="form-control" type="text" v-model="street"/>

                </div>
                <div class="col">
                    <AtomLabel for="streetnr" content="House Number"/><br>
                    <input class="form-control" type="text" v-model="housenumber"/>

                </div>
            </div>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="zip" content="ZIP-Code"/><br>
                    <input class="form-control" type="text" v-model="zip"/>

                </div>
                <div class="col">
                    <AtomLabel for="city" content="City"/><br>
                    <input class="form-control" type="text" v-model="city"/>

                </div>
            </div>
            <div class="text-end m-3">
                <AtomButton type="button" classname="btn btn-primary" content="Submit" />
            </div>
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import AtomLabel from '../atoms/AtomLabel.vue';

export default{
    name:'OrganismEditUserProfile',
    components:{
        AtomLabel,
        
    },
    computed:{
        
        ...mapState('userModule', {
            fname: state => state.user.fname,
            lname: state => state.user.lname,
            email: state => state.user.email,
            username: state => state.user.username,
            pw: state => state.user.pw,
            street: state => state.user.street,
            housenumber: state => state.user.streetNr,
            zip: state => state.user.zip,
            city: state => state.user.city,
        }),
    },
    methods:{
        
    }
}
</script>
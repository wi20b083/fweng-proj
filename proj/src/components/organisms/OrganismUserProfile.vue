<template>
    <h3>Personal Data</h3>
    <div class="row p-3">
        <div class="col">
            <div class="row">
                {{ user.firstName }}
                {{ user.lastName }}
            </div>
            <div class="row">
                {{ user.username }}
            </div>
            <div class="row">
                {{ user.email }}
            </div>
            <div class="row p-1">
                <AtomButton type="link" class="btn btnColor" content="Edit Personal Data" @click="loadProfileEdit"/>
            </div>
            <div class="row p-1">
                <AtomButton type="link" class="btn btnColor" content="Reset Password" @click="loadPWReset"/>
            </div>
        </div>
        <div class="col">
            <AtomThumbnail :src="user.imgLink" alt="Your Profile Picture"/><br><br>
            <MoleculeFileUpload/>
        </div>
    </div>
    <div class="row p-3">
        <AtomButton class="btn btn-danger" content="Delete Profile" type="button" @click="deleteProfile(user.id)"/>
    </div>
</template>

<script>
import AtomButton from '../atoms/AtomButton.vue';
import AtomThumbnail from '../atoms/AtomThumbnail.vue';
import MoleculeFileUpload from '../molecules/MoleculeFileUpload.vue';
import router from '@/router';
import { mapActions, mapState } from 'vuex';
export default{
    name:'OrganismUserProfile',
    components:{
        AtomButton,
        AtomThumbnail,
        MoleculeFileUpload
    },
    computed:{
        ...mapState('userModule', {
            user: state => state.user
        })
    },
    methods:{
        ...mapActions('userModule', {
            setUserToEdit:'setUser',
            deleteUser: 'deleteUser'
        }),
        loadProfileEdit(){
            //brauchen wir nicht da nur eingeloggter user sich editen kann und daten dafür sind in store.user
            //this.setUserToEdit(this.user.id)
            router.push('editUserProfile')
        },
        loadPWReset(){
            router.push('pwReset')
        },
        deleteProfile(id){
            this.deleteUser(id)
            .then(res => {
                res.error ? this.$toast.error(res.msg) : (this.$toast.success(res.msg) && router.push('registration'))
            })    
        }
    }
}

</script>

<style scoped>


</style>


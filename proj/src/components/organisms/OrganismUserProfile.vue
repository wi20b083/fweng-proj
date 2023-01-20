<template>
    <h3>Personal Data</h3>
    <div class="row pt-3 pb-5">
        <div class="col">
            <MoleculeProfileRow v-for="field in user" v-bind:key="field.fieldName" :fieldName="field.fieldName" :fieldContent="field.fieldContent"/>
        </div>
        <div class="col">
            <AtomThumbnail :src="profilePic" alt="Your Profile Picture"/><br><br>
            <MoleculeFileUpload/>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <AtomButton type="link" class="btn btnColor" content="Edit Personal Data" @click="loadProfileEdit"/>
        </div>
        <div class="col">
            <AtomButton type="link" class="btn btnColor" content="Reset Password" @click="loadPWReset"/>
        </div>
    </div>
</template>

<script>
import AtomButton from '../atoms/AtomButton.vue';
import MoleculeProfileRow from '../molecules/MoleculeProfileRow.vue';
import AtomThumbnail from '../atoms/AtomThumbnail.vue';
import MoleculeFileUpload from '../molecules/MoleculeFileUpload.vue';
import router from '@/router';

export default{
    name:'OrganismUserProfile',
    components:{
    AtomButton,
    MoleculeProfileRow,
    AtomThumbnail,
    MoleculeFileUpload
},
    /* get the data of the logged in user
    computed:{
        ...mapState('userModule', {
            user: 
        })
    },*/
    data(){
        //getter in userModule einbauen um bestimmte dinge zu bekommen
        return{
            user:{
                fname: {
                    fieldName:'First Name:',
                    fieldContent: 'Lara'
                },
                lname: {
                    fieldName:'Last Name:',
                    fieldContent: 'Roth'
                },
                email: {
                    fieldName:'E-Mail:',
                    fieldContent: 'lararoth1999@gmail.com'
                },
                username: {
                    fieldName:'Username:',
                    fieldContent: 'llara_rh'
                },
                pw: {
                    fieldName:'Password:',
                    fieldContent: '*********'
                },
                street: {
                    fieldName:'Streetname:',
                    fieldContent: 'Testarellogasse'
                },
                streetNr: {
                    fieldName:'Housenumber:',
                    fieldContent: '24'
                },
                zip: {
                    fieldName:'Zip Code:',
                    fieldContent: '1130'
                },
                city: {
                    fieldName:'City:',
                    fieldContent: 'Vienna'
                },
            },
            profilePic: require('../../assets/dummyImg.png'),
        }
    },
    methods:{
        loadProfileEdit(){
            router.push('editUserProfile')
        },
        loadPWReset(){
            router.push('pwReset')
        }
    }
}

</script>

<style scoped>


</style>


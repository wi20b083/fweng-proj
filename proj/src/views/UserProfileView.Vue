<template>
    <div class="container-fluid mt-4">
        <AtomHeader tag="h1" content="Profile" class="mb-5 border-bottom border-dark"/>
        <div class="row m-4">

            <div class="col-3">
                <div class="sticky-top">
                    <AtomButton class="button" type="button" content="Personal Data" @click="loadOrganism('personal')"/><br>
                    <AtomButton class="button" type="button" content="Auctions" @click="loadOrganism('auctions')"/><br>
                    <AtomButton class="button" type="button" content="Bids" @click="loadOrganism('bids')"/><br>
                </div>
            </div>

            <div class="col-9 border-start border-dark">
                <div class="p-3">
                    <template v-if="userProfileActiveButton == 'auctions'">
                        <OrganismAuctionTable/>

                    </template>
                    <template v-if="userProfileActiveButton == 'personal'">
                        <OrganismUserProfile />

                    </template>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import OrganismUserProfile from '../components/organisms/OrganismUserProfile.vue'
import AtomHeader from '../components/atoms/AtomHeader.vue'
import AtomButton from '../components/atoms/AtomButton.vue'
import OrganismAuctionTable from '@/components/organisms/OrganismAuctionTable.vue'
import{mapActions, mapState} from 'vuex'

export default{
    name:'UserProfileView',
    components:{
        OrganismUserProfile,
        AtomHeader,
        AtomButton,
        OrganismAuctionTable
    },
    computed:{
        ...mapState('userModule', {
            isLogin: state => state.isLogin,
            userProfileActiveButton: state => state.userProfileActiveButton
        })
    },
    methods:{
        ...mapActions('userModule',{userProfileLoadOrganism: 'userProfileLoadOrganism'}),
        loadOrganism(buttonClicked){
            this.userProfileLoadOrganism(buttonClicked)
            console.log('activeButton: ' +this.userProfileActiveButton)
        }
    }
}


</script>

<style scoped>
.button{
    background-color: white;
    border: none;
    width: 100%;
    text-align: start;
    padding: 5%;
    border-radius: 5px;
    font-size: 130%;
    color: #2c3e50;
}
.button:hover{
    background-color: #42b983;
    color: white;
}

.buttonAcitve{
    background-color: blue;
}

</style>


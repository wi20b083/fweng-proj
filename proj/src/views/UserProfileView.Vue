<template>

    <div class="container-fluid mt-4" v-if="isLogin === true">
        <h1 class="mb-5 border-bottom border-dark">Profile</h1>
        <div class="row m-4">

            <div class="col-3">
                <div class="sticky-top">
                    <AtomButton class="button" type="button" content="Personal Data" @click="loadOrganism('personal')"/><br>
                    <AtomButton class="button" type="button" content="Your Auctions" @click="loadOrganism('auctions')"/><br>
                    <AtomButton class="button" type="button" content="Your Bids" @click="loadOrganism('bids', userID)"/><br>
                </div>
            </div>

            <div class="col-9 border-start border-dark">
                <div class="p-3">
                    <template v-if="userProfileActiveButton == 'auctions'">
                        <OrganismAuctionTable :auctions="getAuctionsByUserId(userID)"/>

                    </template>
                    <template v-if="userProfileActiveButton == 'personal'">
                        <OrganismUserProfile />

                    </template>
                    <template v-if="userProfileActiveButton == 'bids'">
                        <OrganismBidTable :bids="bids"/>
                    </template>
                </div>
            </div>

        </div>
    </div>
    <div class="centered container-fluid mt-4" v-else>
        <h1>You are not authorized to see this Page.</h1>
    </div>
</template>

<script>
import OrganismUserProfile from '../components/organisms/OrganismUserProfile.vue'
import AtomButton from '../components/atoms/AtomButton.vue'
import OrganismAuctionTable from '@/components/organisms/OrganismAuctionTable.vue'
import{mapActions, mapGetters, mapState} from 'vuex'
import OrganismBidTable from '@/components/organisms/OrganismBidTable.vue'
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

export default{
    name:'UserProfileView',
    components:{
        OrganismUserProfile,
        AtomButton,
        OrganismAuctionTable,
        OrganismBidTable,
    },
    setup () {
        const store = useStore()
        const userID = computed(()=> store.state.userModule.user.uid)
        const bids = computed(()=> store.state.bidModule.bids)
        return{
            bids,
            userID
        }
    },
    computed:{
        ...mapState('userModule', {
            isLogin: state => state.isLogin,
            userProfileActiveButton: state => state.userProfileActiveButton,
        }),
        ...mapGetters('auctionModule',[
            'getAuctionsByUserId'
        ])
    },
    methods:{
        ...mapActions('userModule',{userProfileLoadOrganism: 'userProfileLoadOrganism'}),
        loadOrganism(buttonClicked, uid){
            this.userProfileLoadOrganism(buttonClicked)
            console.log('activeButton: ' +this.userProfileActiveButton)
            this.bids = this.getByUserId(uid)
        },
        ...mapActions('bidModule',{getByUserId: 'getByUserId'}),
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

.button:focus{
    background-color: #42b983;
    color: white;
}

</style>


import axios from "axios"

const state = {
    bids:[
        {
            id: 1,
            deliveryDate: '15.11.2022',
            userID: 1,
            auctionID: 1,
            status:'open',
            items:[1, 2, 3],
        },
        {
            id: 2,
            title: "Bid 2",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi1",
            userID: 1,
            auction: 1,
            status:'open',
            details:{
                bidItems: [1, 2, 3,],
                total: 10,
            },
        },
        {
            id: 3,
            title: "Bid 3",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi1",
            userID: 1,
            auction: 1,
            status:'declined',
            details:{
                bidItems: [1, 2, 3,],
                total: 10,
            },
        },
        {
            id: 4,
            title: "Bid 4",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi1",
            userID: 1,
            auction: 1,
            status:'declined',
            details:{
                bidItems: [1, 2, 3,],
                total: 10,
            },
        },
        {
            id: 5,
            title: "Bid 5",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi1",
            userID: 2,
            auction: 1,
            status:'accepted',
            details:{
                bidItems: [1, 2, 3,],
                total: 10,
            },
        },
        {
            id: 6,
            title: "Bid 6",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi1",
            userID: 2,
            auction: 1,
            status:'accepted',
            details:{
                bidItems: [1, 2, 3,],
                total: 10,
            },
        },
        {
            id: 7,
            title: "Bid 7",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi1",
            userID: 1,
            auction: 1,
            status:'declined',
            details:{
                bidItems: [1, 2, 3,],
                total: 10,
            },
        },
        {
            id: 8,
            title: "Bid 8",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi1",
            userID: 2,
            auction: 1,
            status:'open',
            details:{
                bidItems: [1, 2, 3,],
                total: 10,
            },
        },
    ],

    
}

const mutations ={
    update(state, bidUpdated){
        state.bids.forEach(bid => {
            if(bid.id === bidUpdated.id){
                bid = bidUpdated
            }
        });
    },
    getAll(state, bids){
        state.bids = bids
    },
    create(state, bid){
        state.bids.push(bid)
    },

}

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    }
};
const url = "http://localhost:8081/";

const actions = {
    async getAll({commit}){
        try{
            const response = await axios.get(url + 'bids/all', config)
            console.log('getAll: ' + response)

            const bidList = response.data // .bids ?

            commit('getAll', bidList)
        }catch(error){
            console.log(error)
        }
    },
    async update({commit}, {id}){ // what data how to spell ???
        try{
            const response = await axios.put(url + 'bids/' + id, config) // what data ???
            console.log('update: ' + response)

            const bidList = response.data // .bids ?

            commit('updateList', bidList)
        }catch(error){
            console.log(error)
        }
    },
    async delete({commit}, id){
        try{
            const response = await axios.delete(url + 'bids/' + id, config)
            console.log('delete: ' + response)

            // what response , what to change in state ???

            commit('updateList')
        }catch(error){
            console.log(error)
        }
    },

    async create({commit}){ // what data how to spell ???
        try{
            const response = await axios.post('http://localhost:8080/bids/', config)
            console.log('create: ' + response)

            const bidList = response.data // .bids ?

            commit('updateList', bidList)
        }catch(error){
            console.log(error)
        }
    },
    async getByUserId({commit}, id){
        try{
            const response = await axios.get(url + 'bids/' + id, config)
            console.log('getbyuserid: ' + response)

            const bidList = response.data // .bids ?

            commit('updateList', bidList)
        }catch(error){
            console.log(error)
        }
    },

}

const getters = {
    getBidsByAuctionId: (state) => (id) =>{
        return state.bids.filter(bid => bid.auction === id)
    },
    getBidsByUserId: (state) => (id) =>{
        return state.bids.filter(bid => bid.userID === id)
    }
}

export default{
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
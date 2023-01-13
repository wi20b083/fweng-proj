import axios from "axios"

const state = {
    bids:[
        {
            id: 1,
            title: "Bid 1",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi1",
            auction: 1,
            details:{
                bidItems: [1, 2, 3,],
                total: 10,
            },
        },
        {
            id: 2,
            title: "Bid 2",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi1",
            auction: 1,
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
            auction: 1,
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
            auction: 1,
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
            auction: 1,
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
            auction: 1,
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
            auction: 1,
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
            auction: 1,
            details:{
                bidItems: [1, 2, 3,],
                total: 10,
            },
        },
    ],

    
}

const mutations ={
    updateList(state, bids){
        state.bids = bids
    }
}

const actions = {
    async getAll({commit}){
        try{
            const response = await axios.get('http://localhost:8080/bids/all')
            console.log('getAll: ' + response)
            commit('updateList')
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async update({commit}, {bid}){
        try{
            const response = await axios.put('http://localhost:8080/bids/' + bid.id, {bid})
            console.log('update: ' + response)
            commit('updateList')
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async delete({commit}, id){
        try{
            const response = await axios.delete('http://localhost:8080/bids/' + id)
            console.log('delete: ' + response)
            commit('updateList')
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async create({commit}, {bid}){
        try{
            const response = await axios.post('http://localhost:8080/bids/', {bid})
            console.log('create: ' + response)
            commit('updateList')
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async getByUserId({commit}, id){
        try{
            const response = await axios.get('http://localhost:8080/bids/' + id)
            console.log('getbyuserid: ' + response)
            commit('updateList')
        }catch(error){
            console.log(error)
        }
    },

}

const getters = {
    getBidsByAuctionId: (state) => (id) =>{
        return state.bids.filter(bid => bid.auction === id)
    }
}

export default{
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
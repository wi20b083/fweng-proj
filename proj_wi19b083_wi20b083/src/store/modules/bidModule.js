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
    requestError: '',

    
}

const mutations ={
    // ok
    update(state, bidUpdated){
        state.bids.forEach(bid => {
            if(bid.id === bidUpdated.id){
                bid = bidUpdated
            }
        });
    },
    //ok
    getAll(state, bids){
        state.bids = bids
    },
    //ok
    create(state, bid){
        state.bids.push(bid)
    },
    //ok
    delete(state, id){
        const bidListNew = []
        state.bids.forEach(bid =>{
            if(bid.id != id){
                bidListNew.push(bid)
            }
        })
        state.bids = bidListNew
    },
    //ok
    setRequestError(state, message){
        state.requestError = message
    }

}

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
};
const url = "http://localhost:8081/";

const actions = {
    async getAll({commit}){
        try{
            const response = await axios.get(url + 'bids/all', config)
            console.log('getAll: ' + response)

            const bidList = response.data

            commit('getAll', bidList)
        }catch(error){
            console.log(error)
            commit('setRequestError', error.message)

        }
    },
    async update({commit}, {id}){ // what data how to spell ???
        try{
            const response = await axios.put(url + 'bids/' + id, config) // what data ???
            console.log('update: ' + response)

            const bid = response.data 

            commit('update', bid)
        }catch(error){
            console.log(error)
            commit('setRequestError', error.message)
        }
    },
    async delete({commit}, id){
        try{
            const response = await axios.delete(url + 'bids/' + id, config)
            console.log('delete: ' + response)

            commit('delete', id)
        }catch(error){
            console.log(error)
            commit('setRequestError', error.message)
        }
    },

    async create({commit}, ){ // what data how to spell ???
        try{
            const response = await axios.post('http://localhost:8080/bids/', config)
            console.log('create: ' + response)

            const bid = response.data 

            commit('updateList', bid)
        }catch(error){
            console.log(error)
            commit('setRequestError', error.message)
        }
    },
    /* brauchen wir nicht, wird im user mitgeschickt beim login
    async getByUserId({commit}, id){
        try{
            const response = await axios.get(url + 'bids/' + id, config)
            console.log('getbyuserid: ' + response)

            const bidList = response.data

            commit('updateList', bidList)
            
        }catch(error){
            console.log(error)
            commit('setRequestError', error.message)
        }
    },*/ 

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
import axios from "axios"

const state = {
    bids:[],
    resObj : {
        error: false,
        msg: ''
    }
}

const mutations ={
    getAll(state, bids){
        state.bids = bids
    },
    create(state, bid){
        state.bids.push(bid)
    },
    delete(state, id){
        const bidListNew = []
        state.bids.forEach(bid =>{
            if(bid.id != id){
                bidListNew.push(bid)
            }
        })
        state.bids = bidListNew
    },
    setResponseObj(state, resObj){
        state.resObj = resObj
    },
    update(state, bids){
        state.bids = bids
    }
}

const config2 = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "ngrok-skip-browser-warning": true,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
}

const url = "https://8144-178-115-45-233.eu.ngrok.io/";

const actions = {
    async getByUserId({commit}, uid){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.get(url + 'users/' + uid + '/bids', config2)
            console.log('getAll: ' + response)

            const bidList = response.data

            commit('getAll', bidList)
            resObj.msg = 'Bids retreived successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },
    async getByAuctionId({commit}, aid){ 
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.get(url + 'auctions/'+aid+'/bids', config2)
            console.log('getAll: ' + response)

            const bidList = response.data

            commit('getAll', bidList)
            resObj.msg = 'Bids retreived successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },

    async create({commit}, bid){ 
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.post(url+'bids/create', bid, config2)
            console.log('create: ' + response)
            commit('create', response.data)
            resObj.msg = 'Bid created successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },
    async chooseWinningBid({commit}, bid){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.put(url + 'bids/' + bid, bid,config2)
            console.log('setWinningBid:' + response)
            commit('update', response.data)
    
            resObj.msg = 'Winning bid chosen successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },
    async rejectAll({commit}, aid){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.put(url + 'auctions/' + aid + '/reject-all', aid,config2)
            console.log('rejectAll:' + response)
            commit('update', response.data)
    
            resObj.msg = 'Bids rejected successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },

}

const getters = {
    getAll(state){
        return state.bids
    }
}

export default{
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
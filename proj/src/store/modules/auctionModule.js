import axios from "axios"

const state = {
    auctions:[
         /*
        { 
           
            id: 1,
            uid: 1,
            title: 'Auction 1',
            desc: 'This is a super duper auction',
            startDate: '15.11.2022',
            endDate: '30.11.2022',
            deliveryDate: '05.12.2022',
            locked: false,
            closed: false,
            img:[
                {imgLink: '../../assets/dummyImg.png'},
                {imgLink: '../../assets/dummyImg.png'}
            ],
            categories:["wine", "beer"],
            items:[
                // es kommt noch name und imgLink
                {
                    id: 1,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 2,
                    price: 12,
                    amount: 3,
                },   
                {
                    id: 3,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 1,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 2,
                    price: 12,
                    amount: 3,
                },   
                {
                    id: 3,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 1,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 2,
                    price: 12,
                    amount: 3,
                },   
                {
                    id: 3,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 1,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 2,
                    price: 12,
                    amount: 3,
                },   
                {
                    id: 3,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 1,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 2,
                    price: 12,
                    amount: 3,
                },   
                {
                    id: 3,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 1,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 2,
                    price: 12,
                    amount: 3,
                },   
                {
                    id: 3,
                    price: 12,
                    amount: 3,
                },
            ],
        },
        { 
            id: 2,
            uid: 1,
            title: 'Auction 2',
            desc: 'This is another super duper auction',
            startDate: '15.11.2022',
            endDate: '30.11.2022',
            deliveryDate: '05.12.2022',
            locked: false,
            closed: false,
            img:[
                {imgLink: '../../assets/dummyImg.png'},
                {imgLink: '../../assets/dummyImg.png'}
            ],
            categories:["wine", "beer"],
            items:[
                {
                    id: 1,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 2,
                    price: 12,
                    amount: 3,
                },   
                {
                    id: 3,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 1,
                    price: 12,
                    amount: 3,
                },
                {
                    id: 2,
                    price: 12,
                    amount: 3,
                },   
                {
                    id: 3,
                    price: 12,
                    amount: 3,
                },
            ],
        },*/
    ],
    filterAuctionsByCategory: '',
    filterAuctionsByStartDate: '',
    auctionDetails: '',
    createBidButtonClicked: false,
    auctionCloseButtonClicked: false,
    resObj : {
        error: false,
        msg: ''
    }
}

const mutations = {
    showDetails(state, auction){
        state.auctionDetails = auction
    },
    getAll(state, auctions){
        state.auctions = auctions
    },
    buttonClicked(state, stateChange){
        state.createBidButtonClicked = stateChange
    },
    closeAuctionClicked(state, stateChange){
        state.auctionCloseButtonClicked = stateChange
    },
    /*
    filterAuctionsByCategory(state, category){
        state.filterAuctionsByCategory = category
    },
    filterAuctionsByStartDate(state, date){
        state.filterAuctionsByStartDate = date
    },
    clearAuctionFilterCategory(state){
        state.filterAuctionsByCategory = ''
    },
    clearAuctionFilterDate(state){
        state.filterAuctionsByStartDate = ''
    },*/
    create(state, auction){
        state.auctions.push(auction)
    },
    delete(state, id){
        const auctionListNew = []
        state.auctions.forEach(auction =>{
            if(auction.id != id){
                auctionListNew.push(auction)
            }
        })
        state.auctions = auctionListNew
    },
    update(state, updatedAuction){
        state.auctions.forEach((auction, index) => {
            if(auction.aid === updatedAuction.aid){
                state.auctions[index] =updatedAuction
            }
       })
    },
    setResponseObj(state, resObj){
        state.resObj.error = resObj.error
        state.resObj.msg = resObj.msg
    },
    
}

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "ngrok-skip-browser-warning": true,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
}

const config2 = {
    headers:{
        "ngrok-skip-browser-warning": true,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
}

const url = "https://8144-178-115-45-233.eu.ngrok.io/";

const actions = {
   
    showDetails({commit}, id){
        commit('showDetails', id)
    },
    buttonClicked({commit}, stateChange){
        commit('buttonClicked', stateChange)
    },
    closeAuctionClicked({commit}, stateChange){
        commit('closeAuctionClicked', stateChange)
    },
    filterAuctionsByCategory({commit}, category){
        commit('filterAuctionsByCategory', category)
    },
    filterAuctionsByStartDate({commit}, date){
        commit('filterAuctionsByStartDate', date)
    },
    clearAuctionFilterCategory({commit}){
        commit('clearAuctionFilterCategory')
    },
    clearAuctionFilterDate({commit}){
        commit('clearAuctionFilterDate')
    },
    async getAll({commit}){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.get(url + 'auctions/all', config2)
            const auctionList = response.data

            commit('getAll', auctionList)
            resObj.msg = 'Auctions retrieved successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },
    
    async update({commit}, auction){ 
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.put(url + 'auctions/' + auction.aid + '/edit', auction , config)
            console.log('update: ' + response)
            const resAuction = response.data
            commit('update', resAuction)

            resObj.msg = 'Auction has been updated successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj        
        }
    },
    async changeState({commit}, aid){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.put(url + 'auctions/' + aid +'/state', aid,config)
            commit('update', response.data)
            resObj.msg = response.data.locked ? 'Auction locked successfully' : 'Auction unlocked successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj        
        }
    },
    /*
    async delete({commit}, id){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.delete(url + 'auctions/' + id, config)
            console.log('delete: ' + response)

            commit('delete', id)
            resObj.msg = 'Auction deleted successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj        
        }
    },*/
    async create({commit}, auction){
        let resObj = {
            error: false,
            msg: ''
        }       
        try{
            const response = await axios.post(url + 'auctions/create', auction, config)
            console.log(response)
            commit('create', response.data.auction)
            resObj.msg = 'Auction created successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },
    async closeAuction({commit}, aid){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const responseCloseAuction = await axios.put(url + 'auctions/' +aid+'/close', aid,config)
            console.log('closeAuction: ' + responseCloseAuction)
            commit('update', responseCloseAuction.data)

            resObj.msg = 'Auction closed successfully'
            commit('setResponseObj', resObj)
            return resObj

        }catch(error){
            console.log(error)
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    }, 
}

const getters = {
    getAuctionsByCategory(filter){
        console.log(filter)
        const filteredAuctions = []
        state.auctions.forEach(auction => {
           

            filteredAuctions.push(auction)
        })
        return filteredAuctions
    },
    getAuctionsByStartDate: (state) => (filter)=>{
        
        return state.auctions.filter(auction => auction.startDate === filter)
        
        /*
        state.auctions.forEach(auction => {
            if(auction.start === filter){
                filteredAuctions.push(auction)
            }
        })*/
        
    },
    getAuctionsByCategoryAndDate({filterDate, filterCategory}){
        const filteredAuctions = []
        state.auctions.forEach(auction =>{
            if(auction.start === filterDate){
                filteredAuctions.push(auction)
            }
        })

        filteredAuctions.forEach(auction =>{
            auction.categories.forEach(category => {
                if(category === filterCategory){
                    filteredAuctions.push(auction)
                }
            });
        })
    },
    getAuctionById: (state) => (id) =>{
        return state.auctions.find(auction => auction.aid === id)
    },
    getAuctionsByUserId: (state) => (id) =>{
        return state.auctions.filter(auction => auction.uid === id)
    },
    getItemsForAuction: (state) => (id) =>{
        const auction = state.auctions.find(auction => auction.aid ===id)
        return auction.items
    },
    getBidsForAuction: (state) => (id) =>{
        const auction = state.auctions.find(auction => auction.aid ===id)
        return auction.bids
    }

}

export default{
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
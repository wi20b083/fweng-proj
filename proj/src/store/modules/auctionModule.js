import axios from "axios"

const state = {
    auctions:[
        { 
            id: 1,
            startDate: '15.11.2022',
            endDate: '30.11.2022',
            status: 'open',
            deliveryDate: '05.12.2022',
            imagesource: require("../../assets/dummyImg.png"),
            user:{
                id: 1,
                username: 'llara_rh',
            },
            auctionitems:[
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                    price: 12,
                    amount: 3,

                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                    price: 12,
                    amount: 3,

                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                    price: 12,
                    amount: 3,

                },
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                    price: 12,
                    amount: 3,

                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                    price: 12,
                    amount: 3,

                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                    price: 12,
                    amount: 3,

                },
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                    price: 12,
                    amount: 3,

                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                    price: 12,
                    amount: 3,

                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                    price: 12,
                    amount: 3,

                },
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                    price: 12,
                    amount: 3,

                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                    price: 12,
                    amount: 3,

                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                    price: 12,
                    amount: 3,

                },
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                    price: 12,
                    amount: 3,

                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                    price: 12,
                    amount: 3,

                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                    price: 12,
                    amount: 3,

                },
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                    price: 12,
                    amount: 3,

                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                    price: 12,
                    amount: 3,

                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                    price: 12,
                    amount: 3,
                },
            ],
            total: 100,
            categories:["beverage", "wine", "beer"],
            bids:[
                {
                    id: 1,
                    deliveryDate: '15.11.2022',
                    user: {
                     
                            id: 1,
                            roles:['user'],
                            firstName: 'Florian',
                            lastName: 'Huber',
                            imgLink: require('../../assets/dummyImg.png'),
                            username: 'flooo',
                            email: 'flo1999@gmail.com',
                            status: 'unblocked',
                            street: 'Testarellogasse',
                            streetNr: 24,
                            zip: 1130,
                            city: 'Vienna',
                            auctions: [],
                            bids: []
                        
                    },
                    auction: 1,
                    status:'open',
                    items:[],
                    total: 100,
                },
            ]
        },
        {
            id: 2,
            startDate: '15.11.2022',
            endDate: '30.11.2022',
            status: 'open',
            deliveryDate: '05.12.2022',
            imagesource: require("../../assets/dummyImg.png"),
            user:{
                userID: 1,
                username: 'llara_rh',
            },
            auctionitems:[
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                },
                
            ],
            total: 100,
            categories:["beverage", "wine", "beer"],
            bids:[]
        },
        {
            id: 3,
            startDate: '15.11.2022',
            endDate: '30.11.2022',
            status: 'open',
            deliveryDate: '05.12.2022',
            imagesource: require("../../assets/dummyImg.png"),
            user:{
                userID: 1,
                username: 'llara_rh',
            },
            auctionitems:[
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                },
                
            ],
            total: 100,
            categories:["beverage", "wine", "beer"],
            bids:[]
        },
        {
            id: 4,
            startDate: '15.11.2022',
            endDate: '30.11.2022',
            status: 'open',
            deliveryDate: '05.12.2022',
            imagesource: require("../../assets/dummyImg.png"),
            user:{
                userID: 2,
                username: 'llara_rh',
            },
            auctionitems:[
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                },
                
            ],
            total: 100,
            categories:["beverage", "wine", "beer"],
            bids:[]
        },
        {
            id: 5,
            startDate: '15.11.2022',
            endDate: '30.11.2022',
            status: 'open',
            deliveryDate: '05.12.2022',
            imagesource: require("../../assets/dummyImg.png"),
            user:{
                userID: 2,
                username: 'llara_rh',
            },
            auctionitems:[
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                },
                
            ],
            total: 100,
            categories:["beverage", "wine", "beer"],
            bids:[]
        },
        {
            id: 6,
            startDate: '15.11.2022',
            endDate: '30.11.2022',
            status: 'open',
            deliveryDate: '05.12.2022',
            imagesource: require("../../assets/dummyImg.png"),
            user:{
                userID: 1,
                username: 'llara_rh',
            },
            auctionitems:[
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                },
                
            ],
            total: 100,
            categories:["beverage", "wine", "beer"],
            bids:[]
        },
        {
            id: 7,
            startDate: '15.11.2022',
            endDate: '30.11.2022',
            status: 'open',
            deliveryDate: '05.12.2022',
            imagesource: require("../../assets/dummyImg.png"),
            user:{
                userID: 1,
                username: 'llara_rh',
            },
            auctionitems:[
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                },
                
            ],
            total: 100,
            categories:["beverage", "wine", "beer"],
            bids:[]
        },
        {
            id: 8,
            startDate: '15.11.2022',
            endDate: '30.11.2022',
            status: 'open',
            deliveryDate: '05.12.2022',
            imagesource: require("../../assets/dummyImg.png"),
            user:{
                userID: 1,
                username: 'llara_rh',
            },
            auctionitems:[
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                },
                
            ],
            total: 100,
            categories:["beverage", "wine", "beer"],
            bids:[]
        },
        {
            id: 9,
            startDate: '15.11.2022',
            endDate: '30.11.2022',
            status: 'open',
            deliveryDate: '05.12.2022',
            imagesource: require("../../assets/dummyImg.png"),
            user:{
                userID: 1,
                username: 'llara_rh',
            },
            auctionitems:[
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                },
                
            ],
            total: 100,
            categories:["beverage", "wine", "beer"],
            bids:[]
        },
        {
            id: 10,
            startDate: '15.11.2022',
            endDate: '30.11.2022',
            status: 'open',
            deliveryDate: '05.12.2022',
            imagesource: require("../../assets/dummyImg.png"),
            user:{
                userID: 2,
                username: 'llara_rh',
            },
            auctionitems:[
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                },
                
            ],
            total: 100,
            categories:["beverage", "wine", "beer"],
            bids:[]
        },
        {
            id: 11,
            startDate: '15.11.2022',
            endDate: '30.11.2022',
            status: 'open',
            deliveryDate: '05.12.2022',
            imagesource: require("../../assets/dummyImg.png"),
            user:{
                userID: 1,
                username: 'llara_rh',
            },
            auctionitems:[
                {
                    id: 1,
                    name: "Beer",
                    imagesource: "../../assets/beer.png",
                    alttext: "Image of beer",
                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: "../../assets/wine.png",
                    alttext: "image of wine",
                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: "../../assets/dummyImg.png",
                    alttext: "image of wine",
                },
                
            ],
            total: 100,
            categories:["beverage", "wine", "beer"],
            bids:[]
        },


    ],
    filterAuctionsByCategory: '',
    filterAuctionsByStartDate: '',
    auctionDetails: '',
    createBidButtonClicked: false,
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
    },
    //ok
    create(state, auction){
        state.auctions.push(auction)
    },
    //ok
    delete(state, id){
        const auctionListNew = []
        state.auctions.forEach(auction =>{
            if(auction.id != id){
                auctionListNew.push(auction)
            }
        })
        state.auctions = auctionListNew
    },
    //ok
    update(state, {id, startDateTime, deliveryDateTime, endDateTime}){
        state.auctions.forEach(auction => {
            if(auction.id === id){
                auction.startDate = startDateTime
                auction.endDate = endDateTime
                auction.deliveryDate = deliveryDateTime
            }
        });
    },
    closeAuction(state, id){
        state.auctions.forEach(auction => {
            if(auction.id === id){
                auction.status = 'closed'
            }
        });
    },
    setResponseObj(state, resObj){
        state.resObj.error = resObj.error
        state.resObj.msg = resObj.msg
    },
    /*
    addBid(state, {auctionID, bid}){
        state.auctions.forEach(auction => {
            if(auction.id === auctionID){
                auction.bids.push(bid)
            }
        });
    }*/
}

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
};
const url = "http://localhost:8081/";
//const url = "https://707a-178-165-201-45.eu.ngrok.io/"

const actions = {
    /*
    addBid({commit}, {deliveryDate, user, auctionID}){
        const bid= {deliveryDate: deliveryDate, user:user, auction:auctionID, status:'open'}
        commit('addBid', {auctionID, bid})
    },*/
    showDetails({commit}, id){
        commit('showDetails', id)
    },
    buttonClicked({commit}, stateChange){
        commit('buttonClicked', stateChange)
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
            const response = await axios.get(url + 'auctions/all', config)
            console.log('getAll: ' + response)

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
    
    async update({commit}, {id, startDateTime, deliveryDateTime, endDateTime}){ 
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.put('auctions/' + id, {id, startDateTime, deliveryDateTime, endDateTime}, config)
            console.log('update: ' + response)
            const auction = response.data
            commit('update', auction)

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
    },
    async create({commit}, {title, desc, startDate, endDate, deliveryDate, items}){ //+imgLink
        let resObj = {
            error: false,
            msg: ''
        }       
        try{
            let imgLink = '../../assets/dummyImg.png'
            const response = await axios.post(url + 'auctions/', {title, desc, startDate, endDate, deliveryDate, items, imgLink}, config) //+imgLink
            console.log('create: ' + response)

            const auction = response.data

            commit('create', auction)
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
    async closeAuction({commit}, id){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.put(url + 'auctions/' +id)
            console.log('closeAuction: ' + response)

            // response status code 

            commit('closeAuction', id)
            resObj.msg = 'Auction closed successfully'
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
    getAuctionsByCategory(filter){
        console.log(filter)
        const filteredAuctions = []
        state.auctions.forEach(auction => {
            /*
            auction.categories.forEach(category => {
                if(category === filter){
                    filteredAuctions.push(auction)
                }
            });*/

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
        return state.auctions.find(auction => auction.id === id)
    },
    getItemsForAuction: (state) => (id) =>{
        const auction = state.auctions.find(auction => auction.id ===id)
        return auction.auctionitems
    },
    getBidsForAuction: (state) => (id) =>{
        const auction = state.auctions.find(auction => auction.id ===id)
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
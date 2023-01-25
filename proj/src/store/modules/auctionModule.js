import axios from "axios"

const state = {
    auctions:[
        { // ganzer user wird mitgeschickt
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
    requestError: '',
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
    create(state, {userId, startDateTime, deliveryDateTime, endDateTime}){
        const items = []
        const auction = {user: userId, startDate: startDateTime, deliveryDate: deliveryDateTime, endDate: endDateTime, auctionitems: items}
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
    setRequestError(state, message){
        state.requestError = message
    },
    addBid(state, {auctionID, bid}){
        state.auctions.forEach(auction => {
            if(auction.id === auctionID){
                auction.bids.push(bid)
            }
        });
    }
}

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
};
const url = "http://localhost:8081/";
//const url = "https://707a-178-165-201-45.eu.ngrok.io/"

const actions = {
    addBid({commit}, {deliveryDate, user, auctionID}){
        const bid= {deliveryDate: deliveryDate, user:user, auction:auctionID, status:'open'}
        commit('addBid', {auctionID, bid})
    },
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
        try{
            const response = await axios.get(url + 'auctions/all', config)
            console.log('getAll: ' + response)

            const auctionList = response.data

            commit('getAll', auctionList)
        }catch(error){
            console.log(error)
            commit('setRequestError', error.message)
        }
    },
    
    async update({commit}, {id, startDateTime, deliveryDateTime, endDateTime}){ 
        /*
        try{
            const response = await axios.put('auctions/' + id, {}, config)
            console.log('update: ' + response)

            // response is die erstellte auction
            const auction = response.data
            commit('update', auction)
        }catch(error){
            console.log(error)
            commit('setRequestError', error.message)
        }*/

        commit('update', {id, startDateTime, deliveryDateTime, endDateTime})
    },
    async delete({commit}, id){
        /*
        try{
            const response = await axios.delete(url + 'auctions/' + id, config)
            console.log('delete: ' + response)

            commit('delete', id)
        }catch(error){
            console.log(error.message)
            commit('setRequestError', error.message)
        }*/
        commit('delete', id)
    },
    async create({commit}, {userId, startDateTime, deliveryDateTime, endDateTime}){ //items
        /*
        try{
            // items = [{productId, amount, costPerUnit}]

            const items =[]
            const response = await axios.post(url + 'auctions/', {userId, startDateTime, deliveryDateTime, endDateTime, items}, config) //auction data mitschicken ohne user
            console.log('create: ' + response)

            const auction = response.data

            commit('create', auction)
        }catch(error){
            console.log(error)
            commit('setRequestError', error.message)
        }*/
        commit('create', {userId, startDateTime, deliveryDateTime, endDateTime})
    },
    async closeAuction({commit}, id){
        try{
            const response = await axios.put(url + 'auctions/' +id)
            console.log('closeAuction: ' + response)

            // response status code 

            commit('closeAuction', id)
        }catch(error){
            console.log(error)
            commit('setRequestError', error.message)
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
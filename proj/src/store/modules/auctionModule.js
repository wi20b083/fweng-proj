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
                userID: 1,
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
                        user:{
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
                    },
                    auction: {},
                    status:'open',
                    items:[],
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
    createBidButtonClicked: false
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
    create(state, auction){
        state.auctions.push(auction)
    },
    delete(state, id){
        for(var i = 0; i<state.auctions.length; i++){
            if(state.auctions[i].id === id){
                state.auctions.remove(i)
            }
        }
    },
    update(state, auctionUpdated){
        state.auctions.forEach(auction => {
            if(auction.id === auctionUpdated.id){
                auction = auctionUpdated
            }
        });
    },
    closeAuction(state, id){
        state.auctions.forEach(auction => {
            if(auction.id === id){
                auction.status = 'closed'
            }
        });
    }
}

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    }
};
const url = "http://localhost:8081/";

const actions = {
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
        }
    },
    
    async update({commit}, {id}){ // what data how spell ???
        try{
            const response = await axios.put('auctions/' + id, {}, config) // send auction without user
            console.log('update: ' + response)

            // response is die erstellte auction
            const auction = response.data
            commit('update', auction)
        }catch(error){
            console.log(error)
        }
    },
    async delete({commit}, id){
        try{
            const response = await axios.delete(url + 'auctions/' + id, config)
            console.log('delete: ' + response)

            // response is http status 


            commit('delete', id)
        }catch(error){
            console.log(error)
        }
    },
    async create({commit}, {userId, startDateTime, deliveryDateTime, endDateTime, items}){ // what data how spell ???
        try{
            // items = [{productId, amount, costPerUnit}]

            const response = await axios.post(url + 'auctions/', {userId, startDateTime, deliveryDateTime, endDateTime, items}, config) //auction data mitschicken ohne user
            console.log('create: ' + response)

            const auction = response.data

            commit('create', auction)
        }catch(error){
            console.log(error)
        }
    },
    async closeAuction({commit}, id){
        try{
            const response = await axios.put(url + 'auctions/' +id)
            console.log('closeAuction: ' + response)

            // response status code 

            commit('closeAuction', id)
        }catch(error){
            console.log(error)
        }
    },
    
}

const getters = {
    
    getAuctionsByCategory(filter){
        const filteredAuctions = []
        state.auctions.forEach(auction => {
            auction.categories.forEach(category => {
                if(category === filter){
                    filteredAuctions.push(auction)
                }
            });
        })
        return filteredAuctions
    },
    getAuctionsByStartDate(filter){
        const filteredAuctions = []
        state.auctions.forEach(auction => {
            if(auction.start === filter){
                filteredAuctions.push(auction)
            }
        })
        return filteredAuctions
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
    }

}

export default{
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
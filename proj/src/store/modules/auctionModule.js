import axios from "axios"

const state = {
    auctions:[
        {
            id: 1,
            title: "Auction 1",
            imagesource: require("../../assets/dummyImg.png"),
            alttext: "dummy image",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi2",
            categories: ["beverage", "wine"],
            details:{
                auctionItems: [
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
                total: '',
            },
        },
        {
            id: 2,
            title: "Auction 2",
            imagesource: require("../../assets/dummyImg.png"),
            alttext: "dummy image",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi2",
            categories: ["beverage", "wine"],
            details:{
                auctionItems: [1, 2, 3,],
                total: '',
            },

        },
        {
            id: 3,
            title: "Auction 3",
            imagesource: require("../../assets/dummyImg.png"),
            alttext: "dummy image",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi2",
            categories: ["beverage", "wine"],
            details:{
                auctionItems: [1, 2, 3,],
                total: '',

            },
        },
        {
            id: 4,
            title: "Auction 4",
            imagesource: require("../../assets/dummyImg.png"),
            alttext: "dummy image",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi2",
            categories: ["beverage", "wine"],
            details:{
                auctionItems: [1, 2, 3,],
                total: '',

            },
        },
        {
            id: 5,
            title: "Auction 5",
            imagesource: require("../../assets/dummyImg.png"),
            alttext: "dummy image",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi2",
            categories: ["beverage", "wine"],
            details:{
                auctionItems: [1, 2, 3,],
                total: '',

            },
        },
        {
            id: 6,
            title: "Auction 6",
            imagesource: require("../../assets/dummyImg.png"),
            alttext: "dummy image",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi2",
            categories: ["beverage", "wine"],
            details:{
                auctionItems: [1, 2, 3,],
                total: '',

            },
        },
        {
            id: 7,
            title: "Auction 7",
            imagesource: require("../../assets/dummyImg.png"),
            alttext: "dummy image",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi2",
            categories: ["beverage", "wine"],
            details:{
                auctionItems: [1, 2, 3,],
                total: '',
            },
        },
        {
            id: 8,
            title: "Auction 8",
            imagesource: require("../../assets/dummyImg.png"),
            alttext: "dummy image",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi2",
            categories: ["beverage", "wine"],
            details:{
                auctionItems: [1, 2, 3,],
                total: '',
            },
        },
        {
            id: 9,
            title: "Auction 9",
            imagesource: require("../../assets/dummyImg.png"),
            alttext: "dummy image",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi2",
            categories: ["beverage", "wine"],
            details:{
                auctionItems: [{
                    id: 1,
                    name: "Beer",
                    imagesource: require("../../assets/beer.png"),
                    alttext: "Image of beer",
                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: require("../../assets/wine.png"),
                    alttext: "image of wine",
                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: require("../../assets/dummyImg.png"),
                    alttext: "image of wine",
                },        ],
                total: '',
            },
        },
        {
            id: 10,
            title: "Auction 10",
            imagesource: require("../../assets/dummyImg.png"),
            alttext: "dummy image",
            start: "15.11.2022",
            end: "30.11.2022",
            user: "MusterMaxi2",
            categories: ["beverage", "wine"],
            details:{
                auctionItems: [1, 2, 3,],
                total: '',
            },
        },
    ],
    filteredAuctions:'',
    auctionDetails: '',
    createBidButtonClicked: false
}

const mutations = {
    showDetails(state, auction){
        state.auctionDetails = auction
    },
    updateList(state, auctions){
        state.auctions = auctions
    },
    buttonClicked(state, stateChange){
        state.createBidButtonClicked = stateChange
    }
}

const actions = {
    showDetails({commit}, id){
        commit('showDetails', id)
    },
    buttonClicked({commit}, stateChange){
        commit('buttonClicked', stateChange)
    },
    async getAll({commit}){
        try{
            const response = await axios.get('http://localhost:8080/auctions/all')
            console.log('getAll: ' + response)
            commit('updateList')
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async update({commit}, {auction}){
        try{
            const response = await axios.put('http://localhost:8080/auctions/' + auction.id, {auction})
            console.log('update: ' + response)
            commit('updateList')
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async delete({commit}, id){
        try{
            const response = await axios.delete('http://localhost:8080/auctions/' + id)
            console.log('delete: ' + response)
            commit('updateList')
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async create({commit}, {auction}){
        try{
            const response = await axios.post('http://localhost:8080/auctions/', {auction})
            console.log('create: ' + response)
            commit('updateList')
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async closeAuction({commit}, id){
        try{
            const response = await axios.put('http://localhost:8080/auctions/' +id)
            console.log('closeAuction: ' + response)
            commit('updateList')
        }catch(error){
            console.log(error)
        }
    },
    
}

const getters = {
    
    getAuctionsByCategory(state){
        console.log(state.auctions)
        
        /*
        const filteredAuctions = []
        state.auctions.forEach(auction => {
            auction.categories.forEach(category => {
                if(category == 'wine'){
                    filteredAuctions.push(auction)
                }
            });
        })
        return filteredAuctions*/
    },
    getAuctionsByStartDate(){

    },
    getAuctionById: (state) => (id) =>{
        return state.auctions.find(auction => auction.id === id)
    },
    getAuctionItemsByAuctionId: (state) => (id) =>{
        return state.auctions.find(auction => auction.id === id).details.auctionItems
    }

}

export default{
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
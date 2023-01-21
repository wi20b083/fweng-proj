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
            categories: ["beverage", "wine", "beer"],
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
            categories: ["beverage", "beer"],
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
            categories: ["beverage", "beer"],
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
    filterAuctionsByCategory: false,
    filterAuctionsByStartDate: false,
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
    },
    filterAuctionsByCategory(state, category){
        state.filterAuctionsByCategory = category
    },
    filterAuctionsByStartDate(state, date){
        state.filterAuctionsByStartDate = date
    },
    clearAuctionFilter(state){
        state.filterAuctionsByCategory = ''
        state.filterAuctionsByStartDate = ''
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
    clearAuctionFilter({commit}){
        commit('clearAuctionFilter')
    },
    async getAll({commit}){
        try{
            const response = await axios.get(url + 'auctions/all', config)
            console.log('getAll: ' + response)

            const auctionList = response.data // .auctions ???

            commit('updateList', auctionList)
        }catch(error){
            console.log(error)
        }
    },
    
    async update({commit}, {id}){ // what data how spell ???
        try{
            const response = await axios.put('auctions/' + id, {}, config)
            console.log('update: ' + response)

            // what response what to change in state ?

            commit('updateList')
        }catch(error){
            console.log(error)
        }
    },
    async delete({commit}, id){
        try{
            const response = await axios.delete(url + 'auctions/' + id, config)
            console.log('delete: ' + response)

            // what response what to change in state ?


            commit('updateList')
        }catch(error){
            console.log(error)
        }
    },
    async create({commit}){ // what data how spell ???
        try{
            const response = await axios.post(url + 'auctions/', config)
            console.log('create: ' + response)

            const auctionList = response.data //.auctions ???

            commit('updateList', auctionList)
        }catch(error){
            console.log(error)
        }
    },
    async closeAuction({commit}, id){
        try{
            const response = await axios.put(url + 'auctions/' +id)
            console.log('closeAuction: ' + response)

            // what response what to change in state ?

            commit('updateList')
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
                if(category == filter){
                    filteredAuctions.push(auction)
                }
            });
        })
        return filteredAuctions
    },
    getAuctionsByStartDate(filter){
        const filteredAuctions = []
        state.auctions.forEach(auction => {
            auction.start.forEach(date => {
                if(date == filter){
                    filteredAuctions.push(auction)
                }
            });
        })
        return filteredAuctions
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
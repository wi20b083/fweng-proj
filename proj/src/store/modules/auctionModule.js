

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
                auctionItems: [1, 2, 3,],
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
                auctionItems: [1, 2, 3,],
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
    auctionDetails: ''
}

const mutations = {
    showDetails(state, auction){
        state.auctionDetails = auction
    },
}

const actions = {
    showDetails({commit}, id){
        commit('showDetails', id)
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
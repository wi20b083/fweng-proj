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
                total: '',
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
                total: '',
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
                total: '',
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
                total: '',
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
                total: '',
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
                total: '',
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
                total: '',
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
                total: '',
            },
        },
    ],

    
}

const mutations ={

}

const actions = {

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
import { createStore } from 'vuex'
import userModule from './modules/userModule.js'
import auctionModule from './modules/auctionModule.js'
import bidModule from './modules/bidModule'
import itemsModule from './modules/itemsModule.js'

export const store = createStore({
    state: {
    
    },
    getters: {
    
    },
    mutations: {
    
    },
    actions: {
    
    },
    modules:{
        userModule,
        auctionModule,
        bidModule,
        itemsModule
    }
})


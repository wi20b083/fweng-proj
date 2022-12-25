import { createStore } from 'vuex'
import userModule from './modules/userModule.js'
//import auctionsModule from './modules/auctionsModule'
//import bidsModule from './modules/bidsModule'

export const store = createStore({
    state: {
    //isLogin: false,
    //isAdmin: false,
    },
    getters: {
    
    },
    mutations: {
    
    },
    actions: {
    
    },
    modules:{
        userModule,
        //auctionsModule,
        //bidsModule
    }
})


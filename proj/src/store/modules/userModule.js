import {router} from '../../router'
import axios from 'axios'

const state ={
    isLogin: false,
    token: {},
    user:{
      fname: String,
      lname: String,
      eamil: String,
      username: String,
      stree: String,
      streetNr: Number,
      zip: Number,
      city: String,
    },
    userList:[]
}

//only synchronus code -> commit mutations
const mutations = {
  login(state, username, token){
    state.isLogin = true
    state.user = username
    state.token = token
  },
  logout(state, newState){
    state.isLogin = newState
  },
  getUserList(state, userList){
    state.userList = userList
  },
  

}

// async is allowed, do api calls here -> dispatch actions
const actions = {
    login({commit}, username){
      console.log('login action')
      axios.get('http://localhost:8080/login') 
          .then(response =>{
              // was für response ? true/false oder user data oder JWT????
              // je nach response abfragen ob true/false, oder token lokal speichern
              console.log(response.data)
              commit('login', username, response.data)
              router.push('/')
          })
          .catch((error) =>{
            console.log(error)
          })

    },
    logout({commit}){
      console.log('logout action')
      commit('logout', false)
    },
    getUserList({commit}){
      console.log('getUserList action')
      axios.get('http://localhost:8080/users')
        .then(response =>{
          console.log(response.data)
          commit('getUserList', response.data)
        })
        .catch(error =>{
          console.log(error)
        })
    },
    // ist kein state change, gehört hier dazu ? wenn nicht wo sonst?
    createUser({commit}){

    }
}

/*const getters = {
    
}*/

export const login = {
    namespaced: true,
    state,
    actions,
    mutations,
    //getters
};
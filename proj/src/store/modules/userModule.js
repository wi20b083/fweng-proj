import axios from "axios"

const state = {
    isLogin: false,
    //bei login überprüfen ob admin oder nicht
    isAdmin: false,
    token: {},
    user:{
        fname: String,
        lname: String,
        email: String,
        username: String,
        pw: String,
        street: String,
        streetNr: Number,
        zip: Number,
        city: String,
    },
    userList:[],
    userProfileActiveButton: 'personal',
}

//only synchronus code -> commit mutations
const mutations = {
    login(state, {username, password}){
       state.user.username = username
       state.user.password = password
       state.isLogin = true
    },
    logout(state){
        state.isLogin = false
        state.user = null
        state.token = null
    },
    register(state, {user, token}){
        state.user.fname = user.fname
        state.user.lname = user.lname
        state.user.email = user.email
        state.user.username = user.username
        state.user.pw = user.pw
        state.user.street = user.street
        state.user.streetNr = user.streetNr
        state.user.zip = user.zip
        state.user.city = user.city
        state.token = token
    },
    userProfileLoadOrganism(state, buttonClicked){
        state.userProfileActiveButton = buttonClicked
    }
}

// async is allowed, do api calls here -> dispatch actions

// SAVE TOKEN IN STORE + SEND IT WITH REQUESTS !!!
const actions = {
    async login({commit}, {username, password}){
        try{
            const response = await axios.post('http://localhost:8080/register', {username, password})
            // SET TOKEN HERE (GET IT FROM RESPONSE)


            console.log('login: '+response)
            commit('login', {username, password})
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async logout({commit}, token){
        try{
            const response = await axios.get('http://localhost:8080/login?logout=true', token)
            // REMOVE TOKEN HERE FROM LOCAL STORAGE


            console.log('logout: '+response)
            commit('logout')
        }catch(error){
            console.log(error)
        }
    },
    async register({commit}, {user}){
        try{
            const response = await axios.post('http://localhost:8080/register', {user})
            console.log('register: '+response)
            commit('register', {user});
        }catch(error){
            console.log(error)
        }
        

        //const response = userService.register({fname, lname, email, username, pw, street, streetNr, zip, city})
    },
    // -> SEND TOKEN
    async getAll({commit}){
        try{
            const response = await axios.get('http://localhost:8080/users/all')
            console.log('getAll: ' + response)
            commit('getAll')
        }catch(error){
            console.log(error)
        }
        
    },
    // -> SEND TOKEN
    async getById({commit}, {id}){
        try{
            const response = await axios.get('http://localhost:8080/users/' + id)
            console.log('getById: ' + response)
            commit('getById')
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async update({commit}, {user}){
        try{
            const response = await axios.put('http://localhost:8080/users/' + user.id + '?pwchange=true', {user})
            console.log('update: ' + response)
            commit('update')
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async deleteUser({commit}, id){
        try{
            const response = await axios.delete('http://localhost:8080/users/' + id)
            console.log('deleteUser: ' + response)
            commit('deleteUser')
        }catch(error){
            console.log(error)
        }
    },
    userProfileLoadOrganism({commit}, buttonClicked){
        commit('userProfileLoadOrganism', buttonClicked)
    }
}

// getters: to filter or change data for output
const getters = {

}

export default{
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
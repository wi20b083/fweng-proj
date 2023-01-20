import axios from "axios"
import jwtDecode from "jwt-decode"

const state = {
    isLogin: false,
    isAdmin: false,
    admin:{
        id: Number,
        fname: String,
        lname: String,
        email: String,
        username: String,
        street: String,
        streetNr: Number,
        zip: Number,
        city: String,
    },
    token: {},
    user:{
        id: Number,
        fname: String,
        lname: String,
        email: String,
        username: String,
        street: String,
        streetNr: Number,
        zip: Number,
        city: String,
    },
    userList:[
        {
            id: 1,
            fname: 'Lara',
            lname: 'Roth',
            email: 'lararoth1999@gmail.com',
            username: 'llara_rh',
            street: 'Testarellogasse',
            streetNr: 24,
            zip: 1130,
            city: 'Vienna',
            status: 'blocked',
        },
        {
            id: 2,
            fname: 'Lara',
            lname: 'Roth',
            email: 'lararoth1999@gmail.com',
            username: 'llara_rh',
            street: 'Testarellogasse',
            streetNr: 24,
            zip: 1130,
            city: 'Vienna',
            status: 'unblocked'

        },
        {
            id: 3,
            fname: 'Lara',
            lname: 'Roth',
            email: 'lararoth1999@gmail.com',
            username: 'llara_rh',
            street: 'Testarellogasse',
            streetNr: 24,
            zip: 1130,
            city: 'Vienna',
            status: 'blocked'

        },
        {
            id: 4,
            fname: 'Lara',
            lname: 'Roth',
            email: 'lararoth1999@gmail.com',
            username: 'llara_rh',
            street: 'Testarellogasse',
            streetNr: 24,
            zip: 1130,
            city: 'Vienna',
            status: 'unblocked'

        },
        {
            id: 5,
            fname: 'Lara',
            lname: 'Roth',
            email: 'lararoth1999@gmail.com',
            username: 'llara_rh',
            street: 'Testarellogasse',
            streetNr: 24,
            zip: 1130,
            city: 'Vienna',
            status: 'blocked'

        },
        {
            id: 6,
            fname: 'Lara',
            lname: 'Roth',
            email: 'lararoth1999@gmail.com',
            username: 'llara_rh',
            street: 'Testarellogasse',
            streetNr: 24,
            zip: 1130,
            city: 'Vienna',
            status: 'unblocked'

        },
        {
            id: 7,
            fname: 'Lara',
            lname: 'Roth',
            email: 'lararoth1999@gmail.com',
            username: 'llara_rh',
            street: 'Testarellogasse',
            streetNr: 24,
            zip: 1130,
            city: 'Vienna',
            status: 'blocked'

        },
        {
            id: 8,
            fname: 'Lara',
            lname: 'Roth',
            email: 'lararoth1999@gmail.com',
            username: 'llara_rh',
            street: 'Testarellogasse',
            streetNr: 24,
            zip: 1130,
            city: 'Vienna',
            status: 'unblocked'

        },
        {
            id: 9,
            fname: 'Lara',
            lname: 'Roth',
            email: 'lararoth1999@gmail.com',
            username: 'llara_rh',
            street: 'Testarellogasse',
            streetNr: 24,
            zip: 1130,
            city: 'Vienna',
            status: 'blocked'
        },
    ],
    userProfileActiveButton: 'personal',
    userToEdit: '',
}

//only synchronus code -> commit mutations
const mutations = {
    login(state, {user, token}){
       state.user = user
       state.isLogin = true
       state.token = token

    },
    loginAdmin(state, {user, token}){
        state.admin = user
        state.isLogin = true
        state.token = token
    }, 
    logout(state){
        state.isLogin = false
        state.user = null
        state.token = null
    },
    register(state, {user}){
        state.user.fname = user.fname
        state.user.lname = user.lname
        state.user.email = user.email
        state.user.username = user.username
        state.user.pw = user.pw
        state.user.street = user.street
        state.user.streetNr = user.streetNr
        state.user.zip = user.zip
        state.user.city = user.city
    },
    update(state, user){
        state.user = user
    },
    userProfileLoadOrganism(state, buttonClicked){
        state.userProfileActiveButton = buttonClicked
    },
    changeUserState(){
        //impl - ?getting updates user list, or just changing in userList on clientSite?
    },
    setUser(state, id){
        state.userToEdit = id
    },
    resetPassword(){
        //impl - ?getting updates user list, or just changing in userList on clientSite?
    }
}

// async is allowed, do api calls here -> dispatch actions

// SAVE TOKEN IN STORE + SEND IT WITH REQUESTS !!!
const actions = {
    async login({commit}, {username, password}){

        try{
            const response = await axios.post('http://localhost:8081/login', {username, password})
            // SET TOKEN HERE (GET IT FROM RESPONSE)


            // is user = admin 
            // if user != admin
            const isAdmin = false


            const token = response.data.token
            const decodedToken = jwtDecode(token)
            const userRoles = decodedToken.roles
            if(userRoles.length == 2){
                isAdmin = true
            }
            commit('login', response.data)
            

        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async logout({commit}, token){
        try{
            const response = await axios.get('http://localhost:8081/login?logout=true', token)
            // REMOVE TOKEN HERE FROM LOCAL STORAGE


            console.log('logout: '+response)
            commit('logout')
        }catch(error){
            console.log(error)
        }
    },
    async register({commit}, {firstName, lastName, imgLink, userName, password, email, status, address}){
        try{
            const response = await axios.post('http://localhost:8081/register', {firstName, lastName, imgLink, userName, password, email, status, address})
            console.log('register: '+response)
            commit('register', {firstName, lastName, imgLink, userName, password, email, status, address});
        }catch(error){
            console.log(firstName, lastName, imgLink, userName, password, email, status, address)
            console.log(error)
        }
        

        //const response = userService.register({fname, lname, email, username, pw, street, streetNr, zip, city})
    },
    // -> SEND TOKEN
    async getAll({commit}){
        try{
            const response = await axios.get('http://localhost:8081/users/all')
            console.log('getAll: ' + response)
            commit('getAll')
        }catch(error){
            console.log(error)
        }
        
    },
    // -> SEND TOKEN
    async getById({commit}, {id}){
        try{
            const response = await axios.get('http://localhost:8081/users/' + id)
            console.log('getById: ' + response)
            commit('getById')
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async update({commit}, {user}){
        try{
            const response = await axios.put('http://localhost:8081/users/' + user.id + '?pwchange=true', {user})
            console.log('update: ' + response)
            commit('update')
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async deleteUser({commit}, id){
        try{
            const response = await axios.delete('http://localhost:8081/users/' + id)
            console.log('deleteUser: ' + response)
            commit('deleteUser')
        }catch(error){
            console.log(error)
        }
    },
    // -> SEND TOKEN
    async changeUserState({commit}, id){
        try{
            const response = await axios.put('http://localhost:8081/users/' + id)
            console.log('changeUserState: ' + response)
            commit('changeUserState')
        }catch(error){
            console.log(error)
        }
    },
    async resetPassword({commit}, {pwOld, pwNew}){
        try{
            // what is url for pw change ????
            const response = await axios.put('http://localhost:8081/users/' )
            console.log('changePassword: ' + response)
            commit('resetPassword', {pwOld, pwNew})
        }catch(error){
            console.log(error)
        }

    },
    userProfileLoadOrganism({commit}, buttonClicked){
        commit('userProfileLoadOrganism', buttonClicked)
    },
    setUser({commit}, id){
        commit('setUser', id)
    }
}

// getters: to filter or change data for output
const getters = {
    getUserById: (state) => (id) => {
        return state.userList.find(user => user.id === id)
    }
}

export default{
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
import axios from "axios"
import jwtDecode from "jwt-decode"


const state = {
    isLogin: false,
    isAdmin: false,
    admin:{
        id: Number,
        roles:[],
        firstName: String,
        lastName: String,
        imgLink: String,
        username: String,
        email: String,
        status: String,
        street: String,
        streetNr: Number,
        zip: Number,
        city: String,
        auctions: [],
        bids: []
    },
    token: {}, // muss ich token hier speichern, wenn er lokal gespeichert ist und ich ihn so auch abrufe
    user:{
        id: Number,
        roles:[],
        firstName: String,
        lastName: String,
        imgLink: String,
        username: String,
        email: String,
        status: String,
        street: String,
        streetNr: Number,
        zip: Number,
        city: String,
        auctions: [],
        bids: []
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
    login(state, {isAdmin}){
       //state.user = user
       state.isLogin = true
       state.isAdmin = isAdmin
       //state.token = token

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

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    }
};
const url = "http://localhost:8081/";
  

const actions = {
    async login({commit}, {username, password}){

        try{
            const response = await axios.post(url + 'login', {username, password}) //'http://localhost:8081/login'
            // SET TOKEN HERE (GET IT FROM RESPONSE)

            var isAdmin = false


            const token = response.data.token
            localStorage.setItem('token', token)
            const decodedToken = jwtDecode(token)
            const userRoles = decodedToken.roles

            console.log(decodedToken)
            if(userRoles.length == 2){
                isAdmin = true
            }

            //Get User Data to specific user with userId in token
            
            

            commit('login', {isAdmin}) // + userID mitschicken
            

        }catch(error){
            console.log(error)
        }
    },
    async logout({commit}){
        try{
            const response = await axios.get(url +'login?logout=true', config)
            // REMOVE TOKEN HERE FROM LOCAL STORAGE


            console.log('logout: '+response)
            commit('logout')
        }catch(error){
            console.log(error)
        }
    },
    async register({commit}, {firstName, lastName, imgLink, userName, password, email, status, address}){
        try{
            const response = await axios.post(url + 'register', {firstName, lastName, imgLink, userName, password, email, status, address})
            console.log('register: '+response)
            const user = response.data //.user ???
            console.log(user)
            commit('register', {firstName, lastName, imgLink, userName, password, email, status, address});
        }catch(error){
            console.log(firstName, lastName, imgLink, userName, password, email, status, address)
            console.log(error)
        }
    },
    async getAll({commit}){
        try{
            const response = await axios.get(url + 'users/all', config)
            console.log('getAll: ' + response)
            commit('getAll')
        }catch(error){
            console.log(error)
        }
        
    },
    async getById({commit}, {id}){
        try{
            const response = await axios.get(url + 'users/' + id, config)
            console.log('getById: ' + response)
            const user = response.data.user
            commit('getById', user)
        }catch(error){
            console.log(error)
        }
    },
    async update({commit}, {id ,firstName, lastName, imgLink, userName, email, status, address}){
        try{
            const response = await axios.put(url +'users/' + id , {firstName, lastName, imgLink, userName, email, status, address}, config)
            console.log('update: ' + response)

            // what to update in state ????
            // response for != isAdmin => user, response for = isAdmin => userList
            commit('update')
        }catch(error){
            console.log(error)
        }
    },
    async deleteUser({commit}, id){
        try{
            const response = await axios.delete(url + 'users/' + id, config)
            console.log('deleteUser: ' + response)

            // what is response for admin, what for user ????

            commit('deleteUser')
        }catch(error){
            console.log(error)
        }
    },
    async changeUserState({commit}, id){
        try{
            const response = await axios.put(url + 'users/' + id, config)
            console.log('changeUserState: ' + response)

            // what response ???
            // what to change in state ???

            commit('changeUserState')
        }catch(error){
            console.log(error)
        }
    },
    async resetPassword({commit}, {pwOld, pwNew}){
        try{
            // what is url for pw change ???
            const response = await axios.put(url + 'users/', {pwOld, pwNew}, config )
            console.log('changePassword: ' + response)

            // what is response ???
            // what to change in state ???

            commit('resetPassword')
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
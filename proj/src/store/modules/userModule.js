import axios from "axios"
//import jwtDecode from "jwt-decode"
const state = {
    isLogin: true,
    isAdmin: false,
    token: {}, 
    user:{
        id: 1,
        roles:['user'],
        firstName: 'Lara-Antonella',
        lastName: 'Roth',
        imgLink: require('../../assets/dummyImg.png'),
        username: 'antonella_llara_rh',
        email: 'lararoth1999@gmail.com',
        status: 'unblocked',
    },
    userList:[
        {
            id: 1,
            roles:['user'],
            firstName: 'Antonella',
            lastName: 'Roth',
            imgLink: require('../../assets/dummyImg.png'),
            username: 'antonella_rh',
            email: 'lararoth1999@gmail.com',
            status: 'unblocked',
            auctions: [],
            bids: []
        },
        {
            id: 2,
            roles:['user'],
            firstName: 'Antonella',
            lastName: 'Roth',
            imgLink: require('../../assets/dummyImg.png'),
            username: 'antonella_rh',
            email: 'lararoth1999@gmail.com',
            status: 'unblocked',
            auctions: [],
            bids: []
        },
        {
            id: 3,
            roles:['user'],
            firstName: 'Antonella',
            lastName: 'Roth',
            imgLink: require('../../assets/dummyImg.png'),
            username: 'antonella_rh',
            email: 'lararoth1999@gmail.com',
            status: 'unblocked',
            auctions: [],
            bids: []

        },
        {
            id: 4,
            roles:['user'],
            firstName: 'Antonella',
            lastName: 'Roth',
            imgLink: require('../../assets/dummyImg.png'),
            username: 'antonella_rh',
            email: 'lararoth1999@gmail.com',
            status: 'unblocked',
            auctions: [],
            bids: []

        },
        {
            id: 5,
            roles:['user'],
            firstName: 'Antonella',
            lastName: 'Roth',
            imgLink: require('../../assets/dummyImg.png'),
            username: 'antonella_rh',
            email: 'lararoth1999@gmail.com',
            status: 'unblocked',
            auctions: [],
            bids: []

        },
        {
            id: 6,
            roles:['user'],
            firstName: 'Antonella',
            lastName: 'Roth',
            imgLink: require('../../assets/dummyImg.png'),
            username: 'antonella_rh',
            email: 'lararoth1999@gmail.com',
            status: 'unblocked',
            auctions: [],
            bids: []

        },
        {
            id: 7,
            roles:['user'],
            firstName: 'Antonella',
            lastName: 'Roth',
            imgLink: require('../../assets/dummyImg.png'),
            username: 'antonella_rh',
            email: 'lararoth1999@gmail.com',
            status: 'unblocked',
            auctions: [],
            bids: []

        },
        {
            id: 8,
            roles:['user'],
            firstName: 'Antonella',
            lastName: 'Roth',
            imgLink: require('../../assets/dummyImg.png'),
            username: 'antonella_rh',
            email: 'lararoth1999@gmail.com',
            status: 'unblocked',
            auctions: [],
            bids: []
        },
        {
            id: 9,
            roles:['user'],
            firstName: 'Antonella',
            lastName: 'Roth',
            imgLink: require('../../assets/dummyImg.png'),
            username: 'antonella_rh',
            email: 'lararoth1999@gmail.com',
            status: 'unblocked',
            auctions: [],
            bids: []        },
    ],
    userProfileActiveButton: 'personal',
    userToEdit: '',
    resObj : {
        error: false,
        msg: ''
    }

}

//only synchronus code -> commit mutations
const mutations = {
    login(state, {isAdmin, user, token}){
       state.isLogin = true
       state.isAdmin = isAdmin
       state.token = token
       state.user = user
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
    register(state, {user}){ // keine daten zurück 
        state.user.fname = user.fname
        state.user.lname = user.lname
        state.user.email = user.email
        state.user.username = user.username
        state.user.pw = user.pw
        //state.user.street = user.street
        //state.user.streetNr = user.streetNr
        //state.user.zip = user.zip
        //state.user.city = user.city
    },
    update(state, user){
        //state.user = user
        state.user.username = user.username
        state.user.email = user.email
        state.user.firstName = user.firstName
        state.user.lastName = user.lastName
    },
    updateUserAsAdmin(state, userUpdated){
        state.userList.forEach(user => {
            if(user.id === userUpdated.id){
                user = userUpdated
            }
        });
    },
    userProfileLoadOrganism(state, buttonClicked){
        state.userProfileActiveButton = buttonClicked
    },
    changeUserState(state, id){
        state.userList.forEach(user => {
            if(user.id === id){
                if(user.status === 'blocked'){
                    user.status = 'unblocked'
                    console.log('User was blocked and is now: '+user.status)
                }else{
                    user.status = 'blocked'
                    console.log('User was unblocked and is now: '+user.status)

                }
            }
        });
        
    },
    setUser(state, id){
        state.userToEdit = id
    },
    deleteUser(state){
        state.isLogin = false
        state.isAdmin = false
        state.user = {}
        console.log('user deleted his own profile and was logged out, isLogin is: ' + state.isLogin)
    },
    deleteUserAsAdmin(state, id){
        const userListNew = []
        state.userList.forEach(user =>{
            if(user.id != id){
                userListNew.push(user)
            }
        })
        state.userList = userListNew

    },
    getAll(state, userList){
        state.userList = userList 
    },
    getById(state, user){
        state.user = user
    },
    setResponseObj(state, resObj){
        state.resObj.error = resObj.error
        state.resObj.msg = resObj.msg
    }

}

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
};
const url = "http://localhost:8081/";
//const url = "https://8eee-178-165-201-45.eu.ngrok.io/"
  

const actions = {
    async login({commit}, {uname, pw}){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            // response = { user: {id, fname, lname, email, uname, roles[], imgLink, status}}
            const response = await axios.post(url + 'login', {uname, pw})
            
            const token = response.data.token
            const user = response.data.user
            var isAdmin = !!(response.data.roles.length > 1) //check if userIsAdmin
            localStorage.setItem('token', token)

            //const decodedToken = jwtDecode(token)
            //const userRoles = decodedToken.roles

            commit('login', isAdmin, user, token)
            resObj.msg = 'You have been logged in successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },
    logout({commit}){ // kein call ans backend
        let resObj = {
            error: false,
            msg: ''
        }
        localStorage.removeItem('token')
        
        commit('logout')
        resObj.msg = 'Logged out successfully'
        
        return resObj
    },
    async register({commit}, {fname, lname, email, uname, pw}){ 
        let resObj = {
            error: false,
            msg: ''
        }
        try {
            const imgLink = '../../assets/dummyImg.png'
            const response = await axios.post(url + 'register', {fname, lname, email, uname, pw, imgLink})
            console.log(response) 
            // save response.message in resObj.message           
            resObj.msg = 'You have been registered successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }   
    },
    async getAll({commit}){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.get(url + 'users/all', config)
            console.log('getAll: ' + response)
            const userList = response.data 
            commit('getAll', userList)

            resObj.msg = 'Userlist successfully retrieved'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
        
    },
    async getById({commit}, {id}){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.get(url + 'users/' + id, config)
            console.log('getById: ' + response)
            const user = response.data
            commit('getById', user)

            resObj.msg = 'User successfully retrieved'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },

    async update({commit}, {id, fname, lname, uname, email}){  //+pic 
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const imgLink = require('../../assets/dummyImg.png')
            const response = await axios.put(url +'users/' + id , {fname, lname, uname, email, imgLink}, config)

            const user = response.data
            commit('update', user)
            resObj.msg = 'User successfully retrieved'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj        
        }
    },
    async deleteUser({commit}, id){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.delete(url + 'users/' + id, config)
            console.log('deleteUser: ' + response)
            //wenn isAdmin = true dann soll user in state.userList entfernt werden,
            // sonst soll state.user entfernt werden und user ausgeloggt werden
            state.isAdmin ? commit('deleteUserAsAdmin', id) : commit('deleteUser') 
            
            resObj.msg = state.isAdmin ? 'Profile successfully deleted' : 'User successfully deleted'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },
    async changeUserState({commit}, id){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.put(url + 'users/' + id, config)
            console.log('changeUserState: ' + response)
            commit('changeUserState', id)

            resObj.msg = 'User state successfully changed'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }

    },
    async resetPassword({commit},{pwOld, pwNew}){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.put(url+'/'+this.user.id+'/pw-reset', {pwOld, pwNew}, config )
            console.log(response)

            resObj.msg = 'Password successfully changed'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            // throws maxCallStackSize Error BUT WHY ???
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }

    },
    /*
    async getUserByUsername({commit}, username){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.get(url + 'users/' + username, config)
            const user = response.data
            commit('getById', user)
            
            resObj.msg = 'User successfully retrieved'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },*/
    userProfileLoadOrganism({commit}, buttonClicked){
        commit('userProfileLoadOrganism', buttonClicked)
    },
    setUser({commit}, id){
        commit('setUser', id)
    }
}

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
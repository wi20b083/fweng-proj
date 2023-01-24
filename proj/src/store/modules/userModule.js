import axios from "axios"
import jwtDecode from "jwt-decode"


const state = {
    isLogin: true,
    isAdmin: true,
    token: {}, // muss ich token hier speichern, wenn er lokal gespeichert ist und ich ihn so auch abrufe
    user:{
        id: 1,
        roles:['user'],
        firstName: 'Antonella',
        lastName: 'Roth',
        imgLink: require('../../assets/dummyImg.png'),
        username: 'antonella_rh',
        email: 'lararoth1999@gmail.com',
        status: 'unblocked',
        street: 'Testarellogasse',
        streetNr: 24,
        zip: 1130,
        city: 'Vienna',
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
        //state.user.username = user.username
        //state.user.email = user.email
        //state.user.firstName = user.firstName
        //state.user.lastName = user.lastName
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
    }

}

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
};
const url = "http://localhost:8081/";
  

const actions = {
    async login({commit}, {username, password}){

        try{
            const response = await axios.post(url + 'login', {username, password})
            
            const token = response.data.token
            localStorage.setItem('token', token)
            const decodedToken = jwtDecode(token)

            const userRoles = decodedToken.roles
            var isAdmin = false

            console.log(decodedToken)
            if(userRoles.length == 2){
                isAdmin = true
            }

            //Get User Data to specific user with username in token -> send new request to get userByusername
            try{
                const response = await axios.get(url + 'users/' + username, config)
                const user = response.data
                commit('login', {isAdmin, user, token})
            }catch(error){
                console.log(error)
            }

        }catch(error){
            console.log(error)
        }
    },
    async logout({commit}){
        try{
            const response = await axios.get(url +'login?logout=true', config)

            localStorage.removeItem('token')

            console.log(localStorage.getItem)
            console.log('logout: '+response)
            commit('logout')
        }catch(error){
            console.log(error)
        }
    },
    async register({commit}, {firstName, lastName, userName, password, email, status}){
        try{
            const imgLink = require('../../assets/dummyImg.png')
            const response = await axios.post(url + 'register', {firstName, lastName, imgLink, userName, password, email, status})
            const user = response.data 
            commit('register', {user});
        }catch(error){
            console.log(error)
        }
    },
    async getAll({commit}){
        try{
            const response = await axios.get(url + 'users/all', config)
            console.log('getAll: ' + response)
            const userList = response.data 
            commit('getAll', userList)
        }catch(error){
            console.log(error)
        }
        
    },
    async getById({commit}, {id}){
        try{
            const response = await axios.get(url + 'users/' + id, config)
            console.log('getById: ' + response)
            const user = response.data
            commit('getById', user)
        }catch(error){
            console.log(error)
        }
    },

    async update({commit}, {id ,firstName, lastName, username, email}){
        try{
            const imgLink = require('../../assets/dummyImg.png')
            const response = await axios.put(url +'users/' + id , {firstName, lastName, imgLink, username, email}, config)

            const user = response.data
            commit('update', user)
        }catch(error){
            console.log(error)
        }
        /*
        console.log(id)

        const user = {firstName, lastName, username, email}
        commit('update', user)*/
    },
    deleteUserAsAdmin({commit}, id){
        commit('deleteUserAsAdmin', id)
    },
    async deleteUser({commit}, id){
        
        try{
            const response = await axios.delete(url + 'users/' + id, config)
            console.log('deleteUser: ' + response)

            // response status code
            if(state.isAdmin === true){
                commit('deleteUserAsAdmin', id)
            }else{
                commit('deleteUser') 
            }
        }catch(error){
            console.log(error)
        }
        /*
        console.log(id)
            commit('deleteUser') */
    },
    async changeUserState({commit}, id){
        
        try{
            const response = await axios.put(url + 'users/' + id, config)
            console.log('changeUserState: ' + response)
            commit('changeUserState', id)
        }catch(error){
            console.log(error)
        }
        //commit('changeUserState', id)

    },
    async resetPassword({pwOld, pwNew}){
        try{
            
            const response = await axios.put(url + 'users/' + this.user.id, {pwOld, pwNew}, config )
            if(response.status === 200){
                // tell user that success
            }
        }catch(error){
            console.log(error)
            // tell user that something went wrong
        }

    },
    userProfileLoadOrganism({commit}, buttonClicked){
        commit('userProfileLoadOrganism', buttonClicked)
    },
    setUser({commit}, id){
        commit('setUser', id)
    },
    async getUserByUsername({commit}, username){
        try{
            const response = await axios.get(url + 'users/' + username, config)
            const user = response.data
            commit('getById', user)
        }catch(error){
            console.log(error)
        }
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
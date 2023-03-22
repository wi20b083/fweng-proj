import axios from "axios"
const state = {
    isLogin: false,
    isAdmin: false,
    token: {}, 
    user:{},
    userList:[],
    userForCurrentAuction:{},
    userProfileActiveButton: 'personal',
    userToEdit: '',
    resObj : {
        error: false,
        msg: ''
    }
}

//only synchronus code -> commit mutations
const mutations = {
    login(state, user, token){
       state.isLogin = true
       state.isAdmin= !!(user.roles.length > 1)
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
        state.isAdmin = false
        state.user = null
        state.token = null
    },
    update(state, user){
        state.user = user
    },
    userProfileLoadOrganism(state, buttonClicked){
        state.userProfileActiveButton = buttonClicked
    },
    changeUserState(state, updatedUser){
        state.userList.forEach((user, index) => {
            if(user.uid === updatedUser.uid){
                state.userList[index] = updatedUser
            }
       })
    },
    setUser(state, id){
        state.userToEdit = id
    },
    getAll(state, userList){
        state.userList = userList 
    },
    getById(state, user){
        state.user = user
    },
    setUserForCurrentAuction(state, user){
        state.userForCurrentAuction = user
    },
    setResponseObj(state, resObj){
        state.resObj.error = resObj.error
        state.resObj.msg = resObj.msg
    }

}

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "ngrok-skip-browser-warning": true,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
};

const config2 = {
    headers:{
        "ngrok-skip-browser-warning": true,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
}
const url = "https://8144-178-115-45-233.eu.ngrok.io/";
  

const actions = {
    async login({commit}, user){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            //make call and set response data
            localStorage.removeItem('token')
            const response = await axios.post(url + 'login', user, config2)
            const token = response.data.token
            localStorage.setItem('token', token)
            //commit mutation to change state
            commit('login', response.data.user, token)
            //set response object for Success message to user
            resObj.msg = 'You have been logged in successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            //set response object for error message to user
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },
    logout({commit}){
        let resObj = {
            error: false,
            msg: ''
        }
        localStorage.removeItem('token')
        
        commit('logout')
        resObj.msg = 'Logged out successfully'
        
        return resObj
    },
    async register({commit}, user){ 
        let resObj = {
            error: false,
            msg: ''
        }
        try {
            const response = await axios.post(url + 'register', user)
            console.log(response) 
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
            console.log(error)

            return resObj
        }
        
    },
    async getById({commit}, uid){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.get(url + 'users/' + uid, config)
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
    async update({commit}, user){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.put(url +'users/' + user.uid +'/edit' , user, config)
            commit('update', response.data)
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
    async delete({commit}, uid){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.delete(url + 'users/' + uid, config)
            console.log('deleteUser: ' + response)
            localStorage.removeItem('token')
            commit('logout')
            
            resObj.msg = 'Profile successfully deleted'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },
    async changeUserState({commit}, uid){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.put(url + 'users/' + uid+'/state', uid,config)
            console.log('changeUserState: ' + response)
            commit('changeUserState', response.data)

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
    async resetPassword({commit}, {uid, pw}){
        let resObj = {
            error: false,
            msg: ''
        }
        console.log('module: '+pw)
        try{
            const response = await axios.put(url+'users/'+ uid +'/pw-reset', pw, config)
            console.log(response)
            resObj.msg = 'Password successfully changed'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }

    },
    async getUserByIdForAuction({commit}, id){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.get(url + 'users/' + {id}, config)
            const user = response.data
            commit('setUserForCurrentAuction', user)
            
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
//import { validationService } from "@/services/validationService"

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
        state.user.username = null
        state.user.password = null
    },
    register(state, {fname, lname, email, username, pw, street, streetNr, city, zip}){
        state.user.fname = fname
        state.user.lname = lname
        state.user.email = email
        state.user.username = username
        state.user.pw = pw
        state.user.street = street
        state.user.streetNr = streetNr
        state.user.zip = zip
        state.user.city = city
    },
    userProfileLoadOrganism(state, buttonClicked){
        state.userProfileActiveButton = buttonClicked
    }
}

// async is allowed, do api calls here -> dispatch actions
const actions = {
    login({commit}, {username, password}){
        //if ... call user service to get data like jwt etc
        /*if(userService.login(username, password)){ // userservice gibt true oder false zurück, ODER objekt mit true/false und einer message je nach success oder möglichen errors
            commit('login', {username, password})
        }else{
            console.log('login failed')
            //hier error messages ausgeben bzw in view bringen
        }*/
        commit('login', {username, password})
        console.log('loginAction: ' + username + ', '+ password)
    },
    logout({commit}){
        commit('logout');
        //router.push('/')
    },
    register({commit}, {fname, lname, email, username, pw, street, streetNr, zip, city}){
        console.log('registerAction in userModule')

        //validationService.registrationValidation(fname, lname, email, username, pw, street, streetNr, city, zip)


        commit('register', {fname, lname, email, username, pw, street, streetNr, city, zip});
    },
    getAll({commit}){
        commit('getAll');
    },
    getById({commit}){
        commit('getById');
    },
    update({commit}){
        commit('update');
    },
    deleteUser({commit}){
        commit('deleteUser');
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
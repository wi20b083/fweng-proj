import axios from "axios";

const state = {
    items:[
        
        {
            id: 1,
            name: "Beer",
            imagesource: require("../../assets/beer.png"),
            alttext: "Image of beer",
        },
        {
            id: 2,
            name: "Wine",
            imagesource: require("../../assets/wine.png"),
            alttext: "image of wine",
        },   
        {
            id: 3,
            name: "Berliner Luft",
            imagesource: require("../../assets/dummyImg.png"),
            alttext: "image of wine",
        },            
    ],
    productToEdit: ''
}

const mutations = {
    delete(){
        
    },
    update(){

    },
    create(){

    },
    setProductToEdit(state, id){
        state.productToEdit = id
    }
}

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    }
};
const url = "http://localhost:8081/";

const actions ={
    async create({commit}, ){ // what data and how to spell ???
        try{
            const response = await axios.post(url + 'new',  config)
            console.log('create: '+response)
            commit('create');
        }catch(error){
            console.log(error)
        }
    },
    async update({commit}, {id}){ // how to spell dataNames ???
        try{
            const response = await axios.put(url +'products/' + id , config)
            console.log('update: ' + response)

            // what to update in state ????
            // response for != isAdmin => user, response for = isAdmin => userList
            commit('update')
        }catch(error){
            console.log(error)
        }
    },
    async delete({commit}, id){
        try{
            const response = await axios.delete(url + 'products/' + id, config)
            console.log('deleteProduct: ' + response)

            // what is response, list of products or just status code 200
            // what to change in state

            commit('delete')
        }catch(error){
            console.log(error)
        }
    },
    setProductToEdit({commit}, id){
        commit('setProductToEdit', id)
    }
}

const getters = {
    getItemById: (state) => (id) =>{
        return state.items.find(item => item.id === id)
    }
}



export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
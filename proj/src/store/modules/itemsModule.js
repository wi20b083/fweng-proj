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
    delete(state, id){
        for(var i = 0; i<state.items.length; i++){
            if(state.items[i].id === id){
                state.items.remove(i)
            }
        }
        /*
        state.items.forEach(item => {
            if(item.id === id){
                state.items.remove()
            }
        });*/
    },
    update(state, {productName, image, id}){
        /*
        state.items.forEach(item => {
            if(item.id === itemUpdated.id){
                item = itemUpdated
            }
        });*/
        console.log('update mutation: '+ productName)
        state.items.forEach(item => {
            if(item.id === id){
                item.name = productName
                item.imagesource = image
            }
        });
        
    },
    create(state, item){
        state.items.push(item)
    },
    setProductToEdit(state, id){
        state.productToEdit = id
    },
    getAll(state, productList){
        state.items = productList
    }
}

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    }
};
const url = "http://localhost:8081/";

const actions ={
    async getAll({commit}){
        try{
            const response = await axios.get(url + 'products/all', config)
            console.log('getAll: ' + response)

            const productList = response.data

            commit('getAll', productList)
        }catch(error){
            console.log(error)
        }
    },
    async create({commit}, ){ // what data and how to spell ???
        try{
            const response = await axios.post(url + 'new',  config)
            console.log('create: '+response)
            const item = response.data
            commit('create', item);
        }catch(error){
            console.log(error)
        }
    },
    update({commit}, {productName, image , id}){ // how to spell dataNames ???
        /*try{
            const response = await axios.put(url +'products/' + id , config)
            console.log('update: ' + response)
            const item = response.data
            // what to update in state ????
            // response response for = isAdmin => userList
            commit('update', item)
        }catch(error){
            console.log(error)
        }*/
        console.log('update action: '+productName)
        commit('update', {productName, image, id})
    },
    async delete({commit}, id){
        try{
            const response = await axios.delete(url + 'products/' + id, config)
            console.log('deleteProduct: ' + response)

            // status code 200
            if(response.status === 200){
                commit('delete', id)
            }else{
                // do something
            }

            
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
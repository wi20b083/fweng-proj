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
    productToEdit: '',
    requestError: '',
}

const mutations = {
    //ok
    delete(state, id){
        const productListNew = []
        state.items.forEach(item =>{
            if(item.id != id){
                productListNew.push(item)
            }
        })
        state.items = productListNew
    },
    //ok
    update(state, {productName, image, id}){
        //const itemUpdated = {id:id, name:productName, imagesource: image, alttext: 'alttext' }
        state.items.forEach(item => {
            if(item.id === id){
                item.name = productName
                item.imagesource = image
                item.alttext = 'alttext'
            }
        });
        
    },
    //ok
    create(state, {productName, image}){
        
        const item = {id:4, name:productName, imagesource: image, alttext: 'alttext' }
        state.items.push(item)
        
    },
    //ok
    setProductToEdit(state, id){
        state.productToEdit = id
    },
    //ok
    getAll(state, productList){
        state.items = productList
    }
}

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
            commit('setRequestError', error.message)
        }
    },
    async create({commit}, {productName, image}){ 
        /*
        try{
            const response = await axios.post(url + 'new', {productName, image}, config)
            console.log('create: '+response)
            const item = response.data
            commit('create', item);
        }catch(error){
            console.log(error)
            commit('setRequestError', error.message)
        }*/
        commit('create', {productName, image});

    },
    async update({commit}, {productName, image, id}){ 
        /*
        try{
            const response = await axios.put(url +'products/' + id , {productName, image},config)
            console.log('update: ' + response)
            const item = response.data
            
            commit('update', {item})
        }catch(error){
            console.log(error)
            commit('setRequestError', error.message)
        }*/
        
        commit('update', {productName, image, id})
        
    },
    async delete({commit}, id){
        /*
        try{
            const response = await axios.delete(url + 'products/' + id, config)
            console.log('deleteProduct: ' + response)

            commit('delete', id)
        }catch(error){
            console.log(error)
            commit('setRequestError', error.message)
        }*/
        commit('delete', id)

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
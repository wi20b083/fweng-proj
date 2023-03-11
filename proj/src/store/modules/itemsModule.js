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
    resObj : {
        error: false,
        msg: ''
    }
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
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.get(url + 'products/all', config)
            console.log('getAll: ' + response)

            const productList = response.data

            commit('getAll', productList)
            resObj.msg = 'Items retreived successfully'
            commit('setResponseObj', resObj)
            return resObj
        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },
    async create({commit}, {productName, image}){ 
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.post(url + 'new', {productName, image}, config)
            console.log('create: '+response)
            const item = response.data
            commit('create', item)
            resObj.msg = 'Item created successfully'
            commit('setResponseObj', resObj)
            return resObj

        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }
    },
    async update({commit}, {productName, image, id}){ 
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.put(url +'products/' + id , {productName, image},config)
            console.log('update: ' + response)
            const item = response.data
            
            commit('update', {item})
            resObj.msg = 'Item updated successfully'
            commit('setResponseObj', resObj)
            return resObj

        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
        }        
    },
    async delete({commit}, id){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.delete(url + 'products/' + id, config)
            console.log('deleteProduct: ' + response)

            commit('delete', id)
            resObj.msg = 'Item deleted successfully'
            commit('setResponseObj', resObj)
            return resObj

        }catch(error){
            resObj.error = true
            resObj.msg = error.message
            commit('setResponseObj', resObj)
            return resObj
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
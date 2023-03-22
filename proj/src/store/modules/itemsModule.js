import axios from "axios";

const state = {
    items:[],
    productToEdit: '',
    resObj : {
        error: false,
        msg: ''
    }
}

const mutations = {
    delete(state, id){
        const productListNew = []
        state.items.forEach(item =>{
            if(item.pid != id){
                productListNew.push(item)
            }
        })
        state.items = productListNew
    },
    update(state, itemUpdated){
        state.items.forEach((item, index) => {
            if(item.pid === itemUpdated.pid){
                state.items[index] = itemUpdated
            }
       })
    },
    create(state, item){
        state.items.push(item)  
    },
    setProductToEdit(state, id){
        state.productToEdit = id
    },
    getAll(state, productList){
        state.items = productList
    },
    setResponseObj(state, resObj){
        state.resObj.error = resObj.error
        state.resObj.msg = resObj.msg
    },
}

const config = {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "ngrok-skip-browser-warning": true,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'

    }
};

const url = "https://8144-178-115-45-233.eu.ngrok.io/";

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
    async create({commit}, item){ 
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.post(url + 'products/create', item, config)
            console.log('create: '+response)
            commit('create', response.data)
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
    async update({commit}, item){ 
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.put(url +'products/' + item.pid, item, config)
            console.log('update: ' + response)
            commit('update', response.data)
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
    async delete({commit}, pid){
        let resObj = {
            error: false,
            msg: ''
        }
        try{
            const response = await axios.delete(url + 'products/' + pid, config)
            console.log('deleteProduct: ' + response)

            commit('delete', pid)
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
        return state.items.find(item => item.pid === id)
    },
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
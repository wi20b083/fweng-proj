import axios from "axios"

//jwt muss bei jeder request mitgesendet werden 

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    deleteUser
}

function login(){
    //überprüfen ob token vorhanden ? und ob username und password stimmen
    axios.post('http://localhost:8080/login')
        .then(response =>{
            if(response.data){
                //return true when user allowed to login
                return true
            }
        })
}

//backend muss von logout nichts wissen ?
function logout(){

}

function register(){
    axios.post('http://localhost:8080/users')
}

function getAll(){
    axios.get('http://localhost:8080/users')
}

function getById(userId){
    axios.get('http://localhost:8080/users/id/?userId=' + userId)
}

function update(userId){
    axios.put('http://localhost:8080/users/id/?userId=' + userId)
}

function deleteUser(userId){
    axios.delete('http://localhost:8080/users/id/?userId=' + userId)
}
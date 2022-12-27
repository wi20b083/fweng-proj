/*import * as yup from 'yup'

export const validationService ={
    registrationValidation,
    loginValidation
}

function registrationValidation(fname, lname, email, username, pw, street, streetNr, city, zip){

    console.log('validationService registration' + fname + lname + email + username + pw + street + streetNr + city + zip)

    const registrationSchema = yup.object().shape({
        fname: string().required(),
        lname: string().required(),
        email: string().email().required(),
        username: string().required(),
        pw: string().min(8).required(),
        pwConfirm: string().min(8).required(),
        street: string().number().required(),
        streetNr: string().number().required(),
        zip: string().required(),
        city:string().required(),
    })

    //return obj
    // if everything valid return true
    //else return errors and false
}

function loginValidation(){

    console.log('validationService login')

    const loginSchema = yup.object().shape({
        username: string().required(),
        pw: string().required(),
    })

    //return obj
    // if everything valid return true
    //else return errors and false
}

function validate(){
    
}*/
import React, {useState} from 'react';
import LoginMarkup from "./LoginMarkup";

const LoginLogic= ()=>{
const [emailVal, updateEmail]=useState('')
const [passVal, updatePass]=useState('')
const submitLogin=()=>{
    console.log('submitted', emailVal, passVal)
}

    return (

    <LoginMarkup 
    email={emailVal}
    updateEmail={updateEmail}
    updatePass={updatePass}
    submitLogin={submitLogin}
    />
    )
}

export default LoginLogic
import React, {useState} from 'react';
import LoginMarkup from "./LoginMarkup";

const LoginLogic= ()=>{
const [emailVal, updateEmail]=useState('')
const [passVal, updatePass]=useState('')


    return (

    <LoginMarkup 
    updateEmail={updateEmail}
    updatePass={updatePass}
    />
    )
}

export default LoginLogic
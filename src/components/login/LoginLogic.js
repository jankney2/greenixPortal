import React, {useState} from 'react';
import LoginMarkup from "./LoginMarkup";

import {withRouter} from 'react-router-dom'
 
const LoginLogic= (props)=>{
const [emailVal, updateEmail]=useState('')
const [passVal, updatePass]=useState('')
const submitLogin=()=>{
    props.history.push('/home')
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

export default withRouter(LoginLogic)
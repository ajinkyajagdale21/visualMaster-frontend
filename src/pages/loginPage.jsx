import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export const LoginPage = () => {
    
const { loginWithRedirect } = useAuth0();
   
const loginHandler=()=>{
 loginWithRedirect()  
}  
    
  return (
    <>
    <h1>loginPage</h1>
    <button onClick={loginHandler}>Login</button>
    </>
  )
}

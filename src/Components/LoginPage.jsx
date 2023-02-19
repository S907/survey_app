import React, { useState } from 'react'

function LoginPage({onLogin}) {
    const[username, setUserName]=useState('');
    const[password, setUserPassword]=useState('');
    const[errorCount, setErrorCount]=useState(0);

    const handleLogin = (e)=>{
        e.preventDefault()
        if(username === 'admin' && password === '12345'){
        onLogin();
    }else{
        setErrorCount(errorCount+1);
        if(errorCount >= 2){
            window.close()
        }
    }}
  return (
    <>
    <main>
        <h1>Login page</h1>
        <form onSubmit={handleLogin}>
            <input type="text" name='username' 
            value={username} 
            onChange={(e)=>setUserName(e.target.value)
            } 
            placeholder='username'/>
            <input type="text" 
            name='password' 
            value={password} 
            onChange={
                (e)=> setUserPassword(e.target.value)    
                } 
                placeholder='password'/>
            <button type='submit'>Submit</button>
        </form>
    </main>
    </>
  )
}

export default LoginPage
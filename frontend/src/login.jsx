import React,{ useState,useEffect } from 'react';
function Login(){

    return(
        <>
        <form id='login-form'>
          <lable>this is login form</lable><br></br>
          <label>Phone No:</label>
          <input type="tel"></input><br></br>
          <lable>Password:</lable>
          <input type="password"></input><br></br>
          <button>Submit</button>

        </form>        
        
        </>
    )
}
export default Login;
import React,{ useState,useEffect } from 'react';
function Register(){

    return(
        <>
        <form id='register-form'>
          <lable>this is register form</lable><br></br>
          <lable>Name:</lable>
          <input type='text'></input><br></br>
          <label>Phone No:</label>
          <input type="tel"></input><br></br>
          <lable>Password:</lable>
          <input type="password"></input><br></br>
          <button>Submit</button>

        </form>        
        
        </>
    )
}
export default Register;
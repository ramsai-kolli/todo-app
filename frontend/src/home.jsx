import React,{ useState,useEffect } from 'react';
function Home(){
    function GoRegister()
    {
        window.location.href=`/home1`;
    }
    function GoLogin()
    {
        window.location.href=`/home2`;
    }
    return(
        <>
        <form id='home-form'>
          <lable>this is Home form</lable><br></br>
           <button type="button" onClick={GoRegister}>Register</button><br></br>
           <button type="button" onClick={GoLogin}>Login</button>

        </form>        
        
        </>
    )
}
export default Home;
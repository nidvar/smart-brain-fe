import React from 'react';

const Signin = (props)=>{
    console.log(props)
    return(
        <div className="Signin">
            <div>
                Email: <input onChange={props.grab_value} /> <br />
                <br />
                Password: <input onChange={props.grab_value} /> <br />
                <br />
                <button onClick={()=>{props.onRoutechange('home')}} >Sign In</button><br /><br />
                <button onClick={()=>{props.onRoutechange('register')}} >Register</button>
            </div>
        </div>
    )
}

export default Signin
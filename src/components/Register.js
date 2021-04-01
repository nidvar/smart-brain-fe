import React from 'react';

const Register = (props)=>{
    console.log(props)
    return(
        <div className="Signin">
            <div>
                Name: <input onChange={props.grab_value} /> <br />
                <br />
                Email: <input onChange={props.grab_value} /> <br />
                <br />
                Password: <input onChange={props.grab_value} /> <br />
                <br />
                <button onClick={()=>{props.onRoutechange('home')}} >Register</button>
            </div>
        </div>
    )
}

export default Register
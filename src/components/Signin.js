import React from 'react';

const Signin = (props)=>{
    console.log(props)
    return(
        <div className="Signin">
            <form>
                Email: <input onChange={props.grab_value} /> <br />
                <br />
                Password: <input onChange={props.grab_value} /> <br />
                <br />
                <button onClick={()=>{props.onRoutechange('home')}} >Sign In</button>
            </form>
        </div>
    )
}

export default Signin
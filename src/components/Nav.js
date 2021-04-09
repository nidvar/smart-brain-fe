import React from 'react';

const Nav = (props)=>{
    if(props.route_status == 'signin'){
        return(
            <div className="Nav">
                {/* <p onClick={()=>{props.onRoutechange('signin')}} >Sign In</p>
                <p onClick={()=>{props.onRoutechange('signin')}} >Register</p> */}
            </div>
        )
    }else if(props.route_status == 'home'){
        return(
            <div className="Nav">
                <p onClick={()=>{props.onRoutechange('signin')}} >Sign Out</p>
            </div>
        )
    }else if(props.route_status =='register'){
        return(
            <div className="Nav">
                <p onClick={()=>{props.onRoutechange('signin')}} >Back</p>
            </div>
        )
    }
}

export default Nav
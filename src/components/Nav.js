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
                <h2 onClick={()=>{
                    props.onRoutechange('signin')
                    props.grab_signin_result(null)
                    props.clear_data()
                }} >Sign Out</h2>
            </div>
        )
    }else if(props.route_status =='register'){
        return(
            <div className="Nav">
                <h2 onClick={()=>{props.onRoutechange('signin')}} >Back</h2>
            </div>
        )
    }
}

export default Nav
import React from 'react';

const Nav = (props)=>{
    return(
        <div className="Nav">
            <p onClick={()=>{props.onRoutechange('signin')}} >Sign Out</p>
        </div>
    )
}

export default Nav
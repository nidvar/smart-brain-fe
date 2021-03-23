import React from 'react';
import Tilt from 'react-tilt';

const Logo = ()=>{
    return(
        <div>
            <Tilt className="Tilt" options={{ max : 25 }} >
                <div className="Tilt-inner"> Logo </div>
            </Tilt>
        </div>
    )
}

export default Logo
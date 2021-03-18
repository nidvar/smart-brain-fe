import React from 'react';
import Tilt from 'react-tilt';

const Logo = ()=>{
    return(
        <div>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 80, width: 80 }} >
                <div className="Tilt-inner"> 👽 </div>
            </Tilt>
        </div>
    )
}

export default Logo
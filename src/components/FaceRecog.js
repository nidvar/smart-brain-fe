import React from 'react';

const FaceRecog = (props)=>{
    console.log(props)
    return(
        <div className="FaceRecog">
            <img src={props.url} />
        </div>
    )
}

export default FaceRecog
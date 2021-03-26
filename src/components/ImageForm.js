import React from 'react';

const ImageForm = (props)=>{
    console.log(props)
    return(
        <div className="ImageForm">
            <form onSubmit={props.submit_form}>
                <input onChange={props.grab_value} /> <button>DETECT</button>
            </form>
        </div>
    )
}

export default ImageForm
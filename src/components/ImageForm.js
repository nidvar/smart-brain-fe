import React from 'react';

const ImageForm = (props)=>{
    return(
        <div className="ImageForm">
            <p>Insert Link of Picture for facial recognition.</p>
            <form onSubmit={props.submit_form}>
                <input onChange={props.grab_value} /> <button>DETECT</button>
            </form>
        </div>
    )
}

export default ImageForm
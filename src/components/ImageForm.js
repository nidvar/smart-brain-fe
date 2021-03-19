import React from 'react';

const ImageForm = (props)=>{
    console.log(props)
    return(
        <div className="ImageForm">
            <form onSubmit={props.submit_form}>
                <p>Insert Link of Picture for facial recognition.</p>
                <input onChange={props.grab_value} /> <button>DETECT</button>
            </form>
        </div>
    )
}

export default ImageForm
import React from 'react';

const FaceRecog = (props)=>{
    console.log(props)
    console.log(props.data)
    let x = props.data.regions
    console.log(x)

    let width = props.width;
    let height = 0;

    if(x!=undefined){
        x.forEach(a=>{
            console.log(a.region_info.bounding_box)
        })
    }
    if(document.getElementById('the_picture')!=null){
        width = document.getElementById('the_picture').width
        height = document.getElementById('the_picture').height
    }else{
        width = 0;
        height = 0;
    }
    
    return(
        <div className="anotherone">
            <div className="FaceRecog">
                <img id="the_picture" src={props.url} />
                {x!=undefined?x.map(a=><div 
                    key={Math.random()}
                    className="test" 
                    style={{
                        height: (a.region_info.bounding_box.bottom_row * height) - (a.region_info.bounding_box.top_row * height),

                        width: (a.region_info.bounding_box.right_col * width) - (a.region_info.bounding_box.left_col * width),

                        top: a.region_info.bounding_box.top_row * height,
                        left: a.region_info.bounding_box.left_col * width
                    }}></div>):null}
            </div>
        </div>
    )
}

export default FaceRecog
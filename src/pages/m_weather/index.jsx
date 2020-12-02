import React, { useEffect } from 'react';
import M_BACK_ARROW  from '../../assets/back_arrow.png';
function Weather () {

         
    const mapStyle = {
            boxSizing: 'border-box',
            width:  window.innerWidth,
            height: window.innerHeight
    }

    useEffect( () => {
       
    })
    return (
        <div>
             <div style={{height:"60px",width:"100%",background:"#ffffff",position:"fixed"}}>
                <img onClick={()=>window.history.back()} src={ M_BACK_ARROW } style={ {height:"20px",position:"absolute",top:"50%",marginTop:"-5px",marginLeft:"20px"} }/>
            </div>
             <div style={{position: "absolute",marginTop:"20px"}} style={ mapStyle }>
                <iframe style={{border:"none"}}  width={ window.innerWidth } height={window.innerHeight}  src="https://tianqi.moji.com/weather/china/hainan/wenchang" />
            </div>
       </div>
           
       
    )
};

export default Weather;
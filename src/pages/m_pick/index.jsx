import React from 'react';
import M_BACK_ARROW from '../../assets/back_arrow.png';
function Pick () {
        const mapStyle = {
            boxSizing: 'border-box',
            width:  window.innerWidth,
            height: window.innerHeight
    }
    return (
        <div>
            <div style={{height:"60px",width:"100%",background:"#fff",position:"fixed"}}>
                <img onClick={()=>window.history.back()} src={ M_BACK_ARROW } style={ {height:"20px",position:"absolute",top:"50%",marginTop:"-5px",marginLeft:"20px"} }/>
           </div>
            <div style={{position: "absolute",marginTop:"20px"}} style={ mapStyle }>
                <iframe  style={{border:"none"}} width={ window.innerWidth } height={ window.innerHeight-20 } src="https://meeting.tencent.com/s/zuTyJOjGvzmr" />
            </div> 

        </div>
    )
};

export default Pick
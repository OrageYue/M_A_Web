import React from 'react';
import M_BACK_ARROW from '../../assets/back_arrow.png';
function Pick () {
    return (
        <div>
            <div style={{height:"60px",width:"100%",background:"#fff",position:"relative"}}>
                <img onClick={()=>window.history.back()} src={ M_BACK_ARROW } style={ {height:"25px",position:"absolute",top:"50%",marginTop:"-10px",marginLeft:"20px"} }/>
           </div>
            <div style={{marginTop:"20px"}}>
                <iframe  style={{border:"none"}} width={ window.innerWidth } height={ window.innerHeight } src="https://meeting.tencent.com/s/zuTyJOjGvzmr" />
            </div>
        </div>
    )
};

export default Pick
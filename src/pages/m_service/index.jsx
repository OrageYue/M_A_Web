import React from 'react';
import ReactEcharts from 'echarts-for-react';
import M_BACK_ARROW from '../../assets/back_arrow.png'
function HotelService () {

     const mapStyle = {
       
        width:  window.innerWidth,
         height: window.innerHeight-40,
         textAlign: "center",
        paddingTop: "10px"
    }

    return (
        <div >
              <div style={{paddingTop:"10px",width:"100%",background:"#ffffff",overflow:"hidden"}}>
                <img onClick={ () => window.history.back() } src={ M_BACK_ARROW } style={ { height: "20px", position: "absolute", top: "20px", marginTop: "-5px", marginLeft: "20px",float:"left" } } />
                <p style={ { fontSize: "18px",textAlign:"center",marginTop:"5px",color:"#2c2c2c" } }>联系我们</p> 
                
           </div>
          
            <div style={ {  background:"#ffffff",  } } className='container' id='container' style={ mapStyle }>
                {/* <p style={ { fontSize: "24px", color: "#23B5FE" } }>联系我们</p> 
                 */}
            {/* <hr style={ {margin:"0 20px"} } color="#f5f5f5"/> */}
            <p style={{fontSize:"22px"}}>岳鑫 <small  style={{fontSize:"18px"}}>156 0768 8773</small> <a style={{color:"#23B5FE",fontSize:"16px",marginLeft:"20px",textDecoration:"none"}} href="tel:15607688773">立即拨打</a> </p> 
            <p style={{fontSize:"22px"}}>范佳琪  <small  style={{fontSize:"18px"}}>135 0357 5852</small><a style={{color:"#23B5FE",fontSize:"16px",marginLeft:"20px",textDecoration:"none"}} href="tel:13503575852">立即拨打</a> </p> 
           
             <div style={{bottom:20,position:"absolute",left:"50%",transform:"translate(-50%,-50%)"}}>
                v1.0 会议助手
            </div>
            </div>

        </div>
    )
};

export default HotelService;
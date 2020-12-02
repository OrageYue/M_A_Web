import React, { useEffect } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import { Map, Marker } from 'react-amap';
import M_BACK_ARROW  from '../../assets/back_arrow.png';
import { withRouter } from 'react-router-dom';
import Geolocation from 'react-amap-plugin-geolocation';

function Navigation (props) {

   
     
    const mapStyle = {
            boxSizing: 'border-box',
            width:  window.innerWidth,
            height: window.innerHeight
    }

    const pluginProps = {
  enableHighAccuracy:true,
  timeout: 10000,
  showButton: true
}
    
    const amapEvents = () => {
        
    }
    const markerEvents = () => {
        
    }
    return (
        <div>
             <div style={{height:"60px",width:"100%",background:"#fff",position:"fixed"}}>
                <img onClick={()=>window.history.back()} src={ M_BACK_ARROW } style={ {height:"20px",position:"absolute",top:"50%",marginTop:"-5px",marginLeft:"20px"} }/>
           </div>
          
            <div style={ { position: "absolute",marginTop:"20px" } } className='container' id='container' style={ mapStyle }>
                <iframe style={{border:"none"}} width={window.innerWidth} height={window.innerHeight-20} src="https://map.qq.com/m/place/info/uid=1579084311980198362&word=%E9%87%91%E7%9F%B3%E9%87%91%E9%99%B5%E9%85%92%E5%BA%97&type=point"/>
                    {/* <Map center={[110.824547,19.539595]} events={amapEvents} amapkey='36812dd90b2cf9129c20bb85b10e30f7' version='1.4.15'>
                    <Marker position={ [ 110.824547, 19.539595 ] } events={ markerEvents } />
                      <Geolocation {...pluginProps} />
                    </Map> */}
            </div>
         
        </div>
    )
};

export default Navigation;
import React, { useEffect } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import { Map, Marker } from 'react-amap';
import M_BACK from '../../assets/back.png';
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
             <img onClick={()=>window.history.back()}  style={{position:"absolute",zIndex:"100",width:"60px",bottom:"40px",right:"20px"}} src={ M_BACK }/>
           <div style={{position:"absolute"}} className='container' id='container' style={mapStyle}>
                    <Map center={[110.824547,19.539595]} events={amapEvents} amapkey='36812dd90b2cf9129c20bb85b10e30f7' version='1.4.15'>
                    <Marker position={ [ 110.824547, 19.539595 ] } events={ markerEvents } />
                      <Geolocation {...pluginProps} />
                    </Map>
            </div>
         
        </div>
    )
};

export default Navigation;
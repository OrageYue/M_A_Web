import React from 'react';
import './index.less';
import ITEM_INVITATION from '../../assets/item_invitation.png';
import ITEM_SERVICE from '../../assets/item_service.png';
import ITEM_WEATHER from '../../assets/item_weather.png';
import ITEM_LIVE from '../../assets/item_live.png'

import { Link,withRouter } from 'react-router-dom';

function TopicCard(props) {
    return (
        <div style={ { padding: "0 10px", } } className={props.isVisibleTool?"Topic_card_title_in":"Topic_card_title_out"}>
            {
                props.isVisibleTool ?
                    <div style={{textAlign:"center",display:"flex",flexDirection:"column", alignItems:"center"}}>
                         <p style={{fontSize:"20px",color:"#23B5FE"}}>
                            “国际和区域海洋安全秩序构建与治理”学术研讨会
                        </p>
                           {/* 工具区域 */ }
                        <div style={{width:"100%"}} className="Topic_tool">
                            <div onClick={()=>props.history.push('/invitation')} className="Topic_tool_item">
                                <img src={ ITEM_INVITATION } style={ {width:"32px"} }/>
                                <p>邀请函</p>
                            </div>
                            <div onClick={()=>props.history.push('/weather')} className="Topic_tool_item">
                                <img src={ ITEM_WEATHER } style={ {width:"44px"} }/>
                                <p >天气查询</p> 
                            </div>
                            <div onClick={()=>props.history.push('/navigation')} className="Topic_tool_item">
                                <img src={ ITEM_SERVICE } style={ {width:"34px"} }/>
                                <p>地图导航</p>
                            </div>
                             <div onClick={()=>props.history.push('/pick')} className="Topic_tool_item">
                                <img src={ ITEM_LIVE } style={ {width:"34px"} }/>
                                <p>会议直播</p>
                            </div>
                        </div>
                    </div>
                :
                    <div style={{padding:"0 15px"}}>
                        <div>
                            <p style={{fontSize:"30px",color:"#23B5FE",fontWeight:"bold",marginTop:"15px"}}>第八届   <span style={{fontSize:"24px",marginLeft:"20px", color:"#23B5FE",}}>
                                南海区域合作论坛
                            </span> </p>
                            <p style={{fontSize:"18px",color:"#23B5FE",margin:0}}>
                                “国际和区域海洋安全秩序构建与治理”
                            </p>
                            <p style={{fontSize:"18px",color:"#23B5FE",textAlign:"center"}}> 学术研讨会</p>
                        </div>
                     
                 </div>   
            }

        </div>
    )
};

export default withRouter(TopicCard)
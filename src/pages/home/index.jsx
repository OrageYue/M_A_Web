import React, { useEffect, useState } from 'react'
import { Route, Link, Switch, BrowserRouter, withRouter } from 'react-router-dom';
import './index.less';
import BLUE_BG from '../../assets/bg_main_blue.png';
import BJ_LOGO from '../../assets/bj_logo.png';
import CIRCLE_OUTSIDE from '../../assets/circle_outside.png';
import IN_OUTSIDE from '../../assets/circle_inside.png';
import ROW_LOWER from '../../assets/row_lower.png';

import TopicCard from '../../component/TopicCard/index.jsx'
import Schedule from '../m_schedule/index.jsx';

import { Parallax ,Element} from 'rc-scroll-anim';
import { debounce } from '../../utils/common.js';

function Home ( props ) {

    const [ isVisibleTips, setIsVisibleTips ] = useState( true );//会议日程滚动提示（滑动消失）
    const [ isVisibleTool, setIsVisibleTool ] = useState( false );//滑动到一定位置展示操作工具

    useEffect( () => {
        document.addEventListener( "scroll", debounce( handle_card_position_change, 0 ) );
        return document.removeEventListener( 'scroll', handle_card_position_change );
    }, [] );

    
    const handle_card_position_change = ( event ) => {

        let M_card = document.getElementById( 'M_card' );
        let M_content = document.getElementById( "M_content" );
       
        const scrollTop = ( event.srcElement ? event.srcElement.documentElement.scrollTop : false ) || window.pageYOffset || ( event.srcElement ? event.srcElement.body.scrollTop : 0 );
        // 当页面没有开始滚动，展示请滚动显示日程的tips
        if ( scrollTop <= 60 )
        {
            setIsVisibleTips(true)
        } else
        {
            setIsVisibleTips(false)
        }
        if ( scrollTop >= 322 )
        {
            M_card.style.position = "fixed";
            M_card.style.top = "80px";
            M_card.style.width="100%"
            M_card.style.margin="0"
            //展示操作工具
            setIsVisibleTool(true)
        }
        
        else if ( scrollTop > 60 && scrollTop <= 300 )
        {
            M_card.style = "position:absolute";
            setIsVisibleTool(false)
        };
    }

    return (
        <div id="M_container" className="container">
            <div style={{overflow:"hidden",zIndex:"100"}}>
                <img className="main_top_img" src={ BLUE_BG } />

                <img id="M_circle_out_img" className={isVisibleTool?'main_circle_out_img':'main_circle_out_img_v'} src={ CIRCLE_OUTSIDE } />
                <img id="M_circle_in_img" className={isVisibleTool?'main_circle_in_img':'main_circle_in_img_v'}  src={IN_OUTSIDE} />
                {/* <img className="main_logo_img"  src={BJ_LOGO} /> */}
                <div id="M_card" className="main_white_card">
                    <TopicCard
                        isVisibleTool={isVisibleTool}
                    />
                </div>
            </div>
            <div id="M_content" style={ { top: "200",  minHeight: document.body.clientHeight } }>

                { isVisibleTips ?
                    <div className="M_tips">
                        <div className="M_tips_title">
                            <p >会议 日程</p>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <img src={ ROW_LOWER } className="M_row_lower_img"/>
                        </div>
                    </div>                    
                    :
                    <div>
                        <Schedule />
                    </div>
                }
            </div>
        </div>
    )
}

export default withRouter(Home) 





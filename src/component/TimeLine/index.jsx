import React from 'react';
import './index.less';
import Y_POINT from '../../assets/y_point.png';
import B_LINE from '../../assets/b_line.png';
import B_POINT from '../../assets/b_point.png';

function TimerLiner () {
    return (
        <div>
            <p className="time_date">12月3日  星期四</p>
            <div >
                <div>
                    <img src={ Y_POINT } className="time_point" />
                    <small className="time_small">12：00-20：00</small>
                                    <div className="time_content">
                    <div style={{padding:"20px"}}>
                        报到注册 金石国际大酒店大堂
                   </div>
                </div>
                </div>
               <img src={ B_LINE } className="time_line" />
            </div>    
            <p  style={{marginTop:"10px"}} className="time_date">12月4日  星期五</p>
            <div >
                <div>
                    <img src={ Y_POINT } className="time_point" />
                    <small className="time_small">8：30-8：50</small>
                                    <div className="time_content">
                    <div style={{padding:"20px"}}>
                            开幕式
                                 主持人：高之国  海南大学法学院特聘院长、
国际海洋法法庭原法官
                   </div>
                </div>
                </div>
               <img src={ B_LINE } className="time_line" />
            </div>

            <div >
                <div>
                    <img src={ Y_POINT } className="time_point" />
                    <small className="time_small">8：50-9：00</small>
                                    <div className="time_content">
                    <div style={{padding:"20px"}}>
                        会议代表合影
                   </div>
                </div>
                </div>
                 <img src={ B_LINE } className="time_line" />
            </div>

            <div >
                <div>
                    <img src={ Y_POINT } className="time_point" />
                    <small className="time_small">9：00-10：20</small>
                                    <div className="time_content">
                    <div style={{padding:"20px"}}>
                        第一单元
                   </div>
                </div>
                </div>
                 <img src={ B_LINE } className="time_line" />
            </div>

            <div >
                <div>
                    <img src={ Y_POINT } className="time_point" />
                    <small className="time_small">10：20-10：40</small>
                                    <div className="time_content">
                    <div style={{padding:"20px"}}>
                        会间休息
                   </div>
                </div>
                </div>
                 <img src={ B_LINE } className="time_line" />
            </div>

            <div >
                <div>
                    <img src={ Y_POINT } className="time_point" />
                    <small className="time_small">10：40-11：50</small>
                                    <div className="time_content">
                    <div style={{padding:"20px"}}>
                        第二单元
                   </div>
                </div>
                </div>
                 <img src={ B_LINE } className="time_line" />
            </div>

            
            <p  style={{marginTop:"80px"}} className="time_date">2020-12-22  星期一</p>
            <div >
                <div>
                    <img src={ Y_POINT } className="time_point" />
                    <small className="time_small">6:00</small>
                                    <div className="time_content">
                    <div style={{padding:"20px"}}>
                        12
                   </div>
                </div>
                </div>
               <img src={ B_LINE } className="time_line" />
            </div>

            <div >
                <div>
                    <img src={ Y_POINT } className="time_point" />
                    <small className="time_small">6:00</small>
                                    <div className="time_content">
                    <div style={{padding:"20px"}}>
                        12
                   </div>
                </div>
                </div>
               <img src={ B_LINE } className="time_line" />
            </div>

            <div >
                <div>
                    <img src={ B_POINT } className="time_point" />
                    <small className="time_small">6:00</small>
                                    <div className="time_content">
                    <div style={{padding:"20px"}}>
                        12
                   </div>
                </div>
                </div>
               
            </div>


            
          

            
        </div>
    )
};

export default TimerLiner
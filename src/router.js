import React, { lazy, Suspense } from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';

const MSchedule = React.lazy( () => import( './pages/m_schedule/index.jsx' ) );//会议日程
const MInvitation = React.lazy( () => import( './pages/m_invitation/index.jsx' ) );//邀请函
const MRegister = React.lazy( () => import( './pages/m_register/index.jsx' ) );//信息登记
const MNavigation = React.lazy( () => import( './pages/m_navigation/index.jsx' ) );//地址导航
const MService = React.lazy( () => import( './pages/m_service/index.jsx' ) );//酒店服务
const MWeather = React.lazy( () => import( './pages/m_weather/index.jsx' ) );//天气预报
const MTips = React.lazy( () => import( './pages/m_tips/index.jsx' ) );//温馨提示
const MPick = React.lazy( () => import( './pages/m_pick/index.jsx' ) );//接送方案
const Home = React.lazy( () => import( './pages/home/index.jsx' ) );//首页

function AppRouter (props) {
    return (
        <BrowserRouter>
            <div>
                <Suspense fallback={ <div>加载中</div> }>
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/schedule" component={ MSchedule } />
                        <Route exact path="/invitation" component={ MInvitation } />
                        <Route exact path="/register" component={ MRegister } />
                        <Route exact path="/navigation" component={ MNavigation } />
                        <Route exact path="/service" component={ MService } />
                        <Route exact path="/weather" component={ MWeather } />
                        <Route exact path="/tips" component={ MTips } />
                        <Route exact path="/pick" component={ MPick } />
                    </Switch>
            </Suspense>
            </div>
          
        </BrowserRouter>
    )
};

export default  AppRouter;
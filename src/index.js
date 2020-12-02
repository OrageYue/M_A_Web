import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';
import AppRouter from './router.js';
import Layout from './Layout/index.jsx';

class App extends React.Component{
    render () {
        return (
            <div style={{width:"100%"}}>
                
                <AppRouter />
                {/* <Layout/> */}
            </div>
        )
    }
}

export const H_App = hot(App)

ReactDom.render( <H_App />, document.getElementById( 'app' ) );



import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/login/login';
import Admin from './pages/admin/admin';

export default class AppRouter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/admin/" component={Admin} />
                    <Route path="/" component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}
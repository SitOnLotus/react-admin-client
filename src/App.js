import React from 'react';
import {Button,message} from 'antd';
// import {HashRouter,Route,Switch} from 'react-router-dom'

export default class AppRouter extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick=()=>{
        message.success('这是一个成功的按钮');
    }
    render(){
        return(
            <div>
                <Button type="primary" onClick={this.handleClick.bind(this)}>按钮</Button>
            </div>
            // <HashRouter>
            //     <Route path="/" component={} />
            // </HashRouter>
        )
    }
}
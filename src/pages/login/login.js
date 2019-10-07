import React from 'react';
import './login.less';
import { Form, Icon, Input, Button } from 'antd';

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    handleSubmit= (event) =>{
        event.preventDefault();
        const form = this.props.form;
        const values = form.getFieldsValue();
        console.log(values)
    }
    render(){
        // const form = this.props.form;//得到具有强大功能的form对象
        const { getFieldDecorator} = this.props.form;
        return(
            <div className="login">
                <header className="login-header">
                    <img src={require("./img/logo.png")} alt=""/>
                    <h2>React后台管理系统</h2>
                </header>
                <section className="login-content">
                    <h2>登录页面</h2>
                    <Form layout="inline" onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                        {getFieldDecorator('username', {})(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {})(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
const WrapLogin = Form.create()(Login)
export default WrapLogin
/**
 * 包装Form组价生成一个新的组件：Fotm(Login)
 * 新组建会向Form组件传递一个强大的对象属性form
 */
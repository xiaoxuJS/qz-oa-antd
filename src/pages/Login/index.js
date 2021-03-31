import React from 'react';
import {useHistory } from 'react-router-dom'
//antd
import { Button } from 'antd';


const Login = () => {
  const history = new useHistory();
  return (
    <div>
      <Button onClick = {() => history.push('/')}>登录</Button>
    </div>
  )
}
export default Login;
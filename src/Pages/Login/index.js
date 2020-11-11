import React, { Component } from 'react';

// Third party
import { Typography, Row, Col } from 'antd';
import RoutePath from '../../Routers/RoutePath';
import AuthService from '../../Service/AuthService';

// Custom Component
import TextInput from '../../Component/TextInput'

// Utility
import String from '../../Utility/String';

import style from './style.scss'

class Login extends Component {

  // Server Request
  userLoginRequest = async () => {
    const { txtUserName, txtPassword } = this.state;
    try {
      await AuthService.login(txtUserName, txtPassword);
      this.props.history.push(RoutePath.Home)
    } catch (err) {
      // Todo : Display Error message to User
      console.log("err", err);
    } finally {
      this.setState({ txtUserName: "", txtPassword: '' })
    }
  }

  // Utility

  // User Interaction method
  btnLoginClick = async () => {
    await this.userLoginRequest()
  }

  // UI Method

  // Life Cycle Method
  constructor(props) {
    super(props)
    this.state = {
      txtUserName: '',
      txtPassword: ''
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Typography className="headerTitle">{String.login}</Typography>

        {/* Define grid for show input */}
        <Row>
          <Col xl={4} lg={12} md={12} sm={8} xs={8}>
            <TextInput />
          </Col>
        </Row>
      </div>
    )
  }

}

export default Login;

import React, { Component } from 'react';

// Third party
import { Typography } from 'antd';
import RoutePath from '../../Routers/RoutePath';

// Custom Component
import BaseButton from '../../Component/BaseButton';

// Utility
import String from '../../Utility/String';

import style from './style.scss'

class Home extends Component {

  // Server Request

  // Utility Method

  // User Interaction Method
  btnHomeClick = () => {
    this.props.history.push(RoutePath.Login)
  }

  // UI Method

  // Life Cycle Method
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Typography>{String.home}</Typography>
        <BaseButton
          className={"buttonStyle"}
          onClick={this.btnHomeClick}
          title={String.loginbtn} />
      </div>
    )
  }

}

export default Home;

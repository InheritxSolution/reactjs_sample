import React, { Component } from 'react';

// Third Party
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';

// Utility
import Router from './Routers';
import { showErrorToast } from './Utility/Helper';
import String from './Utility/String'

export class App extends Component {

  // Utility Method

  // User Interaction Method
  handleConnectionChange = () => {
    const condition = navigator.onLine ? 'online' : 'offline';

    if (condition === 'online') {
      this.setState({ isDisconnected: false });
    } else {
      showErrorToast(String.internetConnectionLost);
      this.setState({ isDisconnected: true });
    }
  };

  // Life Cycle Method
  constructor(props) {
    super(props)
    this.state = {
      isDisconnected: false
    }
  }

  // Internet connection code



  UNSAFE_componentWillMount() {
    window.removeEventListener('online', this.handleConnectionChange);
    window.removeEventListener('offline', this.handleConnectionChange);
  }

  componentDidMount() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
      console.log = function () { };
    }
    this.handleConnectionChange();
    window.addEventListener('online', this.handleConnectionChange);
    window.addEventListener('offline', this)
  }

  render() {
    return (
      <div>
        {/* helmet use for define webName */}
        <Helmet>
          <title>{String.appName}</title>
        </Helmet>
        <ToastContainer />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;



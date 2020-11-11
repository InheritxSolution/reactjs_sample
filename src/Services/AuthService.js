
// Third party
import axios from 'axios'

// Utility

import { APIURL } from '../Utility/Constant';
import { APIENDPOINT } from './ApiEndpoint';


const AUTH_LOCALSTORAGEKEY = "reactjstemplete";

class AuthService {
  constructor() {
    const authString = localStorage.getItem(AUTH_LOCALSTORAGEKEY);
    if (authString) {
      this._auth = JSON.parse(authString);
    }
  }

  /**
   * @param {string} username
   * @param {string} password
   */

  // Login Request
  async login(username, password) {
    const response = await axios.post(`${APIURL.local}${APIENDPOINT.login}`, {
      username,
      password
    });
    if (response.success) {
      localStorage.setItem(AUTH_LOCALSTORAGEKEY, JSON.stringify(response.data));
      this._auth = response.data;
    }
    return response;
  }

  // Signup Request
  async signup(username, password) {
    const response = await axios.post(
      `${APIURL.local}${APIENDPOINT.signup}`,
      {
        username,
        password
      }
    );
    if (response.success) {
      localStorage.setItem(AUTH_LOCALSTORAGEKEY, JSON.stringify(response.data));
      this._auth = response.data;
    }
    return response;
  }

  isAuthenticated() {
    if (!this._auth) {
      return false;
    }

    if (Date.now() > this._auth.expiredOn) {
      localStorage.removeItem(AUTH_LOCALSTORAGEKEY);
      this._auth = undefined;
      return false;
    }

    return true;
  }

  getToken() {
    if (!this._auth) {
      return null;
    }
    return this._auth.token;
  }

  async logout() {
    localStorage.removeItem(AUTH_LOCALSTORAGEKEY);
    this._auth = undefined;
  }

}

export default new AuthService();
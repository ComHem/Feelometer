/* globals localStorage */
/* eslint-disable */

import axios from 'axios'

export default {
  login(email, pass, callback) {
    callback = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (callback) callback(true)
      this.onChange(true)
      return
    }
    loginRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (callback) callback(true)
        this.onChange(true)
      } else {
        if (callback) callback(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(callback) {
    delete localStorage.token
    document.cookie = 'userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie = 'teamId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    if (callback) callback()
    this.onChange (false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {
  }
}

function loginRequest(username, pass, callback) {
  setTimeout(() => {
    axios.post('http://localhost:8080/login', {
      username: username,
      password: pass
    }).then((response) => {
      if (response.status === 200) {
        document.cookie = 'userId=' + response.data.userId
        document.cookie = 'teamId=' + response.data.team.teamId

        callback({
          authenticated: true,
          token: Math.random().toString(36).substring(7)
        })
      }
    }).catch((error) => {
      callback({authenticated: false})
    })
  }, 0)
}

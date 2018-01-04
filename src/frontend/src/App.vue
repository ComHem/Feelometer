<template>
  <div id="app">
    <div class="header-container">
      <h1 class="site-title">FEEL-O-METER</h1>
      <div class="navbar-container">
        <router-link class="navbar-link" v-if="!loggedIn" to="/signup">Sign up</router-link>
        <router-link class="navbar-link" v-if="loggedIn" to="/">How do you feel?</router-link>
        <router-link class="navbar-link" v-if="loggedIn" to="/teampage">How your team feels</router-link>
        <router-link class="navbar-link" v-if="loggedIn" to="/chart">History</router-link>
        <router-link class="navbar-link" v-if="loggedIn" to="/logout">Log out</router-link>
        <router-link class="navbar-link" v-if="!loggedIn" to="/login">Log in</router-link>
      </div>
      <div class="hamburger-container">
        <nav>
          <input type="checkbox" id="hamburger-box"/>
          <label for="hamburger-box"><div class="toggle">&equiv;</div></label>

          <ul class="menu">
            <li><router-link class="navbar-link" v-if="!loggedIn" to="/signup">Sign up</router-link></li>
            <li><router-link class="navbar-link" v-if="loggedIn" to="/">How do you feel?</router-link></li>
            <li><router-link class="navbar-link" v-if="loggedIn" to="/teampage">How your team feels</router-link></li>
            <li><router-link class="navbar-link" v-if="loggedIn" to="/chart">History</router-link></li>
            <li><router-link class="navbar-link" v-if="loggedIn" to="/logout">Log out</router-link></li>
            <li><router-link class="navbar-link" v-if="!loggedIn" to="/login">Log in</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
  /* eslint-disable */
  import auth from './auth'
  import AmCharts from 'amcharts3'
  import AmSerial from 'amcharts3/amcharts/serial'

  export default {
    data() {
      return {
        loggedIn: auth.loggedIn()
      }
    },
    created() {
      auth.onChange = loggedIn => {
        this.loggedIn = loggedIn
      }
    }
  }
</script>

<style>
  @import url('assets/main.css');

  .header-container {
    font-size: 50px;
    background-color: #323942;
    display: flex;
    justify-content: space-between;
    padding: 8px 20px;
  }

  .navbar-link {
    font-size: 20px;
  }

  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .site-title {
    letter-spacing: 4px;
    font-size: 32px;
    margin-top: 7px;
  }

  #hamburger-box, .toggle {
    display:none;
  }

  @media screen and (min-width: 768px) {
    .hamburger-container {
      display: none;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .site-title {
      text-align: left;
    }

    .navbar-container {
      display: none;
    }

    .site-title {
      font-size: 26px;
    }

    nav {
      width: 100%
    }

    nav ul {
      flex-direction: column;
      background-color: #323942;
      padding-left: 0;
    }

    nav > ul > li {
      justify-content: center;
      text-align: center;
      align-items: center;
      align-content: center;
      width: 100%;
      padding:0;
      height:0;
      opacity:0;
      visibility: hidden;
    }

    nav .navbar-link {
      padding: 3px 0;
      margin-right: 0;
    }

    nav .navbar-link:hover {
      background: #0093bb;
    }

    .navbar-link {
      font-size: 9px;
    }

    .toggle {
      font-size: 26px;
      color: #fff;
      display: block;
      text-align: center;
      cursor: pointer;
      width: 100%;
      padding: 0;
      margin: 0;
      background-color: #323942;
    }

    .toggle:hover {
      background-color: #323942;
    }

    #hamburger-box:checked + label + ul.menu > li {
      opacity: 1;
      visibility: visible;
      height: auto;
    }
  }

</style>

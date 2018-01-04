<template>
  <div class="login-container">
    <h2>Login</h2>
<!--    <p class="login-error" v-if="$route.query.redirect">
      You need to login first.
    </p>-->
    <form class="login-form" v-on:submit="validate(pass, username)">
        <label><input v-model="username" placeholder="Username" type="text"></label>
        <label><input v-model="pass" placeholder="Password" type="password"></label>
        {{message}}
        <button type="submit" v-on:click="validate(pass, username)"><strong>Log in</strong></button>
        <p v-if="error" class="error">Bad login information</p>
    </form>
  </div>
</template>

<script>
  /* eslint-disable */
  import auth from '../auth'

  export default {
    data () {
      return {
        username: '',
        pass: '',
        error: false,
        userDataExists: true,
        message: ''
      }
    },
    methods: {
      validate(password, username) {
        event.preventDefault()

        if (password.length < 1 || username.length < 1) {
          this.message = 'All fields are required'
          this.userDataExists = false
          this.login()
        } else {
          this.login()
          this.message = ''
        }
      },
      login () {
        auth.login(this.username, this.pass, loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            this.$router.replace(this.$route.query.redirect || '/')
          }
        })
      }
    }
  }
</script>

<style>

  .login-error {
    margin-top: 16px;
    text-align: center;
  }

  .login-form {
    width: 30%;
    border: 2px solid darkcyan;
    margin: 35px auto auto auto;
    font-size: large;
    color: black;
    padding: 16px;
    background-color: #f7f9f8;
    border-radius: 8px;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .login-form {
      width: 80%;
    }
  }

  h2 {
    margin-top: 50px;
    letter-spacing:2px;
    font-weight: 900;
  }

  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: large;
  }

  button {
    background-color: #3b5d71;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    font-size: large;
    border-radius: 6px;
  }

  button:hover {
    opacity: 0.7;
  }

  .error {
    color: red;
  }

  @import url('../assets/main.css');

</style>

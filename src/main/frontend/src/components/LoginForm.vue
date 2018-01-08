<template>
  <div class="login-form__container">
    <h2>Login</h2>
    <form class="login-form__form" @submit.prevent="login">
      <label><input v-model="username" placeholder="Username" type="text"></label>
      <label><input v-model="pass" placeholder="Password" type="password"></label>
      <button type="submit" v-on:click="login"><strong>Log in</strong></button>
      <div v-if="error" class="login-form__error-message-container">
        <p v-if="error" class="login-form__error-message">Incorrect username or password</p>
      </div>
    </form>
  </div>
</template>

<script>
  /* eslint-disable */
  import auth from '../auth'

  export default {
    name: 'LoginForm',
    data() {
      return {
        username: '',
        pass: '',
        error: false,
        message: ''
      }
    },
    methods: {
      login() {
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

  .login-form__error-message-container {
    background-color: #FFBABA;
    color: #323942;
    font-size: 14px;
    border-radius: 6px;
    margin-top: 8px;
    padding: 10px 0;
    text-align: center;
  }

  .login-form__form {
    width: 30%;
    border: 2px solid darkcyan;
    margin: 35px auto auto auto;
    font-size: large;
    color: #000;
    padding: 16px;
    background-color: #f7f9f8;
    border-radius: 8px;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .login-form__form {
      width: 80%;
    }
  }

  h2 {
    margin-top: 50px;
    letter-spacing: 2px;
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

</style>

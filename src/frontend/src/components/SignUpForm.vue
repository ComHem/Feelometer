<template>
  <div class="signup-form__container">
    <h2>Sign up</h2>
    <form class="signup-form" v-on:submit="validate(password, username, selectedTeam)">
        <span>Select your team: </span>
        <select v-model="selectedTeam">
          <option disabled value="">Please select your team</option>
          <option v-for="item in teams" v-bind:value="item">
            {{item.teamName}}
          </option>
        </select>
        <input type="text" v-model="username" placeholder="Username"/>
        <input type="password" v-model="password" placeholder="Password"/>
        <button type="submit" v-on:click="validate(password, username, selectedTeam)"><strong>Create account</strong></button>
        <p class="signup-form__error-message">{{errorMessage}}</p>
        <p v-if="success" class="signup-form__success-message">Success! You are now registered and will be forwarded to the login</p>
    </form>
  </div>
</template>

<script>
  /* eslint-disable */
  import axios from 'axios'

  export default {
    name: 'RegisterUser',
    data() {
      return {
        username: '',
        password: '',
        teams: [],
        selectedTeam: {},
        errorMessage: '',
        success: false
      }
    },
    methods: {
      validate(password, username, teamname) {
        event.preventDefault()

        if (password.length < 1 || username.length < 1 || Object.keys(teamname).length === 0) {
          this.errorMessage = 'All fields are required'
        } else {
          this.saveUser(password, username, teamname)
          this.errorMessage = ''
        }
      },
      saveUser: function () {
        axios.post('http://localhost:8080/user', {
          username: this.username, password: this.password, team: this.selectedTeam
        })
          .then(() => {
            this.success = true
            setTimeout(() => {
              this.$router.replace(this.$route.query.redirect || '/login')
            }, 3000);
          })
          .catch(() => {
            this.errorMessage = 'Username is already in use'
          })
      },
      getTeams: function () {
        axios.get('http://localhost:8080/team')
          .then((response) => {
            this.teams = response.data
          })
      }
    },
    beforeMount() {
      this.getTeams()
    }
  }
</script>

<style scoped>

  select {
    margin: 5px 5px 5px 0;
    height: 30px;
    font-size: 15px;
    width: 100%;
    padding: 12px 20px;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    background-color: white;
    appearance: normal;
  }

  .signup-form {
    border: 2px solid darkcyan;
    width: 30%;
    font-size: large;
    color: black;
    margin: 35px auto auto auto;
    padding: 16px;
    background: #f7f9f8;
    border-radius: 8px;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .signup-form {
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
    letter-spacing: 1px;
  }

  button:hover {
    opacity: 0.7;
  }

  .signup-form__error-message {
    padding-top: 8px;
    color: red;
  }

  .signup-form__success-message {
    padding-top: 8px;
  }

</style>

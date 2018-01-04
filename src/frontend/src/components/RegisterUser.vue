<template>
  <div class="signup-container">
    <h2>Sign up</h2>
    <form class="signup-form" v-on:submit="validate(password, username, selectedTeam)">
        <span>Select your team: </span>
        <select v-model="selectedTeam">
          <option disabled value="">Please select your team</option>
          <option v-for="item in teams" v-bind:value="item">
            {{ item.teamName }}
          </option>
        </select>
        <input type="text" v-model="username" placeholder="Username"/>
        <input type="password" v-model="password" placeholder="Password"/>
        <button type="submit" v-on:click="validate(password, username, selectedTeam)"><strong>Create account</strong></button>
        <p class="message">{{message}}</p>
        <p v-if="success" class="success-message">Success! You are now registered and will be forwarded to the Login</p>
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
        userDataExists: true,
        selectedTeam: {},
        message: '',
        success: true
      }
    },
    methods: {
      validate(password, username, teamname) {
        event.preventDefault()

        if (password.length < 1 || username.length < 1 || Object.keys(teamname).length === 0) {
          this.message = 'All fields are required'
          this.userDataExists = false
        } else {
          this.saveUser(password, username, teamname)
          this.message = ''
        }
      },
      saveUser: function () {
        axios.post('http://localhost:8080/user', {
          username: this.username, password: this.password, team: this.selectedTeam
        })
          .then(() => {
            this.$router.replace(this.$route.query.redirect || '/login')
          })
          .catch(() => {
            this.message = 'Username is already in use'
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

  .message {
    color: red;
  }

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

</style>

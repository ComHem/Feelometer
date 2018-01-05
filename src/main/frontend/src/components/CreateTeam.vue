<template>
  <div class="login-form__container">
    <h2>Register team</h2>
    <form class="login-form__form" v-on:submit="validate(teamname)">
      <label><input v-model="teamname" placeholder="Team name" type="text"></label>
      <button type="submit" v-on:click="validate(teamname)"><strong>Register team</strong></button>
      <p class="login-form__error-message">{{message}}</p>
      <p v-if="error" class="error">Something went wrong</p>
    </form>
  </div>
</template>

<script>
  /* eslint-disable */
  import auth from '../auth'
  import axios from 'axios'

  export default {
    name: 'CreateTeamForm',
    data() {
      return {
        teamname: '',
        pass: '',
        error: false,
        message: '',
        teamnames: [],
        doesTeamExist: false
      }
    },
    methods: {
      validate: function(teamname) {
        event.preventDefault();
        console.log(teamname);
        console.log(this.teamnames);
        if (teamname.length < 1) {
          this.message = 'Team name must have at least one character';
        }
        else {
            for(let i = 0; i<this.teamnames.length; i++){
                if(this.teamnames[i] === teamname){
                    this.doesTeamExist = true;
                    this.message = teamname + " already exists.";
                    break;
                }
                else {
                    this.message = '';
                }
            }
            if(this.doesTeamExist === false){
              this.postNewTeam(teamname);
            }
            else {
                this.doesTeamExist = false;
            }
        }
      },
      getTeams: function() {
        axios.get('http://localhost:8080/team/')
          .then((response) => {
            for(let i = 0; i<response.data.length; i++) {
              this.populateTeamArray(response.data[i].teamName);
            }
          });
      },
      populateTeamArray: function(teamname) {
          this.teamnames.push(teamname);
      },
      postNewTeam: function(teamname) {
          this.teamnames.push(teamname);
          axios.post('http://localhost:8080/team', {
              teamName: teamname
          });
          console.log(this.teamnames);
        this.message = teamname + " succesfully registered";
      }
    },
    created() {
        this.getTeams();
    }
  }
</script>

<style lang="scss">

  .login-form__error-message {
    margin-top: 16px;
    text-align: center;
  }

  .login-form__form {
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

  .error {
    color: red;
  }

  @import url('../assets/main.scss');

</style>

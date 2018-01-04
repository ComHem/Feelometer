<template>
  <div class="team-page">
    <h1>{{team.teamName}}</h1>
    <h3 class="todaysDate">{{moment()}}</h3>
    <div class="team-score-container">
      <div class="team-score">
        {{ Math.round(teamScore * 100)/100 || 0}}
      </div>
    </div>
    <div class="user-score-container">
      <div class="user-score-row" v-for="score in userScores">
        <div class="user-score-item">
          {{ score }}
        </div>
        <div class="anonymousProfile">Anonymous
          <p><img id="animalImage" v-bind:src="'src/assets/icons/' + getRandomAnimal()"/></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import axios from 'axios'
  import * as moment from 'moment'

  export default {
    name: 'TeamPage',
    data() {
      return {
        teamScore: 0,
        userScores: [],
        team: {},
        animalImages: ['Alligator.png', 'Armadillo.png', 'Anteater.png', 'Auroch.png', 'Axolotl.png', 'Bat.png', 'Badger.png', 'Beaver.png', 'Buffalo.png', 'Camel.png', 'Capybara.png', 'Chameleon.png', 'Cheetah.png', 'Chinchilla.png', 'Chipmunk.png', 'Chupacabra.png', 'Cormorant.png', 'Coyote.png', 'Crow.png', 'Dingo.png', 'Dinosaur.png', 'Dolphin.png', 'Duck.png', 'Elephant.png', 'Ferret.png', 'Fox.png', 'Frog.png', 'Giraffe.png', 'Gopher.png', 'Grizzly.png', 'Hedgehog.png', 'Hippo.png', 'Hyena.png', 'Ibex.png', 'Ifrit.png', 'Iguana.png', 'Jackal.png', 'Kangaroo.png', 'Koala.png', 'Kraken.png', 'Lemur.png', 'Leopard.png', 'Liger.png', 'Llama.png', 'Manatee.png', 'Mink.png', 'Monkey.png', 'Moose.png', 'Narwhal.png', 'Nyan Cat.png', 'Orangutan.png', 'Otter.png', 'Panda.png', 'Penguin.png', 'Platypus.png', 'Pumpkin.png', 'Python.png', 'Quagga.png', 'Rabbit.png', 'Raccoon.png', 'Rhino.png', 'Sheep.png', 'Shrew.png', 'Skunk.png', 'Squirrel.png', 'Tiger.png', 'Turtle.png', 'Walrus.png', 'Wolf.png', 'Wolverine.png', 'Wombat.png'],
      }
    },
    methods: {
      getTeamScore: function () {
        axios.get('http://localhost:8080/score/all-team-score-by-user-and-date/?userId=' + this.getCookie('userId') + '&creationDate=' + this.moment())
          .then((response) => {
            this.teamScore = response.data
          })
      },
      getTeamUserScores: function () {
        axios.get('http://localhost:8080/score/team-user-scores/?userId=' + this.getCookie('userId') + '&creationDate=' + this.moment())
          .then((response) => {
            this.userScores = response.data
          })
      },
      getCurrentTeam: function () {
        axios.get('http://localhost:8080/team/' + this.getCookie('teamId'))
          .then((response) => {
            this.team = response.data
          })
      },
      getCookie: function (name) {
        let re = new RegExp(name + '=([^;]+)')
        let value = re.exec(document.cookie)
        return (value != null) ? unescape(value[1]) : null
      },
      getRandomAnimal: function () {
        let position = Math.floor(Math.random() * this.animalImages.length)
        return this.animalImages[position]
      },
      moment: function () {
        let date = moment().format('YYYY-MM-DD')
        return date.toString()
      }
    },
    beforeMount() {
      this.getTeamScore()
      this.getTeamUserScores()
      this.getCurrentTeam()
    }
  }
</script>

<style scoped>

  .team-page {
    font-size: large;
    text-align: center;
    margin-top: 40px;
  }

  h1 {
    font-weight: normal;
    font-size: 3.5em;
    margin-bottom: 0.1em;
  }

  .todaysDate {
    color: white;
    margin-bottom: 0.8em;
  }

  .team-score-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .team-score {
    width: 150px;
    height: 150px;
    font-size: 50pt;
    background-color: #2c3e50;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-score-container {
    margin-top: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-top: 2em;
  }

  .user-score-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .user-score-item {
    border-radius: 50%;
    background-color: #2c3e50;
    height: 75px;
    width: 75px;
    font-size: 20pt;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 0.3em;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  form {
    border: 3px solid #f1f1f1;
    width: 40%;
    margin-left: 30%;
    font-size: large;
  }

  h2 {
    color: #42b983;
    text-align: center;
  }

  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  button {
    background-color: #42b983;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    font-size: large;
  }

  button:hover {
    opacity: 0.8;
  }

  #animalImage {
    width: 40px;
  }

</style>

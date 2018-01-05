<template>
  <div class="main-container">
    <h1>{{ message }}</h1>
    <div class="circle-container">
      <input
        type="radio"
        id="-2"
        value="-2"
        v-model="chosenScore"
        class="scoreRadioButton"
        v-on:change="saveScore"
      />
      <label class="circle red" for="-2">-2</label>
      <input
        type="radio"
        id="-1"
        value="-1"
        v-model="chosenScore"
        class="scoreRadioButton"
        v-on:change="saveScore"
      />
      <label class="circle magenta" for="-1">-1</label>
      <input
        type="radio"
        id="0"
        value="0"
        v-model="chosenScore"
        class="scoreRadioButton"
        v-on:change="saveScore"
      />
      <label class="circle purple" for="0">0</label>
      <input
        type="radio"
        id="1"
        value="1"
        v-model="chosenScore"
        class="scoreRadioButton"
        v-on:change="saveScore"
      />
      <label class="circle light-blue" for="1">1</label>
      <input
        type="radio"
        id="2"
        value="2"
        v-model="chosenScore"
        class="scoreRadioButton"
        v-on:change="saveScore"
      />
      <label class="circle dark-blue" for="2">2</label>
      <input
        type="radio"
        id="3"
        value="3"
        v-model="chosenScore"
        class="scoreRadioButton"
        v-on:change="saveScore"
      />
      <label class="circle yellow" for="3">3</label>
      <input
        type="radio"
        id="4"
        value="4"
        v-model="chosenScore"
        class="scoreRadioButton"
        v-on:change="saveScore"
      />
      <label class="circle light-green" for="4">4</label>
      <input
        type="radio"
        id="5"
        value="5"
        v-model="chosenScore"
        class="scoreRadioButton"
        v-on:change="saveScore"
      />
      <label class="circle dark-green" for="5">5</label>
    </div>
    <div>
      <h1 v-if="!userHasPosted"></h1>
      <h2 class="has-posted-header" v-else>You have already voted today 🙊 Come back tomorrow! </h2>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import axios from 'axios'

  export default {
    name: 'Feelometer',
    data() {
      return {
        message: 'How do you feel today?',
        scores: [-2, 1, 0, 1, 2, 3, 4, 5],
        chosenScore: '',
        userHasPosted: false
      }
    },
    methods: {
      saveScore: function () {
        axios.get('http://localhost:8080/user/' + this.getCookie('userId') + '/score?score=' + this.chosenScore)
          .then((response) => {
            console.log(response)
            this.$router.replace(this.$route.query.redirect || '/teampage')
          })
      },
      getCookie: function (name) {
        let re = new RegExp(name + "=([^;]+)");
        let value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : null;
      },
      hasUserPosted: function () {
        axios.get('http://localhost:8080/user/' + this.getCookie('userId') + '/has-posted')
          .then((response) => {
            if (response.data === true) {
              this.userHasPosted = true
            }
          })
      }
    },
    beforeMount() {
      this.hasUserPosted()
    }
  }
</script>

<style scoped>

  .main-container {
    margin-top: 40px;
  }

  .circle-container {
    display: flex;
    justify-content: space-around;
    margin: 32px auto;
    width: 80%;
  }

  .has-posted-header {
    font-size: 40px;
  }

  input[type="radio"] {
    display: none;
  }

  label {
    background-color: #ddd;
    height: 150px;
    width: 150px;
    padding: 4px 11px;
    font-size: 28px;
    cursor: pointer;
    border-radius: 50%;
  }

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .yellow {
    background-color: #ffcd00;
    opacity: 0.8;
  }

  .light-green {
    background-color: #4dc901;
    opacity: 0.8;
  }

  .dark-green {
    background-color: #039840;
    opacity: 0.8;
  }

  .light-blue {
    background-color: #00c4ff;
    opacity: 0.8;
  }

  .dark-blue {
    background-color: #ff7f02;
    opacity: 0.8;
  }

  .purple {
    background-color: #a063dc;
    opacity: 0.8;
  }

  .magenta {
    background-color: #ff54aa;
    opacity: 0.8;
  }

  .red {
    background-color: #ff2d1e;
    opacity: 0.8;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .main-container {
      width: 95%;
      margin: 40px auto;
    }

    .circle-container {
      flex-direction: column;
      align-items: center;
    }

    .circle {
      margin-bottom: 16px;
    }
  }

</style>

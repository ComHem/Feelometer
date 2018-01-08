<template>
  <div class="main-container">
    <h1>All time averages</h1>
    <router-link id="user-data-navigator" class="navbar-link" to="/history/team-and-user">Your team</router-link>
    <router-link id="team-data-navigator" class="navbar-link" to="/history/all-teams">All teams</router-link>
    <div id="team-average-chart" style="width:100%; height: 600px;"></div>
  </div>
</template>

<script>
  /* eslint-disable */
  import axios from 'axios'

  export default {
    name: 'TeamAverageChart',
    data() {
      return {
        teams: []
      }
    },
    methods: {
      getAllTeamScores: function () {
        axios.get('http://localhost:8080/score/all-team-scores')
          .then((response) => {
            let sums = {};
            let counts = {};
            let results = [];
            for (let i = 0; i < response.data.length; i++) {
              for (let team in response.data[i]) {
                if (team !== 'date' && !(team in sums)) {
                  sums[team] = 0;
                  counts[team] = 0;
                }

                if (team !== 'date' && response.data[i][team] !== null) {
                  sums[team] += response.data[i][team];
                  counts[team]++;
                }
              }
            }
            for (let team in sums) {
              results.push({
                team: team,
                value: (Math.round((sums[team] / counts[team]) * 100) / 100),
                color: this.getRandomColor()
              });
            }
            this.createChart(results);
          })
      },
      getRandomColor: function () {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      },
      createChart: function (data) {
        let chart = AmCharts.makeChart("team-average-chart", {
          "type": "serial",
          "theme": "light",
          "marginRight": 70,
          "dataProvider": data,
          "valueAxes": [{
            "axisAlpha": 0,
            "position": "left",
            //"gridThickness":0,
          }],
          "startDuration": 1,
          "graphs": [{
            "balloonText": "<b>[[category]]: [[value]]</b>",
            "fillColorsField": "color",
            "fillAlphas": 0.9,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "value"
          }],
          "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
          },
          "categoryField": "team",
          "categoryAxis": {
            "gridPosition": "start",
            "gridThickness": 0
          },
          "export": {
            "enabled": true
          }

        });
      }
    },
    created() {
      this.getAllTeamScores();
    }
  }
</script>

<style>

  .main-container {
    margin-top: 40px;
  }

  #team-average-chart {
    padding-left: 20px;
  }

  image {
    display: none;
  }

  .navbar-link {
    display: block !important;
  }

  a {
    display: none !important;
  }

  #team-data-navigator {
    position: absolute;
    right: 40px;
    top: 100px;
    display: inline !important;
    text-align: center;
    background-color: #323942;
    padding: 10px;
    border-radius: 5px;

  }

  #user-data-navigator {
    position: absolute;
    right: 150px;
    top: 100px;
    display: inline !important;
    text-align: center;
    background-color: #323942;
    padding: 10px;
    border-radius: 5px;

  }

  @media screen and (max-width: 767px) {
    #team-data-navigator {
      position: relative;
      text-align: center;
      right: 0;
      top: 0;
      margin-left: 12px;
      display: block !important;
      background-color: #323942;
      padding: 10px;
      border-radius: 5px;

    }

    #user-data-navigator {
      position: relative;
      text-align: center;
      right: 0;
      top: 0;
      margin-left: 12px;
      display: block !important;
      background-color: #323942;
      padding: 10px;
      border-radius: 5px;

    }
  }

</style>

<template>
  <div class="main-container">
    <h1>All teams history</h1>
    <router-link id="user-data-navigator" class="navbar-link" to="/history/team-and-user">Your team</router-link>
    <router-link id="team-data-navigator" class="navbar-link" to="/history/team-average">Averages</router-link>
    <div class="team-charts">
      <div id="teamchart" style="width: 100%; height: 600px;"></div>
    </div>
    <div class="team-labels" v-for="team in teams">
      <div class="team-color" v-bind:style="{'background-color': team.color }"></div>
      {{team.team}}
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import axios from 'axios'

  export default {
    name: 'TeamCharts',
    data() {
      return {
        teams: [],
        colors: [
          "#000000", "#FFFF00", "#FF4A46", "#0000A6", "#63FFAC", "#B79762", "#004D43", "#8FB0FF", "#997D87",
          "#5A0007", "#809693", "#FEFFE6", "#1B4400", "#4FC601", "#3B5DFF", "#4A3B53", "#FF2F80",
          "#61615A", "#BA0900", "#6B7900", "#00C2A0", "#FFAA92", "#FF90C9", "#B903AA", "#D16100",
          "#DDEFFF", "#000035", "#7B4F4B", "#A1C299", "#300018", "#0AA6D8", "#013349", "#00846F",
          "#372101", "#FFB500", "#C2FFED", "#A079BF", "#CC0744", "#C0B9B2", "#C2FF99", "#001E09",
          "#00489C", "#6F0062", "#0CBD66", "#EEC3FF", "#456D75", "#B77B68", "#7A87A1", "#788D66",
          "#885578", "#FAD09F", "#FF8A9A", "#D157A0", "#BEC459", "#456648", "#0086ED", "#886F4C",]

      }
    },
    methods: {
      getAllTeamScores: function () {
        axios.get('http://localhost:8080/score/all-team-scores')
          .then((response) => {
            this.createChart(response.data);
          })
      },
      createChart: function (data) {

        let dataObject = data[0];
        let teamGraphs = [];
        let graphNumber = 1;
        let colorNumber = 0;
        for (let team in dataObject) {
          if (team === 'date') {

          }
          else {
            let color;
            if (colorNumber > 56) {
              color = this.getRandomColor();
            }
            else {
              color = this.colors[colorNumber];
            }
            let graph = {
              "id": "g" + graphNumber,
              "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
              "bullet": "round",
              "bulletSize": 8,
              "lineColor": color,
              "lineThickness": 3,
              "negativeLineColor": color,
              "type": "smoothedLine",
              "valueField": team
            };
            this.teams.push({team, color});
            teamGraphs.push(graph);
            graphNumber = graphNumber + 1;
            colorNumber = colorNumber + 1;
          }
        }

        AmCharts.makeChart("teamchart", {
          "type": "serial",
          "path": "src/assets",
          "theme": "light",
          "marginTop": 0,
          "marginRight": 80,
          "dataProvider": data,
          "valueAxes": [{
            "axisAlpha": 0,
            "position": "left",
            "gridThickness": 0,
            "maximum": 5.5,
            "minimum": -2,
            "labelFrequency": 2
          }],
          "graphs": teamGraphs,
          "chartCursor": {
            "categoryBalloonDateFormat": "YYYY-MM-DD",
            "cursorAlpha": 0,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "valueLineAlpha": 0.5,
            "adjustBorderColor": true,
            "categoryBalloonColor": "#000",
            "cursorColor": "#000",
            "color": "#FFF",
            "fullWidth": true
          },
          "dataDateFormat": "YYYY-MM-DD",
          "categoryField": "date",
          "categoryAxis": {
            "minPeriod": "DD",
            "parseDates": true,
            "minorGridAlpha": 0.1,
            "minorGridEnabled": true,
            "gridThickness": 0,
            "color": "#000"
          },
          "export": {
            "enabled": true
          },
          "numberFormatter": {
            "precision": 1,
            "decimalSeparator": "."
          }
        });

        function getRandomColor() {
          let letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }

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

  .team-charts {
    padding-left: 20px;
  }

  .team-labels {
    display: inline-block;
    margin-left: 20px;
    margin-top: 10px;
  }

  .team-color {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    display: inline-block;
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

  #color-square-user {
    margin-left: 20px;
    height: 40px;
    width: 40px;
    background-color: #d133b7;
    display: inline-block;
    border-radius: 50%;
  }

  #color-square-team {
    background-color: black;
    margin-left: 20px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: inline-block;
  }

  .average-div {
    display: inline-block;
    margin-top: 20px;
    margin-left: 20px;
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

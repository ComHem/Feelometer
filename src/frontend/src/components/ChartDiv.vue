<template>
  <div class="main-container">
  <div class="chart-div">
    <h1>Team & user history</h1>
    <router-link id="user-data-navigator" class="navbar-link" to="/all-team-chart">All teams</router-link>
    <router-link id="team-data-navigator" class="navbar-link" to="/team-average-chart">Averages</router-link>
    <div id="chartdiv" style="width: 100%; height: 600px;"></div>
    <div class="squares">
      <div id="color-square-user" v-bind:style="{'background-color': teamColor }"></div>
      <Span style="margin-top: -10px;"> Team</Span>
      <div id="color-square-team"></div>
      <Span> You</Span>
    </div>
    <div class="allTimeScores">
      <div class="average-div">All time team average: {{allTimeTeamScore}}</div>
      <div class="average-div">All time user average: {{allTimeUserScore}}</div>
      </div>
  </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import axios from 'axios';

  export default {
    name: 'ChartDiv',
    data () {
      return {
        allTimeTeamScore: "",
        allTimeUserScore: "",
        teamColor: ""
      }
    },
    methods: {
      getTeamScores: function () {
        axios.get('http://localhost:8080/score/team-scores?teamId=' + this.getCookie('teamId') + "&userId=" + this.getCookie('userId'))
          .then((response) => {
            let teamAllTime = 0;
            let userAllTime = 0;
            let userEntries = 0;
            let teamEntries = 0;
            for(let i = 0; i < response.data.length; i ++){
                if(!response.data[i].value1){}
                else {
                  teamAllTime = teamAllTime + response.data[i].value1;
                  teamEntries = teamEntries + 1;
                }
                if(!response.data[i].value2){}
                else{
                  userAllTime = userAllTime + response.data[i].value2;
                  userEntries ++;
                }
            }
            this.allTimeTeamScore = Math.round((teamAllTime/teamEntries) * 100) / 100;
            this.allTimeUserScore = Math.round((userAllTime/userEntries) * 100) / 100;
            this.teamColor = this.getRandomColor();
            this.createChart(response.data, this.teamColor);
          })
      },
      getCookie: function (name) {
        let re = new RegExp(name + '=([^;]+)');
        let value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : null;
      },
      getRandomColor: function () {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      },
      createChart: function (data, color) {
        AmCharts.makeChart("chartdiv", {
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
          "graphs": [{
            "id": "g1",
            "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
            "bullet": "round",
            "bulletSize": 8,
            "lineColor": color,
            "lineThickness": 3,
            "negativeLineColor": color,
            "type": "smoothedLine",
            "valueField": "value1"
            },
            {
              "id": "g2",
              "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
              "bullet": "round",
              "bulletSize": 8,
              "lineColor": "#323942",
              "lineThickness": 3,
              "negativeLineColor": "#323942",
              "type": "smoothedLine",
              "valueField": "value2"
            }
           ],
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
      }
    },
    created() {
      this.getTeamScores();
    }
  }
</script>

<style>

  h1 {
    margin-top: 40px;
  }

  .chart-div {
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

  #color-square-user {
    margin-left: 20px;
    height: 30px;
    width: 30px;
    display: inline-block;
    border-radius: 50%;
  }

  #color-square-team {
    background-color: #323942;
    margin-left: 20px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: inline-block;
  }

  .average-div {
    display: inline-block;
    margin-top: 20px;
    margin-left: 20px;
  }

  #team-data-navigator {
    position:absolute;
    right: 40px;
    top:100px;
    display: inline !important;
    text-align: center;
    background-color: #323942;
    padding: 10px;
    border-radius: 5px;

  }

  #user-data-navigator {
    position:absolute;
    right: 150px;
    top:100px;
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

webpackJsonp([1],{"2T/W":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),n=a("yxUK"),r=(a("wDpx"),a("9EFi"),{data:function(){return{loggedIn:n.a.loggedIn()}},created:function(){var e=this;n.a.onChange=function(t){e.loggedIn=t}}}),o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"header-container"},[a("h1",{staticClass:"site-title"},[e._v("FEEL-O-METER")]),e._v(" "),a("div",{staticClass:"navbar-container"},[e.loggedIn?e._e():a("router-link",{staticClass:"navbar-link",attrs:{to:"/signup"}},[e._v("Sign up")]),e._v(" "),e.loggedIn?a("router-link",{staticClass:"navbar-link",attrs:{to:"/"}},[e._v("How do you feel?")]):e._e(),e._v(" "),e.loggedIn?a("router-link",{staticClass:"navbar-link",attrs:{to:"/teampage"}},[e._v("How your team feels")]):e._e(),e._v(" "),e.loggedIn?a("router-link",{staticClass:"navbar-link",attrs:{to:"/chart"}},[e._v("History")]):e._e(),e._v(" "),e.loggedIn?a("router-link",{staticClass:"navbar-link",attrs:{to:"/logout"}},[e._v("Log out")]):e._e(),e._v(" "),e.loggedIn?e._e():a("router-link",{staticClass:"navbar-link",attrs:{to:"/login"}},[e._v("Log in")])],1),e._v(" "),a("div",{staticClass:"hamburger-container"},[a("nav",[a("input",{attrs:{type:"checkbox",id:"hamburger-box"}}),e._v(" "),e._m(0,!1,!1),e._v(" "),a("ul",{staticClass:"menu"},[a("li",[e.loggedIn?e._e():a("router-link",{staticClass:"navbar-link",attrs:{to:"/signup"}},[e._v("Sign up")])],1),e._v(" "),a("li",[e.loggedIn?a("router-link",{staticClass:"navbar-link",attrs:{to:"/"}},[e._v("How do you feel?")]):e._e()],1),e._v(" "),a("li",[e.loggedIn?a("router-link",{staticClass:"navbar-link",attrs:{to:"/teampage"}},[e._v("How your team feels")]):e._e()],1),e._v(" "),a("li",[e.loggedIn?a("router-link",{staticClass:"navbar-link",attrs:{to:"/chart"}},[e._v("History")]):e._e()],1),e._v(" "),a("li",[e.loggedIn?a("router-link",{staticClass:"navbar-link",attrs:{to:"/logout"}},[e._v("Log out")]):e._e()],1),e._v(" "),a("li",[e.loggedIn?e._e():a("router-link",{staticClass:"navbar-link",attrs:{to:"/login"}},[e._v("Log in")])],1)])])])]),e._v(" "),e.$route.matched.length?[a("router-view")]:e._e()],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"hamburger-box"}},[t("div",{staticClass:"toggle"},[this._v("≡")])])}]},i=a("VU/8")(r,o,!1,function(e){a("mBTx")},null,null).exports,l=a("YaEn");s.a.config.productionTip=!1,new s.a({el:"#app",router:l.a,template:"<App/>",components:{App:i}})},Rlnt:function(e,t,a){"use strict";var s=a("mtWM"),n=a.n(s),r={name:"TeamCharts",data:function(){return{teams:[],colors:["#000000","#FFFF00","#FF4A46","#0000A6","#63FFAC","#B79762","#004D43","#8FB0FF","#997D87","#5A0007","#809693","#FEFFE6","#1B4400","#4FC601","#3B5DFF","#4A3B53","#FF2F80","#61615A","#BA0900","#6B7900","#00C2A0","#FFAA92","#FF90C9","#B903AA","#D16100","#DDEFFF","#000035","#7B4F4B","#A1C299","#300018","#0AA6D8","#013349","#00846F","#372101","#FFB500","#C2FFED","#A079BF","#CC0744","#C0B9B2","#C2FF99","#001E09","#00489C","#6F0062","#0CBD66","#EEC3FF","#456D75","#B77B68","#7A87A1","#788D66","#885578","#FAD09F","#FF8A9A","#D157A0","#BEC459","#456648","#0086ED","#886F4C"]}},methods:{getAllTeamScores:function(){var e=this;n.a.get("http://localhost:8080/score/all-team-scores").then(function(t){e.createChart(t.data)})},createChart:function(e){var t=e[0],a=[],s=1,n=0;for(var r in t)if("date"===r);else{var o=void 0,i={id:"g"+s,balloonText:"[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",bullet:"round",bulletSize:8,lineColor:o=n>56?this.getRandomColor():this.colors[n],lineThickness:3,negativeLineColor:o,type:"smoothedLine",valueField:r};this.teams.push({team:r,color:o}),a.push(i),s+=1,n+=1}AmCharts.makeChart("teamchart",{type:"serial",path:"src/assets",theme:"light",marginTop:0,marginRight:80,dataProvider:e,valueAxes:[{axisAlpha:0,position:"left",gridThickness:0,maximum:5.5,minimum:-2,labelFrequency:2}],graphs:a,chartCursor:{categoryBalloonDateFormat:"YYYY-MM-DD",cursorAlpha:0,valueLineEnabled:!0,valueLineBalloonEnabled:!0,valueLineAlpha:.5,adjustBorderColor:!0,categoryBalloonColor:"#000",cursorColor:"#000",color:"#FFF",fullWidth:!0},dataDateFormat:"YYYY-MM-DD",categoryField:"date",categoryAxis:{minPeriod:"DD",parseDates:!0,minorGridAlpha:.1,minorGridEnabled:!0,gridThickness:0,color:"#000"},export:{enabled:!0},numberFormatter:{precision:1,decimalSeparator:"."}})}},created:function(){this.getAllTeamScores()}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-container"},[a("h1",[e._v("All teams history")]),e._v(" "),a("router-link",{staticClass:"navbar-link",attrs:{id:"user-data-navigator",to:"/chart"}},[e._v("Your team")]),e._v(" "),a("router-link",{staticClass:"navbar-link",attrs:{id:"team-data-navigator",to:"/team-average-chart"}},[e._v("Averages")]),e._v(" "),e._m(0,!1,!1),e._v(" "),e._l(e.teams,function(t){return a("div",{staticClass:"team-labels"},[a("div",{staticClass:"team-color",style:{"background-color":t.color}}),e._v("\n    "+e._s(t.team)+"\n  ")])})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"team-charts"},[t("div",{staticStyle:{width:"100%",height:"600px"},attrs:{id:"teamchart"}})])}]},i=a("VU/8")(r,o,!1,function(e){a("nKG6")},null,null);t.a=i.exports},SpGz:function(e,t,a){"use strict";var s=a("mtWM"),n=a.n(s),r={name:"Feelometer",data:function(){return{message:"Hur känner du dig idag?",scores:[-2,1,0,1,2,3,4,5],chosenScore:"",userHasPosted:!1}},methods:{saveScore:function(){var e=this;n.a.get("http://localhost:8080/user/"+this.getCookie("userId")+"/score?score="+this.chosenScore).then(function(t){console.log(t),e.$router.replace(e.$route.query.redirect||"/teampage")})},getCookie:function(e){var t=new RegExp(e+"=([^;]+)").exec(document.cookie);return null!=t?unescape(t[1]):null},hasUserPosted:function(){var e=this;n.a.get("http://localhost:8080/user/"+this.getCookie("userId")+"/has-posted").then(function(t){!0===t.data&&(e.userHasPosted=!0)})}},beforeMount:function(){this.hasUserPosted()}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-container"},[a("h1",[e._v(e._s(e.message))]),e._v(" "),a("div",{staticClass:"circle-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chosenScore,expression:"chosenScore"}],staticClass:"scoreRadioButton",attrs:{type:"radio",id:"-2",value:"-2"},domProps:{checked:e._q(e.chosenScore,"-2")},on:{change:[function(t){e.chosenScore="-2"},e.saveScore]}}),e._v(" "),a("label",{staticClass:"circle red",attrs:{for:"-2"}},[e._v("-2")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chosenScore,expression:"chosenScore"}],staticClass:"scoreRadioButton",attrs:{type:"radio",id:"-1",value:"-1"},domProps:{checked:e._q(e.chosenScore,"-1")},on:{change:[function(t){e.chosenScore="-1"},e.saveScore]}}),e._v(" "),a("label",{staticClass:"circle magenta",attrs:{for:"-1"}},[e._v("-1")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chosenScore,expression:"chosenScore"}],staticClass:"scoreRadioButton",attrs:{type:"radio",id:"0",value:"0"},domProps:{checked:e._q(e.chosenScore,"0")},on:{change:[function(t){e.chosenScore="0"},e.saveScore]}}),e._v(" "),a("label",{staticClass:"circle purple",attrs:{for:"0"}},[e._v("0")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chosenScore,expression:"chosenScore"}],staticClass:"scoreRadioButton",attrs:{type:"radio",id:"1",value:"1"},domProps:{checked:e._q(e.chosenScore,"1")},on:{change:[function(t){e.chosenScore="1"},e.saveScore]}}),e._v(" "),a("label",{staticClass:"circle light-blue",attrs:{for:"1"}},[e._v("1")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chosenScore,expression:"chosenScore"}],staticClass:"scoreRadioButton",attrs:{type:"radio",id:"2",value:"2"},domProps:{checked:e._q(e.chosenScore,"2")},on:{change:[function(t){e.chosenScore="2"},e.saveScore]}}),e._v(" "),a("label",{staticClass:"circle dark-blue",attrs:{for:"2"}},[e._v("2")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chosenScore,expression:"chosenScore"}],staticClass:"scoreRadioButton",attrs:{type:"radio",id:"3",value:"3"},domProps:{checked:e._q(e.chosenScore,"3")},on:{change:[function(t){e.chosenScore="3"},e.saveScore]}}),e._v(" "),a("label",{staticClass:"circle yellow",attrs:{for:"3"}},[e._v("3")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chosenScore,expression:"chosenScore"}],staticClass:"scoreRadioButton",attrs:{type:"radio",id:"4",value:"4"},domProps:{checked:e._q(e.chosenScore,"4")},on:{change:[function(t){e.chosenScore="4"},e.saveScore]}}),e._v(" "),a("label",{staticClass:"circle light-green",attrs:{for:"4"}},[e._v("4")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.chosenScore,expression:"chosenScore"}],staticClass:"scoreRadioButton",attrs:{type:"radio",id:"5",value:"5"},domProps:{checked:e._q(e.chosenScore,"5")},on:{change:[function(t){e.chosenScore="5"},e.saveScore]}}),e._v(" "),a("label",{staticClass:"circle dark-green",attrs:{for:"5"}},[e._v("5")])]),e._v(" "),a("div",[e.userHasPosted?a("h2",[e._v("Du har redan röstat idag 🙊 Kom tillbaka imorgon! ")]):a("h1",[a("h2",[e._v("Du har valt: "+e._s(e.chosenScore))])])])])},staticRenderFns:[]},i=a("VU/8")(r,o,!1,function(e){a("dD1u")},"data-v-6ea78596",null);t.a=i.exports},VQvI:function(e,t){},YaEn:function(e,t,a){"use strict";(function(e){function s(e,t,a){o.a.loggedIn()?a():a({path:"/login",query:{redirect:e.fullPath}})}var n=a("7+uW"),r=a("/ocq"),o=a("yxUK"),i=a("cY3b"),l=a("xJsL"),c=a("SpGz"),u=a("tEte"),d=a("xsk3"),m=a("Rlnt"),h=a("ZT9U");n.a.use(r.a),t.a=new r.a({mode:"history",base:e,routes:[{path:"/login",component:l.a},{type:"scope",path:"/signup",component:i.a},{path:"/",component:c.a,beforeEnter:s},{path:"/teampage",component:u.a,beforeEnter:s},{path:"/chart",component:d.a,beforeEnter:s},{path:"/all-team-chart",component:m.a,beforeEnter:s},{path:"/team-average-chart",component:h.a,beforeEnter:s},{path:"/logout",beforeEnter:function(e,t,a){o.a.logout(),a("/login")}}]})}).call(t,"/")},ZT9U:function(e,t,a){"use strict";var s=a("mtWM"),n=a.n(s),r={name:"TeamAverageChart",data:function(){return{teams:[]}},methods:{getAllTeamScores:function(){var e=this;n.a.get("http://localhost:8080/score/all-team-scores").then(function(t){for(var a={},s={},n=[],r=0;r<t.data.length;r++)for(var o in t.data[r])"date"===o||o in a||(a[o]=0,s[o]=0),"date"!==o&&null!==t.data[r][o]&&(a[o]+=t.data[r][o],s[o]++);for(var i in a)n.push({team:i,value:Math.round(a[i]/s[i]*100)/100,color:e.getRandomColor()});e.createChart(n)})},getRandomColor:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},createChart:function(e){AmCharts.makeChart("team-average-chart",{type:"serial",theme:"light",marginRight:70,dataProvider:e,valueAxes:[{axisAlpha:0,position:"left"}],startDuration:1,graphs:[{balloonText:"<b>[[category]]: [[value]]</b>",fillColorsField:"color",fillAlphas:.9,lineAlpha:.2,type:"column",valueField:"value"}],chartCursor:{categoryBalloonEnabled:!1,cursorAlpha:0,zoomable:!1},categoryField:"team",categoryAxis:{gridPosition:"start",gridThickness:0},export:{enabled:!0}})}},created:function(){this.getAllTeamScores()}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-container"},[t("h1",[this._v("All time averages")]),this._v(" "),t("router-link",{staticClass:"navbar-link",attrs:{id:"user-data-navigator",to:"/chart"}},[this._v("Your team")]),this._v(" "),t("router-link",{staticClass:"navbar-link",attrs:{id:"team-data-navigator",to:"/all-team-chart"}},[this._v("All teams")]),this._v(" "),t("div",{staticStyle:{width:"100%",height:"600px"},attrs:{id:"team-average-chart"}})],1)},staticRenderFns:[]},i=a("VU/8")(r,o,!1,function(e){a("fI1c")},null,null);t.a=i.exports},cY3b:function(e,t,a){"use strict";var s=a("fZjL"),n=a.n(s),r=a("mtWM"),o=a.n(r),i={name:"RegisterUser",data:function(){return{username:"",password:"",teams:[],userDataExists:!0,selectedTeam:{},message:""}},methods:{validate:function(e,t,a){event.preventDefault(),e.length<1||t.length<1||0===n()(a).length?(this.message="All fields are required",this.userDataExists=!1):(this.saveUser(e,t,a),this.message="")},saveUser:function(){var e=this;o.a.post("http://localhost:8080/user",{username:this.username,password:this.password,team:this.selectedTeam}).then(function(){e.$router.replace(e.$route.query.redirect||"/login")}).catch(function(){e.message="Username is already in use"})},getTeams:function(){var e=this;o.a.get("http://localhost:8080/team").then(function(t){e.teams=t.data})}},beforeMount:function(){this.getTeams()}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"signup-container"},[a("h2",[e._v("Sign up")]),e._v(" "),a("form",{staticClass:"signup-form",on:{submit:function(t){e.validate(e.password,e.username,e.selectedTeam)}}},[a("span",[e._v("Select your team: ")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedTeam,expression:"selectedTeam"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedTeam=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Please select your team")]),e._v(" "),e._l(e.teams,function(t){return a("option",{domProps:{value:t}},[e._v("\n          "+e._s(t.teamName)+"\n        ")])})],2),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("button",{attrs:{type:"submit"},on:{click:function(t){e.validate(e.password,e.username,e.selectedTeam)}}},[a("strong",[e._v("Sign up")])]),e._v(" "),a("p",{staticClass:"message"},[e._v(e._s(e.message))])])])},staticRenderFns:[]},c=a("VU/8")(i,l,!1,function(e){a("pAR6")},"data-v-744db2a0",null);t.a=c.exports},dD1u:function(e,t){},fI1c:function(e,t){},mBTx:function(e,t){},nKG6:function(e,t){},pAR6:function(e,t){},sTJT:function(e,t){},tEte:function(e,t,a){"use strict";var s=a("mtWM"),n=a.n(s),r=a("PJh5"),o={name:"TeamPage",data:function(){return{teamScore:0,userScores:[],team:{},animalImages:["Alligator.png","Armadillo.png","Anteater.png","Auroch.png","Axolotl.png","Bat.png","Badger.png","Beaver.png","Buffalo.png","Camel.png","Capybara.png","Chameleon.png","Cheetah.png","Chinchilla.png","Chipmunk.png","Chupacabra.png","Cormorant.png","Coyote.png","Crow.png","Dingo.png","Dinosaur.png","Dolphin.png","Duck.png","Elephant.png","Ferret.png","Fox.png","Frog.png","Giraffe.png","Gopher.png","Grizzly.png","Hedgehog.png","Hippo.png","Hyena.png","Ibex.png","Ifrit.png","Iguana.png","Jackal.png","Kangaroo.png","Koala.png","Kraken.png","Lemur.png","Leopard.png","Liger.png","Llama.png","Manatee.png","Mink.png","Monkey.png","Moose.png","Narwhal.png","Nyan Cat.png","Orangutan.png","Otter.png","Panda.png","Penguin.png","Platypus.png","Pumpkin.png","Python.png","Quagga.png","Rabbit.png","Raccoon.png","Rhino.png","Sheep.png","Shrew.png","Skunk.png","Squirrel.png","Tiger.png","Turtle.png","Walrus.png","Wolf.png","Wolverine.png","Wombat.png"]}},methods:{getTeamScore:function(){var e=this;n.a.get("http://localhost:8080/score/all-team-score-by-user-and-date/?userId="+this.getCookie("userId")+"&creationDate="+this.moment()).then(function(t){e.teamScore=t.data})},getTeamUserScores:function(){var e=this;n.a.get("http://localhost:8080/score/team-user-scores/?userId="+this.getCookie("userId")+"&creationDate="+this.moment()).then(function(t){e.userScores=t.data})},getCurrentTeam:function(){var e=this;n.a.get("http://localhost:8080/team/"+this.getCookie("teamId")).then(function(t){e.team=t.data})},getCookie:function(e){var t=new RegExp(e+"=([^;]+)").exec(document.cookie);return null!=t?unescape(t[1]):null},getRandomAnimal:function(){var e=Math.floor(Math.random()*this.animalImages.length);return this.animalImages[e]},moment:function(){return r().format("YYYY-MM-DD").toString()}},beforeMount:function(){this.getTeamScore(),this.getTeamUserScores(),this.getCurrentTeam()}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"team-page"},[a("h1",[e._v(e._s(e.team.teamName))]),e._v(" "),a("h3",{staticClass:"todaysDate"},[e._v(e._s(e.moment()))]),e._v(" "),a("div",{staticClass:"team-score-container"},[a("div",{staticClass:"team-score"},[e._v("\n      "+e._s(Math.round(100*e.teamScore)/100||0)+"\n    ")])]),e._v(" "),a("div",{staticClass:"user-score-container"},e._l(e.userScores,function(t){return a("div",{staticClass:"user-score-row"},[a("div",{staticClass:"user-score-item"},[e._v("\n        "+e._s(t)+"\n      ")]),e._v(" "),a("div",{staticClass:"anonymousProfile"},[e._v("Anonymous\n        "),a("p",[a("img",{attrs:{id:"animalImage",src:"src/assets/icons/"+e.getRandomAnimal()}})])])])}))])},staticRenderFns:[]},l=a("VU/8")(o,i,!1,function(e){a("sTJT")},"data-v-13950673",null);t.a=l.exports},uslO:function(e,t,a){function s(e){return a(n(e))}function n(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id="uslO"},xJsL:function(e,t,a){"use strict";var s=a("yxUK"),n={data:function(){return{username:"",pass:"",error:!1,userDataExists:!0,message:""}},methods:{validate:function(e,t){event.preventDefault(),e.length<1||t.length<1?(this.message="All fields are required",this.userDataExists=!1,this.login()):(this.login(),this.message="")},login:function(){var e=this;s.a.login(this.username,this.pass,function(t){t?e.$router.replace(e.$route.query.redirect||"/"):e.error=!0})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-container"},[a("h2",[e._v("Login")]),e._v(" "),a("form",{staticClass:"login-form",on:{submit:function(t){e.validate(e.pass,e.username)}}},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"Username",type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],attrs:{placeholder:"Password",type:"password"},domProps:{value:e.pass},on:{input:function(t){t.target.composing||(e.pass=t.target.value)}}})]),e._v("\n        "+e._s(e.message)+"\n        "),a("button",{attrs:{type:"submit"},on:{click:function(t){e.validate(e.pass,e.username)}}},[a("strong",[e._v("Log in")])]),e._v(" "),e.error?a("p",{staticClass:"error"},[e._v("Bad login information")]):e._e()])])},staticRenderFns:[]},o=a("VU/8")(n,r,!1,function(e){a("2T/W")},null,null);t.a=o.exports},xsk3:function(e,t,a){"use strict";var s=a("mtWM"),n=a.n(s),r={name:"ChartDiv",data:function(){return{allTimeTeamScore:"",allTimeUserScore:"",teamColor:""}},methods:{getTeamScores:function(){var e=this;n.a.get("http://localhost:8080/score/team-scores?teamId="+this.getCookie("teamId")+"&userId="+this.getCookie("userId")).then(function(t){for(var a=0,s=0,n=0,r=0,o=0;o<t.data.length;o++)t.data[o].value1&&(a+=t.data[o].value1,r+=1),t.data[o].value2&&(s+=t.data[o].value2,n++);e.allTimeTeamScore=Math.round(a/r*100)/100,e.allTimeUserScore=Math.round(s/n*100)/100,e.teamColor=e.getRandomColor(),e.createChart(t.data,e.teamColor)})},getCookie:function(e){var t=new RegExp(e+"=([^;]+)").exec(document.cookie);return null!=t?unescape(t[1]):null},getRandomColor:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},createChart:function(e,t){AmCharts.makeChart("chartdiv",{type:"serial",path:"src/assets",theme:"light",marginTop:0,marginRight:80,dataProvider:e,valueAxes:[{axisAlpha:0,position:"left",gridThickness:0,maximum:5.5,minimum:-2,labelFrequency:2}],graphs:[{id:"g1",balloonText:"[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",bullet:"round",bulletSize:8,lineColor:t,lineThickness:3,negativeLineColor:t,type:"smoothedLine",valueField:"value1"},{id:"g2",balloonText:"[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",bullet:"round",bulletSize:8,lineColor:"#323942",lineThickness:3,negativeLineColor:"#323942",type:"smoothedLine",valueField:"value2"}],chartCursor:{categoryBalloonDateFormat:"YYYY-MM-DD",cursorAlpha:0,valueLineEnabled:!0,valueLineBalloonEnabled:!0,valueLineAlpha:.5,adjustBorderColor:!0,categoryBalloonColor:"#000",cursorColor:"#000",color:"#FFF",fullWidth:!0},dataDateFormat:"YYYY-MM-DD",categoryField:"date",categoryAxis:{minPeriod:"DD",parseDates:!0,minorGridAlpha:.1,minorGridEnabled:!0,gridThickness:0,color:"#000"},export:{enabled:!0},numberFormatter:{precision:1,decimalSeparator:"."}})}},created:function(){this.getTeamScores()}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-container"},[t("div",{staticClass:"chart-div"},[t("h1",[this._v("Team & user history")]),this._v(" "),t("router-link",{staticClass:"navbar-link",attrs:{id:"user-data-navigator",to:"/all-team-chart"}},[this._v("All teams")]),this._v(" "),t("router-link",{staticClass:"navbar-link",attrs:{id:"team-data-navigator",to:"/team-average-chart"}},[this._v("Averages")]),this._v(" "),t("div",{staticStyle:{width:"100%",height:"600px"},attrs:{id:"chartdiv"}}),this._v(" "),t("div",{staticClass:"squares"},[t("div",{style:{"background-color":this.teamColor},attrs:{id:"color-square-user"}}),this._v(" "),t("Span",{staticStyle:{"margin-top":"-10px"}},[this._v(" Team")]),this._v(" "),t("div",{attrs:{id:"color-square-team"}}),this._v(" "),t("Span",[this._v(" You")])],1),this._v(" "),t("div",{staticClass:"allTimeScores"},[t("div",{staticClass:"average-div"},[this._v("All time team average: "+this._s(this.allTimeTeamScore))]),this._v(" "),t("div",{staticClass:"average-div"},[this._v("All time user average: "+this._s(this.allTimeUserScore))])])],1)])},staticRenderFns:[]},i=a("VU/8")(r,o,!1,function(e){a("VQvI")},null,null);t.a=i.exports},yxUK:function(e,t,a){"use strict";var s=a("mtWM"),n=a.n(s);t.a={login:function(e,t,a){var s=this;if(a=arguments[arguments.length-1],localStorage.token)return a&&a(!0),void this.onChange(!0);!function(e,t,a){setTimeout(function(){n.a.post("http://localhost:8080/login",{username:e,password:t}).then(function(e){200===e.status?(document.cookie="userId="+e.data.userId,document.cookie="teamId="+e.data.team.teamId,a({authenticated:!0,token:Math.random().toString(36).substring(7)})):a({authenticated:!1})})},0)}(e,t,function(e){e.authenticated?(localStorage.token=e.token,a&&a(!0),s.onChange(!0)):(a&&a(!1),s.onChange(!1))})},getToken:function(){return localStorage.token},logout:function(e){delete localStorage.token,document.cookie="userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="teamId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",e&&e(),this.onChange(!1)},loggedIn:function(){return!!localStorage.token},onChange:function(){}}}},["NHnr"]);
//# sourceMappingURL=app.903d9b74a7170c5b23a6.js.map
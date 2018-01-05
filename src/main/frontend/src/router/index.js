/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth'
import SignUpForm from '@/components/SignUpForm.vue'
import LoginForm from '@/components/LoginForm.vue'
import Feelometer from '@/components/Feelometer.vue'
import TeamPage from '@/components/TeamPage.vue'
import ChartDiv from '@/components/ChartDiv.vue'
import TeamCharts from '@/components/TeamCharts.vue'
import TeamAverageChart from '@/components/TeamAverageChart.vue'
import CreateTeam from '@/components/CreateTeam.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,

  routes: [
    { path: '/login', component: LoginForm },
    { path: '/signup', component: SignUpForm },
    { path: '/createteam', component: CreateTeam },
    { path: '/', component: Feelometer, beforeEnter: requireAuth },
    { path: '/teampage', component: TeamPage, beforeEnter: requireAuth },
    { path: '/chart', component: ChartDiv, beforeEnter: requireAuth },
    { path: '/all-team-chart', component: TeamCharts, beforeEnter: requireAuth },
    { path: '/team-average-chart', component: TeamAverageChart, beforeEnter: requireAuth },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/login')
      }
    }
  ]
})

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
}

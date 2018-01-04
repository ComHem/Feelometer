/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth'
import RegisterUser from '@/components/RegisterUser.vue'
import Login from '@/components/Login.vue'
import Feelometer from '@/components/Feelometer.vue'
import TeamPage from '@/components/TeamPage.vue'
import ChartDiv from '@/components/ChartDiv.vue'
import TeamCharts from '@/components/TeamCharts.vue'
import TeamAverageChart from '@/components/TeamAverageChart.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,

  routes: [
    { path: '/login', component: Login, },
    { type: 'scope', path: '/signup', component: RegisterUser },
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

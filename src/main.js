import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/screen/Home'
import Serach from './components/screen/Search'
import Video from './components/screen/Video'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Changepassword from './components/auth/Changepassword'
import Notification from './components/screen/Notification'
import Profile from './components/auth/Profile'
import Videobyuser from "@/components/screen/Videobyuser";
import Newpassword from './components/auth/Newpassword'
import StudioHome from './components/studio/Home'
Vue.use(VueRouter)


function mid(to, from, next){
  if(localStorage.getItem("authtoken") == null){
    return next({path:"/login"})
  }
  next()
}




const routes = [
  { path:"/", component: Home},
  { path:"/search/:id", component: Serach},
  { path: "/video/:id", component: Video, beforeEnter:mid},
  { path: "/notifications", component: Notification},
  { path:"/login", component: Login},
  { path:"/signup", component: Signup},
  { path:"/changepassword", component: Changepassword},
  { path:"/profile", component: Profile},
  { path:"/newpassword", component: Newpassword},
  { path: "/user/:id", component: Videobyuser},
  { path: "/studio", component: StudioHome, beforeEnter:mid}
]
const router = new VueRouter({
  mode : 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

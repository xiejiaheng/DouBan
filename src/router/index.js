import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import home from '../components/MovieHot.vue'
import List from '../components/List.vue'
import Search from '../components/Search.vue'
import My from '../components/My.vue'
import Movieinfo from '../components/Movieinfo.vue'
import MovieHot from '../soncomm/Hots.vue'
import soon from '../soncomm/soon.vue'
import listtop from '../listsoncom/top250.vue'
import listweekly from '../listsoncom/weekly.vue'
import listnew_movies from '../listsoncom/new_movies.vue'
import listus_box from '../listsoncom/us_box.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',component:home},
    {path:'/',redirect:'/home'},
    {path:'/List',component:List},
    {path:'/Search',component:Search},
    {path:'/My',component:My},
    {path:'/home/Movieinfo',component:Movieinfo},
    {path:'/HotMovie',component:MovieHot},
    {path:'/SoonMovie',component:soon},
    {path:'/list/Top250',component:listtop},
    {path:'/list/weekly',component:listweekly},
    {path:'/list/new_movies',component:listnew_movies},
    {path:'/list/us_box',component:listus_box},
  ],
  linkActiveClass:'mui-active'
  
})

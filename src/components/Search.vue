<template>  
  <div>
    <div class="mui-input-row mui-search">
        <input type="search" class="mui-input-clear" placeholder="搜索" @keyup.enter="search" v-model="searchdata">
    </div>
    <ul>
        <li v-for="mv in list" :key="mv.id">
            <router-link :to="{path: '/Movieinfo', query: {id: mv.id }}">
            <div class="demo">
                <div class="left"><img :src="mv.images.small" alt=""></div>
                <div class="right">
                    <span>{{mv.title}}</span>
                    <mt-badge type="success" size="small">{{mv.rating.average}}</mt-badge>
                    <p>
                    类型：{{mv.genres[0]}}<br>
                    年份：{{mv.year}}<br>
                    <span v-if="mv.directors.length !==0">导演：{{mv.directors[0].name}}</span><br>
                    <span v-if="mv.casts.length !==0">主演：{{mv.casts[0].name}}/{{mv.casts[1].name}}</span>
                    </p>
                    <!-- 
                    
                     -->
                </div>
            </div>
            </router-link>
        </li>
    </ul>
  </div>  
</template> 

<script>  
import { Toast } from "mint-ui";
export default {  
  data() {  
    return {  
     searchdata: '',
     list:[]
    };  
  },
methods:{
    search(){
        this.$http.get('api/movie/search?q='+this.searchdata).then(function(respon){
            console.log(respon.body.subjects)
            this.list = respon.body.subjects
            if(this.list.length === 0){
                Toast('没有搜索到您需要的内容')
            }
        })
    }
}  
};  
</script>  
<style scoped>

a{
    color: black;
}
ul li{
    display: flex;
    margin-top: 0.5em;
    margin-left: 0.5em
}
.demo{
  display: flex;                /*设置为flex布局*/
  justify-content: space-around;
}
.demo > div{
  flex: none;
}
.left{
  width: 90px;
  height: 120px;
  background: #d4cdcd;
}
.left img{
  width: 100%;
  height: 100%;
}
.right{
  margin-left: 0.5em;
  width: auto;
  height: 120px;
}
.mint-badge.is-size-small{
    padding: 0px 5px;
    border-radius: 5px;
    position: absolute;
    right: 30px;
    width: 25px;
    height: 18px;
    
}
.hot{
    list-style: none;
    display: flex;
    justify-content: space-around;
}
.actic{
    border-bottom: 2px solid seagreen;
}
</style>

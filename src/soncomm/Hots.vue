<template>
    <div  class="page-navbar">
        <h1>正在热映</h1>
        <ul>
            <li v-for="mv in list" :key="mv.id"><router-link :to="{path: '/Movieinfo', query: {id: mv.id }}">
            <div class="demo">
                <div class="left">
                    <img :src="mv.images.small" alt="">
                </div>
                <div class="right">
                    
                <span>{{mv.title}}</span>
                <mt-badge type="success" size="small">{{mv.rating.average}}</mt-badge>
                <p>评分：{{mv.rating.average}}<br>
                   导演：{{mv.directors[0].name}}<br>
                   主演：{{mv.casts[0].name}}/{{mv.casts[1].name}}<br>
                {{mv.collect_count}}人看过</p>
                </div>
            </div>
            </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data () {
        return {
            list:[]
        }
    },
    created(){
        this.getmoive()
    },
    methods:{
        getmoive:function(){
            this.$http.get('/api/movie/in_theaters').then(respone=>{
						if(respone.data.start === 0 ){
                            this.list =respone.body.subjects
                            console.log(respone.body.subjects)
                            console.log('数据获取成功！')
                        }else{
                            console.log('数据获取失败！')
                        }
					})
        },
    }
}
</script>
<style  scoped>
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
</style>
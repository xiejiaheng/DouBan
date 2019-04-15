<template>
    <div  class="page-navbar">
        <ul class="hot">
            <li @click="showhot" :class="[flag?'actic':'']">正在热映</li>
            <li @click="showsoon" :class="[flag1?'actic':'']">即将上映</li>
        </ul>
        <ul v-show="flag">
            <li v-for="mv in list" :key="mv.id"><router-link :to="{path: '/home/Movieinfo', query: {id: mv.id }}">
            <div class="demo">
                <div class="left">
                    <img :src="mv.images.small" alt="">
                </div>
                <div class="right">
                    
                <span>{{mv.title}}</span>
                <mt-badge type="success" size="small">{{mv.rating.average}}</mt-badge>
                <p>类型：{{mv.genres[0]}}<br>
                   导演：{{mv.directors[0].name}}<br>
                   <!-- 主演：{{mv.casts[0].name}}/{{mv.casts[1].name}}<br> -->
                {{mv.collect_count}}人看过</p>
                </div>
            </div>
            </router-link>
            </li>
        </ul>
                <ul v-show="flag1">
            <li v-for="mv in list1" :key="mv.id"><router-link :to="{path: '/home/Movieinfo', query: {id: mv.id }}">
            <div class="demo">
                <div class="left">
                    <img :src="mv.images.small" alt="">
                </div>
                <div class="right">
                    
                <span>{{mv.title}}</span>
                <mt-badge type="success" size="small">{{mv.rating.average}}</mt-badge>
                <p>
                类型：{{mv.genres[0]}}<br>
                <!-- 导演：{{ mv.directors[0].name }}<br> -->
                <span v-if="mv.casts.length >= 2">主演：{{mv.casts[0].name}}/{{mv.casts[1].name}}<br></span>
                {{mv.collect_count}}人想看
                </p> 
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
            list:[],
            list1:[],
            flag:true,
            flag1:false
        }
    },
    created(){
        this.getmoive()
        this.getsoonmoive()
    },
    methods:{
        showhot(){
            this.flag=true;
            this.flag1=false;
        },
        showsoon(){
            this.flag1=true;
            this.flag=false;
            },
        getmoive:function(){
            this.$http.get('/api/movie/in_theaters').then(respone=>{
						if(respone.data.start === 0 ){
                            this.list =respone.body.subjects
                            console.log(respone.body.subjects)
                            console.log('获取正在热映成功！')
                        }else{
                            console.log('数据获取失败！')
                        }
					})
        },
        getsoonmoive:function(){
            this.$http.get('/api/movie/coming_soon').then(respone=>{
						if(respone.data.start === 0 ){
                            this.list1 =respone.body.subjects
                            console.log(respone.body.subjects)
                            console.log('获取即将上映成功！')
                            console.log(respone.body.subjects[0].casts[0].name)
                        }else{
                            console.log('数据获取失败！')
                        }
					})
        },
    },
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
.hot{
    list-style: none;
    display: flex;
    justify-content: space-around;
}
.actic{
    border-bottom: 2px solid seagreen;
}
</style>


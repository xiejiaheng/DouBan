<template>
    <div>
        <div class="img">
            <img :src="list.images.medium">
        </div>
        <div class="box">
            <p>
                <span>{{list.title}}</span><br>
                {{list.year}}/{{list.genres[0]}}<br>
                时间/地区：{{list.year}}/{{list.countries[0]}}<br>
                豆瓣评分：{{list.rating.average}}<br>
                导演：{{list.directors[0].name}}<br>
                主演：{{list.casts[0].name}}/{{list.casts[1].name}}/{{list.casts[2].name}}...<br>
                简介：{{list.summary}}
            </p>
        </div>
             <div class="title">
				{{list.title}}--短评
			</div>
            <hr>
			<ul class="mui-table-view">
				<li v-for="com in comlist" :key="com.id">
                    <img class="mui-media-object mui-pull-left" :src="com.author.avatar">
                    <div>
                        <p class="duancom">{{com.author.name}}&nbsp;&nbsp;<span>评论时间:&nbsp;&nbsp;{{com.created_at}}</span></p>
                        <p>{{com.content}}</p>
                    </div>
				</li>
			</ul>
            <div class="btn">
                <button type="button" class="mui-btn mui-btn-success mui-btn-outlined ss" @click="morecom">
                加载更多评论
            </button>
            </div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data () {
        return {
            list:[],
            start:0,
            text_start:'',
            comlist:[]
        }
    },
    created(){
        this.getmoiveinfo()
        this.getmoivepl(this.star)
    },
    methods:{
        getmoiveinfo:function(){
            this.$http.get('/api/movie/subject/'+this.$route.query.id).then(respon =>{
                this.list = respon.body
            })
        },
        getmoivepl:function(star){
            this.$http.get('/api/movie/subject/'+this.$route.query.id+'/comments?start='+star+'&count=5&apikey=0df993c66c0c636e29ecbb5344252a4a').then(respon =>{
                this.comlist=this.comlist.concat(respon.body.comments);
                this.text_start = respon.body.next_start
               
            })
        },
        morecom(){
            this.getmoivepl(this.text_start)
             if(this.comlist.length === 0){
                    Toast('无评论！')
                }

        }
    }
}
</script>
<style scoped>
    .btn{
        text-align:center;
        padding: 1%;
    }
    .img{
        display:inline-block;
        width: 100%;
        height: 350px;
        background-color:rgb(124, 118, 114);
        text-align:center;
        vertical-align:middle;
    }
        .img img{
        width: 48%;
        height: 70%;
        margin-top:10%;
    }
    .box p{
        background-color: white;
    }
    p span{
        font-weight: bold;
    }
    .duancom{
        color: rgb(123, 187, 243);
    }
    .mui-table-view li{
        border-bottom: 1px silver solid;
        padding: 5px 5px;
    }
    .duancom span{
        color: #000;
        font-size: 5px;
        font-family:'微软雅黑';
        font-weight: 500;
    }
</style>
<template>
    <div class="mut">
        <ul class="topul">
            <li :class="['mui-badge','mui-badge-success',acti==0?'activ':'']" @click="gettoplist(0)">1-50</li>
            <li :class="['mui-badge','mui-badge-success',acti==50?'activ':'']" @click="gettoplist(50)">51-100</li>
            <li :class="['mui-badge','mui-badge-success',acti==100?'activ':'']" @click="gettoplist(100)">101-150</li>
            <li :class="['mui-badge','mui-badge-success',acti==150?'activ':'']" @click="gettoplist(150)">151-200</li>
            <li :class="['mui-badge','mui-badge-success',acti==200?'activ':'']" @click="gettoplist(200)">201-250</li>
        </ul>
        
        <div class="mui-card" v-for="(item,i) in toplist" :key="item.id">
            <div class="mui-card-header">
               	<button type="button" class="mui-btn mui-btn-warning">No.{{sum+i}}</button>

            </div>
            <div class="mui-card-content">
                <ul><li class="mui-table-view-cell mui-media">
					<router-link :to="{path: '/home/Movieinfo', query: {id: item.id }}">
						<img class="mui-media-object mui-pull-left" width="90px" height="120px" :src="item.images.small">
						<div class="mui-media-body mui-card-header1">
							&nbsp;&nbsp;{{item.title}}<em>({{item.year}})</em>
						</div>
                        <div class="mov">
                        &nbsp;&nbsp;豆瓣评分：{{item.rating.average}}<br>
                        &nbsp;&nbsp;类型：{{item.genres[0]}}<br>
                        &nbsp;&nbsp;导演：{{item.directors[0].name}}<br>
                        &nbsp;&nbsp;<span v-if="item.casts.length >=2">主演：{{item.casts[0].name}}/{{item.casts[1].name}}...<br></span>
                         
                        </div>
					</router-link>
				</li></ul>
                
            </div>
            <div class="mui-card-footer">上映时间：{{item.pubdates[0]}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            toplist:[],
            sum:1,
            acti:0,
        }
    },
    created(){
        this.gettoplist(0)
    },
    methods:{
        gettoplist(start){
            this.acti = start
            this.$http.get('api/movie/top250?start='+start+'&count=50&apikey=0df993c66c0c636e29ecbb5344252a4a').then(function(respon){
                this.toplist = respon.body.subjects
                console.log(respon.body.subjects)
                if(start != 0){
                    this.sum = start +1
                }
                
            })
        }
    },
    actve(){

    }
}
</script>

<style>
.mui-card{
    position: relative;
    top: 30px;
}
.topul{
   position:fixed;
margin:0 auto;
top: 40px;
left:0;
right:0;
    z-index: 99;
    background-color: white;

}
.mui-badge-success, .mui-badge-green {
    background-color: #fff;
    border: #4cd964 solid 1px ;
}
.mui-badge {
    margin:5px auto;
    text-align: center;
    font-size: 12px;
    line-height: 1.2;
    display: inline-block;
    color: #4cd964;
    background-color: rgba(248, 244, 244, 0.15);
}
.activ{
      background-color: #4cd964;
    border: #4cd964 solid 1px ;
    color: white;
}
.mut{
    text-align: center;
    position: relative;

}
.mut div:nth-child(0){
    margin-top: 20%
}
.mui-card-header{
    font-weight:600;
}
.mui-btn-warning, .mui-btn-yellow {
    color: #885816;
    border: 1px solid #f3ae4e;
    background-color: #f3ae4e;
    padding:1px 3px;
    border-radius: 5px;
    font-weight:6400;
}
.mui-card-content{
    
    text-align: left;
}
.mui-card-header1{
    font-weight:500;
    font-size: 1.3em;
}
.mui-card-header1 em{
    color: rgb(133, 127, 122);
}
.mov{
    color: rgb(148, 144, 141);
}
.mui-card-header, .mui-card-footer {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0px 15px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.mui-card-header:after, .mui-card-footer:before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
</style>



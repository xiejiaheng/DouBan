<template>
    <div class="mut">
        <div class="mui-card" v-for="(item,i) in toplist" :key="item.subject.id">
            <div class="mui-card-header">
               	<button type="button" class="mui-btn mui-btn-warning">No.{{i+1}}</button>
            </div>
            <div class="mui-card-content">
                <ul><li class="mui-table-view-cell mui-media">
					<router-link :to="{path: '/home/Movieinfo', query: {id: item.subject.id }}">
						<img class="mui-media-object mui-pull-left" width="90px" height="120px" :src="item.subject.images.small">
						<div class="mui-media-body mui-card-header1">
							&nbsp;&nbsp;{{item.subject.title}}<em>({{item.subject.year}})</em>
						</div>
                        <div class="mov">
                        &nbsp;&nbsp;<span>豆瓣评分：{{item.subject.rating.average}}</span><br>
                        &nbsp;&nbsp;<span>类型：{{item.subject.genres[0]}}</span><br>
                        &nbsp;&nbsp;<span v-if="item.subject.directors.length !== 0">导演：{{item.subject.directors[0].name}}</span><br>
                        &nbsp;&nbsp;<span>主演：{{item.subject.casts[0].name}}...</span><br>
                        </div>
					</router-link>
				</li></ul>
                
            </div>
            <!-- <div class="mui-card-footer">上映时间：{{item.subject.pubdates[0]}}</div>  -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            toplist:[],
        }
    },
    created(){
        this.gettoplist()
    },
    methods:{
        gettoplist(){
            this.$http.get('api/movie/us_box').then(function(respon){
                this.toplist = respon.body.subjects
                console.log(respon.body.subjects)
            })
        }
    },
}
</script>

<style>
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



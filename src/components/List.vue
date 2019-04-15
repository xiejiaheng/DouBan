<template>
    <div>
        <router-link to="/list/Top250" class="top250">
            <div class="left">
                <img :src="toplsit[1].images.small" class="img3">
                <img :src="toplsit[2].images.small" class="img2">
                <img :src="toplsit[0].images.small" class="img1">
            </div>
            <div class="right">
                 <h4>豆瓣Top 250</h4>
                <span>8分以上的好电影</span> 
            </div>
        </router-link>

        <router-link to="/list/weekly" class="top2501">
            <div class="left">
                <img :src="toplsit1[1].subject.images.small" class="img3">
                <img :src="toplsit1[2].subject.images.small" class="img2">
                <img :src="toplsit1[0].subject.images.small" class="img1">
            </div>
            <div class="right">
                 <h4>本周口碑好评</h4>
                <span>关注本周好电影</span> 
            </div>
        </router-link>

        <router-link to="/list/new_movies" class="top2502">
            <div class="left">
                <img :src="toplsit2[1].images.small" class="img3">
                <img :src="toplsit2[2].images.small" class="img2">
                <img :src="toplsit2[0].images.small" class="img1">
            </div>
            <div class="right">
                 <h4>新片榜</h4>
                <span>3月18-3月24</span> 
            </div>
        </router-link>

        <router-link to="/list/us_box" class="top2503">
            <div class="left">
                <img :src="toplsit3[1].subject.images.small" class="img3">
                <img :src="toplsit3[2].subject.images.small" class="img2">
                <img :src="toplsit3[0].subject.images.small" class="img1">
            </div>
            <div class="right">
                 <h4>北美票房榜</h4>
                <span>票房最高排名</span> 
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            toplsit:[],
            toplsit1:[],
            toplsit2:[],
            toplsit3:[],
        }
    },
    created(){
        this.gettop(),
        this.gettop1(),
        this.gettop2()
        this.gettop3()
    },
    methods:{
        gettop(){
            this.$http.get('api/movie/top250').then(resopn =>{
                this.toplsit = resopn.body.subjects.slice(0,3)
                console.log('top250'+this.toplsit[1].images.small)

            })
        },
        gettop1(){
            this.$http.get('api/movie/weekly?apikey=0df993c66c0c636e29ecbb5344252a4a').then(resopn =>{
                this.toplsit1 = resopn.body.subjects.slice(0,3)

            })
        },
        gettop2(){
            this.$http.get('api/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a').then(resopn =>{
                this.toplsit2 = resopn.body.subjects.slice(0,3)
            })
        },
        gettop3(){
            this.$http.get('api/movie/us_box').then(resopn =>{
                 this.toplsit3 = resopn.data.subjects.slice(0,3)
            })
        }
    }
};
</script>
<style scoped>
.top250{
    margin: 0% 10px;
    width: auto;
    height: 150px;
    background: linear-gradient(to bottom, rgb(236, 164, 56), rgba(250, 247, 235, 0.822));
    border-radius: 5%;  
    display: flex;
    flex-flow: row-reverse;
     display: -moz-box;/*兼容Firefox*/
      display: -webkit-box;/*兼容FSafari、Chrome*/

      -moz-box-align: center;/*兼容Firefox*/
      -webkit-box-align: center;/*兼容FSafari、Chrome */

      -moz-box-pack: center;/*兼容Firefox*/
      -webkit-box-pack: center;/*兼容FSafari、Chrome */
      margin-top: 3%;
}
.top2501{
    margin: 0% 10px;
    width: auto;
    height: 150px;
    background: linear-gradient(to bottom, rgb(140, 236, 85), rgba(250, 247, 235, 0.822));
    border-radius: 5%;  
    display: flex;
    flex-flow: row-reverse;
     display: -moz-box;/*兼容Firefox*/
      display: -webkit-box;/*兼容FSafari、Chrome*/

      -moz-box-align: center;/*兼容Firefox*/
      -webkit-box-align: center;/*兼容FSafari、Chrome */

      -moz-box-pack: center;/*兼容Firefox*/
      -webkit-box-pack: center;/*兼容FSafari、Chrome */
      margin-top: 3%;
}
.top2502{
    margin: 0% 10px;
    width: auto;
    height: 150px;
    background: linear-gradient(to bottom, rgb(51, 182, 243), rgba(250, 247, 235, 0.822));
    border-radius: 5%;  
    display: flex;
    flex-flow: row-reverse;
     display: -moz-box;/*兼容Firefox*/
      display: -webkit-box;/*兼容FSafari、Chrome*/

      -moz-box-align: center;/*兼容Firefox*/
      -webkit-box-align: center;/*兼容FSafari、Chrome */

      -moz-box-pack: center;/*兼容Firefox*/
      -webkit-box-pack: center;/*兼容FSafari、Chrome */
      margin-top: 3%;
}
.top2503{
    margin: 0% 10px;
    width: auto;
    height: 150px;
    background: linear-gradient(to bottom, rgb(243, 82, 157), rgba(250, 247, 235, 0.822));
    border-radius: 5%;  
    display: flex;
    flex-flow: row-reverse;
     display: -moz-box;/*兼容Firefox*/
      display: -webkit-box;/*兼容FSafari、Chrome*/

      -moz-box-align: center;/*兼容Firefox*/
      -webkit-box-align: center;/*兼容FSafari、Chrome */

      -moz-box-pack: center;/*兼容Firefox*/
      -webkit-box-pack: center;/*兼容FSafari、Chrome */
      margin-top: 3%;
}
.left{
    width: 55%; 
}
.right{
    
    text-align: center;
    color: white;
    font-size: 13px;
     width: 45%;
    /*height: 150px; */
    position: relative;
}
.img1  {
    width: 35%;
    text-align: center;
    z-index: 99;
    margin-top:-5px;
    position: relative;
}
.img2  {
    width: 32%;
    float:right ;
    position: relative;
    right: 7%;
}
.img3  {
    width: 32%;
    float:left;
    position: relative;
    left: 7%;
    z-index: 1;
}
</style>

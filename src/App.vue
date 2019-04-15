<template>
  <div class="app-con">
    <!-- 头部区域 -->
    <mt-header fixed title="豆瓣电影">
	<span slot="left" @click="bacsk">
    	<mt-button icon="back" v-show="flg">返回</mt-button>
 	</span>
	</mt-header>
    <!-- 中间内容区域 -->
		<transition>
			<router-view
			@
			></router-view>
		</transition>
    
    <!-- 底部区域 -->
    		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">热映</span>
			</router-link>
			<router-link class="mui-tab-item" to="/list">
				<span class="mui-icon mui-icon-extra mui-icon-extra-rank"></span>
				<span class="mui-tab-label">排行</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item" to="/my">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
	data(){
		return{
			flg:false
		}
	},
	methods:{
		bacsk(){
			this.$router.go(-1)
		},
		
	},
	watch:{
		'$route.path':function(){
			console.log('ssss')
			if(this.$route.path === '/home' || this.$route.path === '/list' || this.$route.path === '/search' || this.$route.path === '/my'){
				this.flg = false
			}else{
				this.flg = true
			}
		}
	}
}
</script>


<style scoped>
.v-enter{
  opacity: 0;
  transform: translateX(100%)

}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}

.app-con{
	padding-top: 40px;
	padding-bottom: 60px;
}
</style>


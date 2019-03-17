<template>
  <div id="home">
		<ul v-for="item in dataList">
			<div class="title">{{item.title}}</div>
			<li v-for="chilren in item.list" class="vue-1px-b">
				<router-link :to="chilren.router">
					{{chilren.name}}
					<i class="iconfont icon-mjiantou fr"></i>
				</router-link>
			</li>
		</ul>
  </div>
  	
</template>

<script>
	export default {
	  data () {
	    return {
	    	dataList:[
				{title:'基础组件',list:[
					{name:'tab',router:'/tab'},
					{name:'swiper',router:'/swiper'},
				]},
				{title:'弹窗组件',list:[
					{name:'dialog',router:'/dialog'},
					{name:'toast',router:'/toast'},
				]},
				{title:'滑动组件',list:[
					{name:'loadMore',router:'/loadMore'},
					{name:'headSwiper',router:'/headSwiper'}
				]}
			]
	    }
	  },
	  methods:{
	  },
	  created(){
				
	  },
	  activated(){
	  	
	  },
	  mounted(){
	  	
	  }
	}
</script>
<style lang="less" scoped>
	.title,li{
		line-height: .9rem;padding: 0 5%;
	}
	.title{
		background-color: #eee;
	}
</style>

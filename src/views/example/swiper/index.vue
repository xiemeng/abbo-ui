<template>
	<div id="invest">
		<swiper @change="change" :isSelect="true"></swiper>
	</div>
</template>


<script>
	import swiper from '@/components/template/swiper';
	export default {
	  components: {swiper},
	  data () {
	    return {
	    	
	    }
	  },
	  created(){
	  	
	  },
	  computed:{
	  },
	  activated(){
	  	
	  },
	  mounted(){
	  	
	  },
	  methods:{
	  		change(isChecked){
	  			console.log(isChecked)
	  			this.reversedMessage = '1111'
	  		},
	  },
	  watch: {
	   
	  },

	}
	
</script>


<style lang="less" scoped>
/*深度选择器了解一下*/
@deep:~'>>>';
#invest{
	.abbo-switch{
		color: red;
	}
	.abbo-switch:before{
		color: blue;
	}
	.abbo-switch:after{
		color: aquamarine;
	}
	
	
	.topWrap{
		@{deep} .tabItem{
			span{
				padding-bottom: 20px;
			}
		}
	}
}
</style>
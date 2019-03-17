<template>
	<div id="invest">
		<tab :dataList="dataList" :selectActive="'1'" @selectIndex="selectIndex"></tab>
	</div>
</template>


<script>
	import tab from '@/components/template/tab';
	export default {
	  components: {tab},
	  data () {
	    return {
	    	dataList:[
	    		{title:'学校'},
	    		{title:'家'},
	    		{title:'作业'},
	    		{title:'女人'}
	    	],
	    	message: 'Hello'
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
	  		selectIndex(index){
	  			console.log(index)
	  		}
	  },
	  watch: {
	   
	  },

	}
	
</script>


<style lang="less" scoped>

</style>
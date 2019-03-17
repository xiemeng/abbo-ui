<template>
	<div id="invest">
		<button type="primary" @click="xToast">
			我是中国人
		</button>
	</div>
</template>


<script>
	export default {
	  components: {},
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
	  		xToast(){
	  			this.$abbo.toast.show('我是中国人')
	  		}
	  },
	  watch: {
	   
	  },

	}
	
</script>


<style lang="less" scoped>

</style>
<template>
  <div>
    post
  </div>
</template>

<script>
	export default {
    name: "post",
    data() {
      return {
        post: {}
      }
    },
    created() {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        // this.axios.get(process.env.API_URL + 'post/' + this.$route.params.id).then(response => {
        //   if (response.data.code === 1000) {
        //     this.post = response.data.data
        //   }
        // })
      }
    }
  }
</script>

<style scoped>

</style>

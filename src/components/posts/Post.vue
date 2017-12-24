<template>
  <div>
    <top-nav></top-nav>

  </div>
</template>

<script>
  import TopNav from '../common/TopNav'

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
        this.axios.get(process.env.API_URL + 'post/' + this.$route.params.id).then(response => {
          if (response.data.code === 1000) {
            this.post = response.data.data
          }
        })
      }
    },
    components: {
      TopNav
    }
  }
</script>

<style scoped>

</style>

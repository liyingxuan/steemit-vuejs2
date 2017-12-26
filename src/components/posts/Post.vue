<template>
  <div class="container container-body">
    <input v-model="title" type="text" class="form-control" name="title" id="post-title" placeholder="Title">

    <div class="editor-name">Markdown Editor</div>

    <editor></editor>

    <input v-model="tags" type="text" class="form-control" name="tags" id="post-tags" placeholder="Tag (up to 5 tags), the first tag is your main category.">

    <button class="btn btn-outline-success btn-submit-post">Submit</button>
  </div>
</template>

<script>
  import Editor from './../common/Editor'

	export default {
    name: "post",
    data() {
      return {
        title: '',
        tags: ''
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
    },
    components: {
      Editor
    }
  }
</script>

<style scoped>
  #post-title {
    margin-bottom: 10px;
  }
  #post-tags {
    margin: 10px 0;
  }

  .editor-name {
    text-align: right;
    font-size: 0.8em;
    color: #cacaca;
  }

  .btn-submit-post {
    border-radius: 0;
    width: 120px;
    margin-bottom: 1em;
  }
</style>

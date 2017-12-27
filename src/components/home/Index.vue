<template>
  <div class="container container-body">
    <div class="row">
      <div class="col-lg-3">
        <tag-list></tag-list>
      </div>
      <div class="col-lg-9">
        <articles :articleList="blogList['data']"></articles>
      </div>
    </div>
  </div>
</template>

<script>
  import TagList from '../home/TagList'
  import Articles from './../common/Articles'
  import {mapState} from 'vuex'

  export default {
    name: 'Home',
    created() {
      this.getBlog()
    },
    watch: {
      '$route': 'getBlog'
    },
    computed: {
      ...mapState({
        blogList: state => state.Post.blogList,
        user: state => state.AuthUser
      })
    },
    methods: {
      getBlog() {
        if (this.user.authenticated) {
          if (this.$route.params.name === 'new') {
            this.$store.dispatch('newPostListLogged')
          } else if (this.$route.params.name === 'hot') {
            this.$store.dispatch('hotPostListLogged')
          } else {
            this.$store.dispatch('normalPostListLogged')
          }
        } else {
          if (this.$route.params.name === 'new') {
            this.$store.dispatch('newPostList')
          } else if (this.$route.params.name === 'hot') {
            this.$store.dispatch('hotPostList')
          } else {
            this.$store.dispatch('normalPostList')
          }
        }
      }
    },
    components: {
      TagList,
      Articles
    }
  }
</script>

<style>

</style>

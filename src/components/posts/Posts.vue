<template>
  <div class="container-fluid blog-content-all">
    <div class="row blog-content">
      <article class="post-full" v-if="blog != null">
        <div class="post-full-header">
          <h1 class="">{{blog.title}}</h1>

          <div class="article-header">
            <span>
              <img class="article-avatar" :src="demoAvatar">
            </span>
            <span class="article-author"><router-link to="">{{blog.author}}</router-link></span>
            <span class="article-honor">
              <i class="fa fa-trophy" aria-hidden="true"></i>
              {{(blog.honorVal == null ) ? 0 : 'article.honorVal'}}
            </span>
            <span class="article-time">{{blog.created_at}}</span>
          </div>
        </div>

        <div class="post-full-body">
          <div v-html="blog.content_html"></div>
        </div>

        <div class="tag_list">
          <a href="" class="btn">{{blog.tag}}</a>
        </div>

        <div class="article-footer">
          <span class="article-footer-time">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            {{blog.created_at}}
          </span>
          <span class="article-star">
            <router-link to="">
              <i class="fa" :class="[blog.myStar?'fa-star':'fa-star-o']" aria-hidden="true"></i>
              {{blog.starCount}}
            </router-link>
          </span>
          <span class="article-comment">
            <router-link to="">
              <i class="fa" :class="[blog.myComment?'fa-comment':'fa-comment-o']" aria-hidden="true"></i>
              {{blog.commentCount}}
            </router-link>
          </span>
          <span class="article-reply">
            <a href="" class="btn">Reply</a>
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

	export default {
    name: "post",
    created() {
      this.getBlog()
    },
    watch: {
      '$route': 'getBlog'
    },
    computed: {
      ...mapState({
        blog: state => state.Post.blog[0],
        user: state => state.AuthUser
      })
    },
    data() {
      return {
        demoAvatar: require('../../assets/img/avatar.png')
      }
    },
    methods: {
      getBlog() {
        if (this.user.authenticated) {
          this.$store.dispatch('oneBlogLogged', this.$route.params.id)
        } else {
          this.$store.dispatch('oneBlog', this.$route.params.id)
        }
      }
    }
  }
</script>

<style>
  .blog-content-all {
    background-color: white;
  }
  .blog-content img {
    max-width: 100%;
    text-align: center;
    margin:0 auto;
  }

  .post-full {
    margin: 20px auto 60px;
    border-bottom: 1px solid #eee;
    max-width: 50rem;
  }

  .post-full-header {
    border-bottom: 1px solid #eee;
    max-width: 50rem;
    margin: 0 auto;
  }
  .post-full-header > h1 {
    overflow: hidden;
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 200%;
    line-height: 1.1;
  }
  .article-header {
    padding: 10px 16px 10px;
  }
  .article-avatar {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  .article-author {
    margin-left: 10px;
    line-height: 50px;
    font-size: 16px;
    font-size: 1rem;
  }
  .article-author > a{
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  .article-honor {
    margin-left: 10px;
    font-weight: 100;
  }
  .article-time {
    margin-left: 10px;
    font-weight: normal;
    font-size: 14px;
    font-size: 0.875rem;
    color: #788187;
  }

  .post-full-body {
    margin: 20px 0;
  }

  .tag_list {
    margin-bottom: 0.5rem;
  }
  .tag_list > a {
    background: #fcfcfc;
    color: #333;
    border: 1px solid #eee;
    display: inline-block;
    margin: 0.1rem 0.4rem 0.1rem 0;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    transition: 0.2s all ease-in-out;
  }
  .tag_list > a:hover,
  .tag_list > a:active {
    background: #fcfcfc;
    color: #333;
    border: 1px solid #000;
  }

  .article-footer {
    padding: 16px 16px 16px 1px;
    font-size: 15px;
    font-size: 0.9375rem;
    color: #333;
    font-family: "Source Sans Pro", sans-serif;
  }
  .article-footer a {
    text-decoration: none;
    color: #333;
  }
  .article-star {
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
    padding: 0 16px;
  }
  .article-comment {
    margin-left: 16px;
  }
  .article-footer-time {
    margin-right: 16px;
  }

  .article-reply > a {
    float: right;
    background: #fcfcfc;
    color: #06D6A9;
    border: 1px solid #06D6A9;
    display: inline-block;
    /*margin: 0 auto;*/
    padding: 0.1rem 1rem;
    border-radius: 0.2rem;
    transition: 0.2s all ease-in-out;
  }
</style>

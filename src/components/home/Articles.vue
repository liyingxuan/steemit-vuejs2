<template>
  <article id="articles">
    <div class="articles-header"><strong>Articles</strong></div>

    <div class="article-container" v-for="article in articles">
      <div class="article-header">
        <span>
          <img class="article-avatar" :src="demoAvatar">
        </span>
        <span class="article-author"><router-link to="">{{article.author}}</router-link></span>
        <span class="article-honor">
          <i class="fa fa-trophy" aria-hidden="true"></i>
          {{article.honorVal}}
        </span>
        <span class="article-time">{{article.time}}</span>
      </div>

      <div class="article-content">
        <div class="article-first-img">
          <img src="../../assets/img/demo.jpeg">
        </div>
        <div class="article-content-block">
          <div class="article-title">
            <h2>
              <router-link :to="{name: 'posts', params: {id:article.id}}">{{article.title}}</router-link>
            </h2>
          </div>
          <div class="article-body">
            <router-link :to="{name: 'posts', params: {id:article.id}}">{{article.content}}</router-link>
          </div>
        </div>
      </div>

      <div class="article-footer">
        <span class="article-star">
          <router-link to="">
            <i class="fa" :class="[article.myStar?'fa-star':'fa-star-o']" aria-hidden="true"></i>
            {{article.starCount}}
          </router-link>
        </span>
        <span class="article-comment">
          <router-link to="">
            <i class="fa" :class="[article.myComment?'fa-comment':'fa-comment-o']" aria-hidden="true"></i>
            {{article.commentCount}}
          </router-link>
        </span>
      </div>
    </div>
  </article>
</template>

<script>
	export default {
    name: "articles",
    data() {
      return {
        demoAvatar: require('../../assets/img/avatar.png'),
        articles: [
          {
            id: '1',
            avatar: '', title: 'test title ',
            content: 'test conttennttest contenttest contenttest contenttest contenttest contenttest contenttest contenttest content',
            imgUrl: '',
            author: 'Author作者',
            honorVal: '1203',
            starCount: 123,
            commentCount: 234,
            time: '2017.12.21 10:50',
            myStar: true,
            myComment: false
          },
          {
            id: '2',
            avatar: '', title: 'test title ',
            content: 'test conttennttest contenttest contenttest contenttest contenttest contenttest contenttest contenttest content',
            imgUrl: '',
            author: '作者Author',
            honorVal: '2345',
            starCount: 345,
            commentCount: 456,
            time: '2017.12.21 10:50',
            myStar: false,
            myComment: true
          }
        ]
      }
    }
  }
</script>

<style scoped>
  #articles {
    background-color: white;
    border: 1px solid #eee;
    padding: 1.5em 2em;
    margin-bottom: 1em;
    box-shadow: 5px 5px 0 0 #06D6A9;
  }

  #articles:hover {
    background-color: white;
    box-shadow: 6px 6px 0 0 #06D6A9;
  }

  .articles-header {
    margin-bottom: 10px;
  }

  .article-container {
    list-style-type: none;
    margin-left: 0;
    margin-bottom: 40px;
    border: 1px solid #eee;
  }

  .article-header {
    padding: 10px 16px 10px;
    border-bottom: 1px solid #eee;
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
  .article-first-img {
    margin-bottom: 16px;
  }

  .article-content-block {
    padding-left: 1.1em;
    padding-right: 1.1em;
    margin-bottom: 16px;
  }
  .article-title > h2 {
    font-size: 18px;
    font-size: 1.125rem;
  }
  .article-title a {
    text-decoration: none;
    color: #333;
  }
  .article-body {
    width: auto;
    padding: 0.3rem 0.1rem 0.15rem;
    overflow: hidden;
    line-height: 1.4;
    text-overflow: ellipsis;
  }
  .article-body > a {
    text-decoration: none;
    color: #333;
  }
  .article-body > a:hover {
    outline-width: 0;
  }

  .article-footer {
    border-top: 1px solid #eee;
    padding: 16px;
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
    padding-right: 16px;
  }
  .article-comment {
    margin-left: 16px;
  }
</style>

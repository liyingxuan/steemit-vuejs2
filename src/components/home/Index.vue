<template>
  <div id="home">
    <top-nav></top-nav>

    <div class="container" style="margin-top: 75px;">
      <div class="row">
        <div class="col-lg-3">
          <tag-list></tag-list>
        </div>
        <div class="col-lg-9">
          <articles></articles>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import TopNav from '../common/TopNav'
  import TagList from '../home/TagList'
  import Articles from '../home/Articles'

  export default {
    name: 'Home',
    data() {
      return {
      }
    },
    components: {
      TopNav,
      TagList,
      Articles
    }
  }
</script>

<style>

</style>

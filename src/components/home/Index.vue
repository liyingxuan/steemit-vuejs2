<template>
  <div id="home">
    <div class="row">
      <div class="col-lg-3">
        <tag-list></tag-list>
      </div>
      <div class="col-lg-9">
        <articles></articles>
      </div>
    </div>
  </div>
</template>

<script>
  import TagList from '../home/TagList'
  import Articles from '../home/Articles'

  export default {
    name: 'Home',
    data() {
      return {
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

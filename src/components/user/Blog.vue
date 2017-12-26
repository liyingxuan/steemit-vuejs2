<template>
  <div class="blog">
    <profile></profile>
    <profile-top-nav></profile-top-nav>

    <div class="container blog-body">
      <articles></articles>
    </div>
  </div>
</template>

<script>
  import Profile from './Profile'
  import ProfileTopNav from './ProfileTopNav'
  import Articles from './../common/Articles'

  export default {
		name: "blog",
    components: {
      Profile,
      ProfileTopNav,
      Articles
    }
	}
</script>

<style scoped>
  .blog-body {
    margin-top: 30px;
  }
</style>

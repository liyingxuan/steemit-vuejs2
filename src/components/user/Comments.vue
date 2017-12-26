<template>
  <div class="comments">
    <profile></profile>
    <profile-top-nav></profile-top-nav>

    <div class="container">
      profile-comments
    </div>
  </div>
</template>

<script>
  import Profile from './Profile'
  import ProfileTopNav from './ProfileTopNav'

  export default {
		name: "comments",
    components: {
      Profile,
      ProfileTopNav
    }
	}
</script>

<style scoped>

</style>

<template>
  <div class="profile-settings">
    <profile></profile>
    <profile-top-nav></profile-top-nav>

    <div class="container">
      profile-settings
    </div>
  </div>
</template>

<script>
  import Profile from './Profile'
  import ProfileTopNav from './ProfileTopNav'

  export default {
		name: "profile-settings",
    components: {
      Profile,
      ProfileTopNav
    }
	}
</script>

<style scoped>

</style>

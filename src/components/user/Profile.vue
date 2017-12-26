<template>
  <div class="container-fluid container-fluid-body">
    <div class="user-profile-banner">
        {{this.username}}
    </div>
  </div>
</template>

<script>
	export default {
		name: "profile",
    data() {
		  return {
		    username: 'Tmp test data'
      }
    }
	}
</script>

<style scoped>
  .container-fluid {
    padding: 0;
  }
  .user-profile-banner {
    background-size: cover;
    background: #171F24 no-repeat 50% 50%;
    text-shadow: 1px 1px 4px black;
    min-height: 155px;
    color: white;
    text-align: center;
    padding: 30px;
  }

</style>

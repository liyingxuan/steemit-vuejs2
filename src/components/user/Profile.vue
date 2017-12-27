<template>
  <div class="container-fluid container-fluid-body">
    <div class="user-profile-banner">
      <div style="font-size: 1.5em;">{{user.name}}</div>
      <div style="margin-top: 15px; font-size: 0.8em; font-weight: lighter;">
        <i class="fa fa-calendar-check-o" aria-hidden="true"></i> Joined&nbsp;&nbsp;
        {{user.joinDate}}
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

	export default {
    name: "profile",
    created() {
      this.$store.dispatch('setAuthUser')
    },
    computed: {
      ...mapState({
        user: state => state.AuthUser
      })
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

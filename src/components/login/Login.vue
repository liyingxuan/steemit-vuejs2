<template>
  <form @submit.prevent="submitLogin">
    <fieldset>
      <legend class="register-title">Login</legend>

      <div class="alert alert-dismissible alert-warning" v-show="warningDisplay">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h5 class="alert-heading">Warning!</h5>
        <p class="mb-0">User name or password is incorrect.</p>
      </div>

      <div class="alert alert-dismissible alert-info" v-show="confirmDisplay">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h5 class="alert-heading">Heads up!</h5>
        Verification email has been sent to your email.
      </div>

      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><i class="fa fa-user-o" aria-hidden="true"></i></div>
          <input v-model="username"
                 v-validate data-vv-rules="required|min:4" data-vv-as="nickname or email"
                 :class="{'input': true, 'is-danger': errors.has('name') }"
                 type="text" class="form-control" name="name" placeholder="Enter nickname or email">
        </div>
        <small class="form-text text-muted err-message" v-show="errors.has('name')">{{ errors.first('name') }}</small>
      </div>

      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><i class="fa fa-key" aria-hidden="true"></i></div>
          <input :type="[isShowPassword ? 'text' : 'password']"
                 v-model="password"
                 v-validate data-vv-rules="required|min:6" data-vv-as="password"
                 class="form-control" name="password" placeholder="Enter password">
          <div class="input-group-addon" @click="viewPassword"><i class="fa" :class="[isShowPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true"></i></div>
        </div>
        <small class="form-text text-muted err-message" v-show="errors.has('password')">{{ errors.first('password') }}</small>
      </div>

    </fieldset>
    <button class="btn btn-outline-success btn-submit">Login</button>
  </form>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        warningDisplay: false,
        confirmDisplay: false,
        username: '',
        password: '',
        isShowPassword: false
      }
    },
    created() {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      viewPassword() {
        this.isShowPassword = !this.isShowPassword
      },
      submitLogin() {
        this.warningDisplay = false
        this.confirmDisplay = false

        this.$validator.validateAll().then(result => {
          if(result) {
            let formData = {
              username: this.username,
              password: this.password
            }
            this.$store.dispatch('loginRequest', formData).then(response => {
              this.$router.push({name:'profile'})
            }).catch(error => {
              this.warningDisplay = true
            })
          }
        })
      },
      fetchData() {
        this.username = this.$route.params.username
        if (typeof(this.username) !== 'undefined') {
          this.confirmDisplay = true
        }
      }
    }
  }
</script>

<style scoped>
  .register-title {
    margin: 30px 0;
  }
  .input-group-addon {
    width: 50px;
  }

  .btn-submit {
    border-radius: 0;
    width: 120px;
  }

  .err-message {
    color: #ff0264 !important;
  }
</style>

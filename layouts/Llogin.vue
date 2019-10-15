<template>
  <div>
    <div class="container-fluid border px-5">
      <div class="row mt-3">
        <router-link class="text-left colorOrange h3" to="/">
          [INSIDE]
        </router-link>
      </div>
    </div>
    <div class="container my-5 py-5">
      <div class="row justify-content-center">
        <b-form @submit.prevent="submit">
          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.email" required placeholder="Enter name" />
          </b-form-group>
          <b-form>
            <label for="text-password">Password</label>
            <b-input id="text-password" v-model="form.password" type="password" aria-describedby="password-help-block" />
          </b-form>
          <b-button type="submit" variant="primary" class="mt-2">
            Submit
          </b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        password: '',
        email: ''
      }
    }
  },
  methods: {
    ...mapMutations(['login']),
    submit () {
      const urlLogin = 'https://newsletters.academlo.com/api/v1/auth/login'
      axios
        .post(urlLogin, this.form)
        .then((response) => {
          const user = response.data
          this.login(user)
          this.$router.push('/dashboard')
        })
        .catch((er) => {
          alert('problemas en login')
        })
      // this.login(this.form)
      // alert('LOGIN EXITOSO')
    }
  }
}
</script>
<style scoped>
.colorOrange {
  color: orangered;
}
</style>

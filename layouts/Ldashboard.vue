<template>
  <div>
    <div class="container my-3">
      <div class="row justify-content-between">
        <router-link class="nav-link text-dark small text-muted" to="/">
          Logout
        </router-link>
        <h1 class>
          DASHBOARD
        </h1>
        <div>
          <p>Hola: <span>{{ user.name }}</span> </p>
        </div>
      </div>
    </div>
    <div class="container my-2">
      <div class="row justify-content-end">
        <button class="btn btn-primary">
          Nuevo Newsletter +
        </button>
      </div>
    </div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              Title
            </th>
            <th scope="col">
              Description
            </th>
            <th scope="col">
              Target
            </th>
            <th scope="col">
              Subscribed
            </th>
            <th scope="col">
              Image
            </th>
            <th scope="col">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="newsletter in news" :key="newsletter.id">
            <th scope="row">
              {{newsletter.title}}
            </th>
            <td>
              {{newsletter.description}}
            </td>
            <td>
              {{newsletter.target}}
            </td>
            <td>
              {{newsletter.subscribed}}
            </td>
            <td>
              {{newsletter.image}}
            </td>
            <td class="text-center">
              <a href="" class="iconColor">
                <i class="fas fa-pencil-alt"></i>
              </a>
              <a href="" class="iconColor">
                <i class="fas fa-trash"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  middleware: 'authenticated',
  computed: {
    ...mapState(['user', 'news'])
  }
}
</script>
<style scoped>
  .iconColor{
    color: orangered;
  }
</style>

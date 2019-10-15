<template>
  <div>
    <div class="container my-3">
      <div class="row justify-content-between">
        <router-link class="nav-link text-dark small text-muted" to="/">Logout</router-link>
        <h1 class>DASHBOARD</h1>
        <div>
          <p>
            Hola:
            <span>{{ user.name }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="container my-2">
      <div class="row justify-content-end">
        <!-- <button class="btn btn-primary">Nuevo Newsletter +</button> -->
        <b-button v-b-modal.modal-1 class="btn btn-primary">New Newsletter +</b-button>
        <!-- El modal -->
        <b-modal id="modal-1" title="New Newsletter" hide-footer>
          <!-- <p class="my-4">Hello from modal!</p> -->
          <label>Title
            <b-input
            v-model="newNews.title"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Titulo">
            </b-input>
          </label>
          <br>
          <label>Description
            <b-input
            v-model="newNews.description"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Description">
            </b-input>
          </label>
          <br>
          <label>Target
            <b-input
            v-model="newNews.target"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Terget">
            </b-input>
          </label>
          <br>
          <modal-footer>
            <b-button @click="newNewsletter" type="submit" variant="primary" class="mt-2">
            Submit
          </b-button>
          </modal-footer>
          <!-- fin del modal -->
        </b-modal>
      </div>
    </div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Target</th>
            <th scope="col">Subscribed</th>
            <th scope="col">Image</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="newsletter in news" :key="newsletter.id">
            <th scope="row">{{newsletter.title}}</th>
            <td>{{newsletter.description}}</td>
            <td>{{newsletter.target}}</td>
            <td>{{newsletter.subscribed}}</td>
            <td>{{newsletter.image}}</td>
            <td class="text-center">
              <a href="#" class="iconColor" >
                <i class="fas fa-pencil-alt"></i>
              </a>
              <a @click.prevent="delNewsletter(newsletter.id)" href="" class="iconColor">
                <i class="fas fa-trash"></i>
              </a>
              <!-- <button @click="delNewsletter(newsletter.id)">prueba</button> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  // props: ['ok-variant'],
  middleware: 'authenticated',
  data () {
    return {
      news: [],
      newNews: {
        title: '',
        description: '',
        target: ''
      },
      id: ''
    }
  },
  created () {
    this.getNewsDashboard()
  },
  computed: {
    ...mapState(['user', 'news'])
  },
  methods: {
    getNewsDashboard () {
      axios.get(process.env.apiUrl).then((response) => {
        this.news = response.data
      })
    },
    // crea la nueva noticia
    newNewsletter () {
      axios.post(process.env.apiUrl, this.newNews).then((response) => {
        alert('New news was created')
        this.getNewsDashboard()
      })
    },
    // borra la noticia
    delNewsletter (id) {
      axios.delete(process.env.apiUrl + '/' + id).then((response) => {
        alert('exito' + response)
        this.getNewsDashboard()
      })
        .catch(() => {
          alert('No se borro')
        })
    }
  }
}
</script>
<style scoped>
.iconColor {
  color: orangered;
}
</style>

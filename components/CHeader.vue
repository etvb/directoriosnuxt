<template>
  <div class="container-fluid border px-5">
    <div class="row mt-3">
      <div class="flex-grow-1">
      <router-link class="text-left colorOrange h3" to="/">
        [INSIDE]
      </router-link>
      </div>
      <!-- <div class="contenedorImg flex-grow-1 text-left">
                <img src="" alt="Logo">
      </div>-->
      <router-link class="mx-2 fas fa-search iconPerson" to="#" />
      <router-link class="mx-2 fas fa-user iconPerson" to="login" />
      <!-- <a class="mx-2 fas fa-search iconPerson" href="#" /> -->
      <!-- <a class="mx-2 fas fa-user iconPerson" href="/login" /> -->
    </div>
    <div class="row">
      <router-link class="nav-link text-dark small text-muted" to="/">ALL</router-link>
      <!-- <a href="#" class="nav-link text-dark small">ALL-2</a> -->
      <div v-for="tag in tags" :key="tag.slug" class="nav">
        <router-link class="nav-link text-dark small text-muted" :to="'/categori/'+tag.slug"> {{ tag.name }} </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      tags: []
    }
  },
  created () {
    this.getTags()
  },
  methods: {
    getTags () {
      axios('https://newsletters.academlo.com/api/v1/tags')
        .then((response) => {
          // eslint-disable-next-line no-console
          // console.log(response.data)
          this.tags = response.data
        })
        .catch(() => {
          alert('error en TAGS')
        })
    }
  }
}
</script>
<style scoped>
  .colorOrange{
    color:orangered;
  }
  .iconPerson {
    font-size: 2rem;
    color: orangered;
    padding: 0;
  }
</style>

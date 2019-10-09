<template>
  <div
    id="exampleModal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="card modal-dialog" role="document">
      <!-- <div class="rounded-circle"> -->
      <div class="modal-content">
        <div class="modal-header">
          <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
          <div class="contenedorImg ml-auto">
            <img :src="prueba.image" alt="foto" class="card-img-top rounded-circle">
          </div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="card-body">
          <h5 class="card-title w-100 text-center">
            {{ prueba.title }}
          </h5>
          <p class="card-text">
            {{ prueba.description }}
          </p>
        </div>
        <form @submit.prevent="suscribe">
          <div class="position-relative">
            <i class="position-absolute movido fas fa-envelope colorOrange" />
            <input v-model="formVote.email" class="w-100" type="text"  placeholder="          Your email">
          </div>
          <!-- <br> -->
          <button class="btn btn-primary mt-2 w-100">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  // no puedo pasar los props directos a la data, pero si los puedo pasar a mi metodo como this.prueba.id
  props: ['prueba'],
  data () {
    return {
      formVote: {
        email: ''
      }
    }
  },
  // created () {
  //   this.suscribe()
  // },
  methods: {
    suscribe () {
      const urlUser = 'https://newsletters.academlo.com/api/v1/users'
      const data = {
        email: this.formVote.email,
        newsletter_id: this.prueba.id
      }
      console.log(data)
      axios
        .post(urlUser, data)
        .then((response) => {
          console.log(response.data)
          alert('PERFECT')
        })
        .catch(() => {
          alert('Error al tratar de suscribirse')
        })
    }
  }
}
</script>

<style scoped>
.contenedorImg {
  width: 75px;
  height: 75px;
  /* border: 1px solid red; */
  border-radius: 50%;
  overflow: hidden;
}
.contenedorImg img {
  width: 100%;
}
.colorOrange {
  color: #fd7e14;
}
.movido {
  left: 15px;
  top: 7px;
}
</style>

<template>
  <div class="container">
    <div class="row">
      <!-- <CHeader /> -->
    </div>
    <div class="row justify-content-center mt-5">
      <h1 class="w-100 h3 text-center">
        Real news, curated by real humans
      </h1>
      <h6>Packed with the trends, news & links you need to be smart, informed, and ahead of the curve</h6>
    </div>
    <div class="row justify-content-between">
      <div v-for="newsInfo in suscribed" :key="newsInfo.id" class="col-sm-3 p-0 m-2">
        <CNews :pnew="newsInfo" @update="update" />
      </div>
      <CModal
        id="exampleModal"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        :prueba="infoNewsSelected"
      />
    </div>
    <div class="row justify-content-center">
      <h1 class="w-100 h3 text-center">
        Up-and-coming
      </h1>
      <h6>If these newsletters reach goal (or get a sponsorship), we´ll bring on expert writers and launch them. Vote for all your favorites:</h6>
    </div>
    <div class="row justify-content-between">
      <dir v-for="voteInfo in vote" :key="voteInfo.id" class="col-12 col-sm-3 p-0 m-2">
        <CNews :pnew="voteInfo" @update="update" />
      </dir>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import CNews from '~/components/CNews.vue'
import CModal from '~/components/CModal.vue'
export default {
  components: {
    CNews,
    CModal
  },
  data () {
    return {
      news: [],
      suscribed: [],
      vote: [],
      infoNewsSelected: []
    }
  },
  created () {
    this.getNews()
  },
  methods: {
    getNews () {
      axios
        .get('https://newsletters.academlo.com/api/v1/newsletters')
        .then((response) => {
          this.news = response.data
          this.suscribed = this.news.filter((arr) => {
            return arr.subscribed >= arr.target
          })
          this.vote = this.news.filter((arr) => {
            return arr.subscribed < arr.target
          })
        }).catch(() => {
          alert('Error en nwes')
        })
    },
    update (value) {
      this.infoNewsSelected = value
    }
    // getSuscribed () {
    //   this.suscribed = this.news.filter((arr) => {
    //     return arr.suscribed >= arr.target
    //   })
    // },
    // getVote () {
    //   this.vote = this.news.filter((arr) => {
    //     return arr.subscribed < arr.target
    //   })
    // }
  }
}
</script>

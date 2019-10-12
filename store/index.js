export const state = () => ({
  counter: 0,
  user: {},
  authenticated: false,
  news: []
})
export const mutations = {
  increment (state, news) {
    state.news = news
  },
  login (state, user) {
    state.user = user
    state.authenticated = true
  }
}

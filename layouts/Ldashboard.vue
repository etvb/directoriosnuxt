<template>
  <div>
    <div class="container my-3">
      <div class="row justify-content-between">
        <router-link class="nav-link text-dark small text-muted" to="/">
          Home
        </router-link>
        <h1 class>
          DASHBOARD
        </h1>
        <div>
          <p>Hola: <span>nombre</span> </p>
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
          <tr>
            <th scope="row">
              1
            </th>
            <td>
              Mark
            </td>
            <td>
              Otto
            </td>
            <td>
              @mdo
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {}
</script>

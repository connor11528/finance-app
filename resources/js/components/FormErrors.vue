<template>
  <div uk-grid v-if="errorBag">
    <div class="uk-width-1-1">
      <div class="uk-alert uk-alert-danger">
        <ul class="uk-list" v-if="errorBag.data.errors">
          <li v-for="(error, index) in errorBag.data.errors" :key="index" v-text="error[0]"></li>
        </ul>

        <span v-else v-text="errorBag.data.message"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['errorBag'],

    updated() {
      if (this.errorBag && this.errorBag.status >= 500) {
        this.errorBag.data.message = `Something happened on the server: Error ${this.errorBag.status}`;
      }
    }
  }
</script>

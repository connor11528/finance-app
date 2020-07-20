<template>
  <div uk-grid v-if="errorBag && errorBag.errors">
    <div class="uk-width-1-1">
      <div class="uk-alert uk-alert-danger">
        <ul class="uk-list">
          <li v-for="(error, index) in errorBag.errors" :key="index" v-text="error[0]"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['errorBag']
  }
</script>

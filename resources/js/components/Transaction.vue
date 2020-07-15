<template>
  <section class="transaction uk-border-rounded uk-margin-bottom">
    <section class="transaction--details">
      <div class="uk-flex-middle uk-flex-between" uk-grid>
        <div class="uk-width-3-4@s uk-width-1-1">
          <p class="name" v-text="name"></p>
          <span class="date" v-text="date"></span>
        </div>
        <div class="uk-width-expand@s uk-width-1-1 invisible">
          <ul class="uk-subnav">
            <li>
              <a @click="editTransaction">EDIT</a>
            </li>
            <li>
              <a>DELETE</a>
            </li>
          </ul>
        </div>
        <div class="uk-width-auto@s uk-width-1-1">
          <span class="amount positive" v-html="amount">
          </span>
        </div>
      </div>
    </section>

    <section class="uk-section uk-section-small transaction--edit" v-if="edit">
      <div uk-grid>
        <div class="uk-width-2-5">
          <label class="uk-form-label" for="label-edit">Label</label>
          <input class="uk-input uk-form-large" type="text" :value="name" id="label-edit">
        </div>
        <div class="uk-width-2-5">
          <label class="uk-form-label" for="date-edit">Date</label>
          <input class="uk-input uk-form-large" type="text" :value="date" id="date-edit">
        </div>
        <div class="uk-width-1-5">
          <label class="uk-form-label" for="amount-edit">Amount</label>
          <input class="uk-input uk-form-large" type="text" :value="amount" id="amount-edit">
        </div>
      </div>
    </section>

    <section class="uk-section uk-section-small transaction--submit" v-if="edit">
      <div class="uk-flex uk-flex-right">
        <button class="uk-button uk-button-large uk-button-light-blue" @click="editTransaction">Cancel</button>
        <button class="uk-button uk-button-large uk-button-primary">Update Entry</button>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
    }
  },
  props: {
    name: {
      type: String
    },
    amount: {
      type: Number
    },
    date: {
      type: String
    }
  },
  methods: {
    editTransaction() {
      this.edit = !this.edit;
    }
  },
}
</script>

<style>

</style>

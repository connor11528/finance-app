<template>
  <div id="modal-add-transaction" uk-modal>
    <div class="uk-modal-dialog">
      <div class="uk-modal-header">
        <h6 class="uk-modal-title">Add Balance Entry</h6>
      </div>
      <div class="uk-modal-body">
        <div uk-grid>
          <div class="uk-width-2-5">
            <label class="uk-form-label" for="label-add">Label</label>
            <input class="uk-input uk-form-large" type="text" v-model="name" id="label-add">
          </div>
          <div class="uk-width-2-5">
            <label class="uk-form-label" for="date-add">Date</label>
            <input class="uk-input uk-form-large" type="text" v-model="date" id="date-add">
          </div>
          <div class="uk-width-1-5">
            <label class="uk-form-label" for="amount-add">Amount</label>
            <input class="uk-input uk-form-large" type="text" v-model="amount" id="amount-add">
          </div>
        </div>
      </div>
      <div class="uk-modal-footer">
        <div class="uk-button-group">
          <button class="uk-button uk-button-large uk-button-light-blue uk-modal-close" type="button">Cancel</button>
          <button class="uk-button uk-button-large uk-button-primary" type="button">Save Entry</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      date: null,
      amount: null,
    }
  }
}
</script>

<style>

</style>

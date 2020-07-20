<template>
  <div uk-grid>
    <div class="uk-width-2-5">
      <label class="uk-form-label" :for="`label-${action}-${transaction.id}`">Label</label>
      <input
      class="uk-input uk-form-large"
      :class="{'uk-form-danger': errorBag && errorBag.errors.label}"
      type="text"
      v-model="transaction.label"
      :id="`label-${action}-${transaction.id}`"
      required>
    </div>

    <div class="uk-width-2-5">
      <label class="uk-form-label" :for="`date-${action}-${transaction.id}`">Date</label>
      <flat-pickr
      :config="flatPickrConfig"
      class="uk-input uk-form-large"
      :class="{'uk-form-danger': errorBag && errorBag.errors.date}"
      v-model="transaction.date"
      :id="`date-${action}-${transaction.id}`"
      required></flat-pickr>
    </div>

    <div class="uk-width-1-5">
      <label class="uk-form-label" :for="`amount-${action}-${transaction.id}`">Amount</label>
      <money
      class="uk-input uk-form-large"
      :class="{'uk-form-danger': errorBag && errorBag.errors.amount}"
      v-model.lazy="transaction.amount"
      v-bind="money"
      :id="`amount-${action}-${transaction.id}`"
      required></money>
    </div>
  </div>
</template>

<script>
import FlatPickr from 'vue-flatpickr-component';
import { Money } from 'v-money';

export default {
  data() {
    return {
      flatPickrConfig: {
        enableTime: true,
        altInput: true,
        altFormat: 'j M, Y \\a\\t G:i K'
      },
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '$',
        suffix: '',
        precision: 2,
        masked: false
      }
    }
  },

  props: ['action', 'transaction', 'errorBag'],

  components: {
    FlatPickr,
    Money
  }
}
</script>

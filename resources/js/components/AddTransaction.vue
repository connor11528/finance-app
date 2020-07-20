<template>
  <div id="modal-add-transaction" class="uk-modal-container" uk-modal="container: .balance-menu">
    <div class="uk-modal-dialog">
      <form @submit.prevent="submitTransaction">
        <div class="uk-modal-header">
          <h6 class="uk-modal-title">Add Balance Entry</h6>
        </div>

        <div class="uk-modal-body">
          <div uk-grid>
            <div class="uk-width-2-5">
              <label class="uk-form-label" for="label-add">Label</label>
              <input
              class="uk-input uk-form-large"
              type="text"
              v-model="transaction.label"
              id="label-add"
              required>
            </div>

            <div class="uk-width-2-5">
              <label class="uk-form-label" for="date-add">Date</label>
              <flat-pickr
              :config="flatPickrConfig"
              class="uk-input uk-form-large"
              v-model="transaction.date"
              id="date-add"
              ref="datepicker"
              required></flat-pickr>
            </div>

            <div class="uk-width-1-5">
              <label class="uk-form-label" for="amount-add">Amount</label>
              <money
              class="uk-input uk-form-large"
              v-model.lazy="transaction.amount"
              v-bind="money"
              id="amount-add"
              required></money>
            </div>
          </div>
        </div>

        <div class="uk-modal-footer">
          <div class="uk-button-group">
            <button class="uk-button uk-button-large uk-button-light-blue uk-modal-close" type="button">Cancel</button>
            <button class="uk-button uk-button-large uk-button-primary" type="submit">Save Entry</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import FlatPickr from 'vue-flatpickr-component';
  import { Money } from 'v-money';
  import ConfigMixin from '../mixins/ConfigMixin';

  export default {
    data() {
      return {
        transaction: {
          label: null,
          date: null,
          amount: 0
        }
      }
    },

    mixins: [ConfigMixin],

    components: {
      FlatPickr,
      Money
    },

    methods: {
      submitTransaction() {
        this.$http.post('transactions', this.transaction)
        .then(({data}) => {
          this.$emit('transaction-added', {data: data.transaction});

          this.$notify({message: 'Transaction was added!'});
        })
      },
    },

    mounted() {
      UIkit.util.on(this.$el, 'hidden', () => {
        this.transaction = {
          label: null,
          date: null,
          amount: 0,
        }
      });
    }
  }
</script>

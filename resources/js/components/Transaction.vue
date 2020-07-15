<template>
  <section class="transaction uk-border-rounded uk-margin-bottom">
    <section class="transaction--details">
      <div class="uk-flex-middle uk-flex-between" uk-grid>
        <div class="uk-width-expand@s uk-width-1-1">
          <p class="name" v-text="transaction.label"></p>
          <span class="date">{{ transaction.date | transactionDate }}</span>
        </div>

        <div class="uk-width-small@s uk-width-1-1 invisible">
          <ul class="uk-subnav">
            <li>
              <a @click="editTransaction">EDIT</a>
            </li>
            <li>
              <a @click="deleteTransaction">DELETE</a>
            </li>
          </ul>
        </div>

        <div class="uk-width-auto@s uk-width-1-1">
          <span
          class="amount"
          :class="prettyFormat(transaction.amount).sign"
          v-html="prettyFormat(transaction.amount).value">
          </span>
        </div>
      </div>
    </section>

    <section class="uk-section uk-section-small transaction--edit" v-if="edit">
      <div uk-grid>
        <div class="uk-width-2-5">
          <label class="uk-form-label" for="label-add">Label</label>
          <input
          class="uk-input uk-form-large"
          type="text"
          v-model="transaction.label"
          id="label-add">
        </div>

        <div class="uk-width-2-5">
          <label class="uk-form-label" for="date-add">Date</label>
          <flat-pickr
          :config="flatPickrConfig"
          class="uk-input uk-form-large"
          v-model="transaction.date"
          id="date-add"
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
    </section>

    <section class="uk-section uk-section-small transaction--submit" v-if="edit">
      <div class="uk-flex uk-flex-right">
        <button class="uk-button uk-button-large uk-button-light-blue" @click="editTransaction">Cancel</button>
        <button class="uk-button uk-button-large uk-button-primary" @click="updateTransaction">Update Entry</button>
      </div>
    </section>
  </section>
</template>

<script>
  import FlatPickr from 'vue-flatpickr-component';
  import { Money } from 'v-money'
  import CurrencyMixin from '../mixins/currency';

  export default {
    data() {
      return {
        edit: false,
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

    mixins: [CurrencyMixin],

    props: {
      transaction: {
        type: Object
      }
    },

    components: {
      FlatPickr,
      Money
    },

    methods: {
      editTransaction() {
        this.edit = !this.edit;
      },

      updateTransaction() {
        this.$http
        .put(`transactions/${this.transaction.id}`, this.transaction)
        .then(({data}) => {
          this.editTransaction();

          this.$emit('transaction-edited', {transaction: data.transaction});
        })
      },

      deleteTransaction() {
        this.$http
        .delete(`transactions/${this.transaction.id}`)
        .then(({data}) => this.$emit('transaction-deleted', {transaction: data.transaction}));
      }
    },
  }
</script>

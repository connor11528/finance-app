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

    <section class="transaction--edit" v-show="edit">
      <form @submit.prevent="updateTransaction">
        <section class="uk-section uk-section-small">
          <div uk-grid>
            <div class="uk-width-2-5">
              <label class="uk-form-label" :for="`label-add-${transaction.id}`">Label</label>
              <input
              class="uk-input uk-form-large"
              type="text"
              v-model="transaction.label"
              :id="`label-add-${transaction.id}`"
              required>
            </div>

            <div class="uk-width-2-5">
              <label class="uk-form-label" :for="`date-add-${transaction.id}`">Date</label>
              <flat-pickr
              :config="flatPickrConfig"
              class="uk-input uk-form-large"
              v-model="transaction.date"
              :id="`date-add-${transaction.id}`"
              required></flat-pickr>
            </div>

            <div class="uk-width-1-5">
              <label class="uk-form-label" :for="`amount-add-${transaction.id}`">Amount</label>
              <money
              class="uk-input uk-form-large"
              v-model.lazy="transaction.amount"
              v-bind="money"
              :id="`amount-add-${transaction.id}`"
              required></money>
            </div>
          </div>
        </section>

        <footer class="uk-section uk-section-small">
          <div class="uk-flex uk-flex-right">
            <button class="uk-button uk-button-large uk-button-light-blue" @click="editTransaction">Cancel</button>
            <button class="uk-button uk-button-large uk-button-primary" type="submit">Update Entry</button>
          </div>
        </footer>
      </form>
    </section>
  </section>
</template>

<script>
  import FlatPickr from 'vue-flatpickr-component';
  import { Money } from 'v-money';
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
          this.edit = false;
          this.$emit('transaction-edited', {transaction: data.transaction});

          this.$notify({message: 'Transaction was updated!'});
        })
      },

      deleteTransaction() {
        UIkit.modal.confirm('Are you sure you want to delete this transaction?', {
          'cls-panel': 'something'
        })
        .then(() => {
          this.$http
          .delete(`transactions/${this.transaction.id}`)
          .then(({data}) => {
            this.$emit('transaction-deleted', {transaction: data.transaction});

            this.$notify({message: 'Transaction was deleted!'});
          });
        }, () => {
          //
        });
      }
    }
  }
</script>

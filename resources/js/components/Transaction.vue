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
          <transaction-form
          v-if="edit"
          :action="'update'"
          :transaction="transaction"
          :error-bag="errorBag" />

          <form-errors :error-bag="errorBag" />
        </section>

        <footer class="uk-section uk-section-small">
          <div class="uk-flex uk-flex-right">
            <button class="uk-button uk-button-large uk-button-light-blue" type="button" @click="editTransaction">Cancel</button>
            <button class="uk-button uk-button-large uk-button-primary" type="submit">Update Entry</button>
          </div>
        </footer>
      </form>
    </section>
  </section>
</template>

<script>
  import FormErrors from './FormErrors';
  import TransactionForm from './TransactionForm';
  import CurrencyMixin from '../mixins/CurrencyMixin';

  export default {
    data() {
      return {
        edit: false,
        errorBag: null
      }
    },

    mixins: [
      CurrencyMixin
    ],

    props: {
      transaction: {
        type: Object
      }
    },

    components: {
      FormErrors,
      TransactionForm
    },

    methods: {
      editTransaction() {
        this.edit = !this.edit;
      },

      updateTransaction() {
        this.$http
        .put(`transactions/${this.transaction.id}`, this.transaction)
        .then(({data}) => {
          this.$emit('transaction-edited', {transaction: data.transaction});

          this.$notify({message: 'Transaction was updated!'});

          this.edit = false;
        })
        .catch(({response}) => {
          this.errorBag = response
        });
      },

      deleteTransaction() {
        UIkit.modal.confirm('Are you sure you want to delete this transaction?')
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

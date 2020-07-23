<template>
  <div id="modal-add-transaction" class="uk-modal-container" uk-modal="container: .balance-menu">
    <div class="uk-modal-dialog">
      <form @submit.prevent="submitTransaction">
        <div class="uk-modal-header">
          <h6 class="uk-modal-title">Add Balance Entry</h6>
        </div>

        <div class="uk-modal-body">
          <transaction-form
          :action="'add'"
          :transaction="transaction"
          :error-bag="errorBag" />

          <form-errors :error-bag="errorBag"></form-errors>
        </div>

        <div class="uk-modal-footer">
          <div class="uk-button-group uk-flex uk-flex-right">
            <button class="uk-button uk-button-large uk-button-light-blue uk-modal-close" type="button">Cancel</button>
            <button class="uk-button uk-button-large uk-button-primary uk-margin-left" type="submit">Save Entry</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import FormErrors from './FormErrors'
  import TransactionForm from './TransactionForm';

  export default {
    data() {
      return {
        errorBag: null,
        transaction: {
          label: null,
          date: null,
          amount: 0
        }
      }
    },

    components: {
      FormErrors,
      TransactionForm
    },

    methods: {
      submitTransaction() {
        this.$http.post('transactions', this.transaction)
        .then(({data}) => {
          this.errorBag = null;

          this.$emit('transaction-added', {data: data.transaction});

          this.$notify({message: 'Transaction was added!'});
        })
        .catch(({response}) => {
          this.errorBag = response
        });
      }
    },

    mounted() {
      UIkit.util.on(this.$el, 'hidden', () => {
        this.errorBag = null;
        this.transaction = {
          label: null,
          date: null,
          amount: 0,
        }
      });
    }
  }
</script>

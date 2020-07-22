<template>
  <section class="balance-menu uk-background-secondary uk-section-small">
    <div class="uk-container">
      <div class="uk-flex-middle" uk-grid>
        <div class="uk-width-expand@s uk-width-1-1 balance-actions">
          <div class="uk-flex uk-flex-middle">
            <p>Your Balance</p>

            <button
            class="uk-button uk-button-primary add-button"
            :disabled="disabled"
            uk-toggle="target: #modal-add-transaction">
              <img src="/img/add.svg">
              Add Entry
            </button>

            <button
            class="uk-button uk-button-primary import-button"
            :disabled="disabled"
            uk-toggle="target: #modal-import-transactions">
              <img src="/img/import.svg">
              Import CSV
            </button>
          </div>
        </div>

        <div class="uk-width-auto@s uk-width-1-1 balance-details">
          <small>TOTAL BALANCE</small>
          <p
          class="balance"
          :class="prettyFormat(totalBalance).sign"
          v-html="prettyFormat(totalBalance).value"></p>
        </div>
      </div>
    </div>

    <add-transaction
    v-on="$listeners" />

    <import-transactions
    @transaction-import="disableActions"
    v-on="$listeners" />
  </section>
</template>

<script>
  import AddTransaction from './AddTransaction';
  import ImportTransactions from './ImportTransactions';
  import CurrencyMixin from '../mixins/CurrencyMixin';

  export default {
    data() {
      return {
        disabled: false
      }
    },

    watch: {
      importing(status) {
        this.disabled = status;
      }
    },

    props: ['totalBalance', 'importing'],

    components: {
      AddTransaction,
      ImportTransactions
    },

    mixins: [CurrencyMixin],

    methods: {
      disableActions() {
        this.disabled = true;
      }
    }
  }
</script>

<template>
  <section class="balance-menu uk-background-secondary uk-section-small">
    <div class="uk-container">
      <div class="uk-flex-middle" uk-grid>
        <div class="uk-width-expand@s uk-width-1-1 balance-actions">
          <div class="uk-flex uk-flex-middle">
            <p>Your Balance</p>

            <button class="uk-button uk-button-primary add-button" @click="addTransaction">
              <img src="/img/add.svg">
              Add Entry
            </button>

            <button class="uk-button uk-button-primary import-button">
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
    v-on="$listeners"
    @transaction-added="closeModal"></add-transaction>
  </section>
</template>

<script>
  import AddTransaction from './AddTransaction';
  import CurrencyMixin from '../mixins/currency';

  export default {
    props: ['totalBalance'],

    components: {AddTransaction},

    mixins: [CurrencyMixin],

    methods: {
      addTransaction() {
        UIkit.modal('#modal-add-transaction').show();
      },

      closeModal() {
        UIkit.modal('#modal-add-transaction').hide();
      }
    }
  }
</script>

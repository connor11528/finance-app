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
          <p class="balance" v-html="prettyFormat(172500)"></p>
        </div>
      </div>
    </div>

    <add-transaction></add-transaction>
  </section>
</template>

<script>
import '../mixins/currencyDisplay';
import currencyDisplay from '../mixins/currencyDisplay';
import AddTransaction from './AddTransaction';

export default {
  mixins: [currencyDisplay],
  components: {AddTransaction},
  methods: {
    addTransaction() {
      UIkit.modal('#modal-add-transaction').show();
    }
  }
}
</script>

<style>

</style>

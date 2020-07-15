<template>
  <section class="transaction-list uk-section">
    <div class="uk-container">
      <div class="uk-child-width-1-1" uk-grid>
        <section class="transaction-group" v-for="(group, date) in groups" :key="date">
          <header class="uk-flex uk-flex-between uk-flex-middle uk-margin-bottom">
            <span class="date">
              {{ group.date | groupDate }}
            </span>

            <span
            class="balance"
            :class="prettyFormat(group.balance).sign"
            v-html="prettyFormat(group.balance).value">
            </span>
          </header>

          <section>
            <transaction
            v-for="transaction in group.transactions"
            :key="transaction.id"
            :transaction="transaction"
            v-on="$listeners" />
          </section>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import Transaction from './Transaction';
import CurrencyMixin from '../mixins/currency';

export default {
  data() {
    return {
      groupValue: []
    }
  },

  props: ['groups'],

  mixins: [CurrencyMixin],

  components: {
    Transaction
  },

  updated() {

  }
}
</script>

<style>

</style>

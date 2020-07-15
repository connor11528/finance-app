<template>
  <section class="transaction-list uk-section">
    <div class="uk-container">
      <div class="uk-child-width-1-1" uk-grid>
        <section class="transaction-group">
          <header class="uk-flex uk-flex-between uk-flex-middle uk-margin-bottom">
            <span class="date">
              Today
            </span>

            <span class="balance positive" v-text="'50.00'">
            </span>
          </header>
          <section>
            <transaction
            v-for="transaction in transactions"
            :key="transaction.id"
            :name="transaction.name"
            :amount="transaction.amount"
            :date="transaction.date"
            />
          </section>
        </section>

        <section class="transaction-group">
          <header class="uk-flex uk-flex-between uk-flex-middle uk-margin-bottom">
            <span class="date">
              Yesterday
            </span>

            <span class="balance negative" v-text="'50.00'">
            </span>
          </header>
          <section>
            <transaction
            v-for="transaction in transactions"
            :key="transaction.id"
            :name="transaction.name"
            :amount="transaction.amount"
            :date="transaction.date"
            />
          </section>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import Transaction from './Transaction';

export default {
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "Rent",
          amount: 600.35,
          date: '20 May, 2020 at 10:55 PM'
        },
        {
          id: 2,
          name: 'Power Bill',
          amount: 85.10,
          date: '20 May, 2020 at 10:55 PM'
        },
      ]
    }
  },

  components: {
    Transaction
  }
}
</script>

<style>

</style>

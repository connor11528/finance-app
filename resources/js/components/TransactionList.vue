<template>
  <section class="transaction-list uk-section">
    <div class="uk-container">
      <div class="uk-child-width-1-1" uk-grid>
        <section class="transaction-group" v-for="(group, date) in groups" :key="date">
          <header class="uk-flex uk-flex-between uk-flex-middle uk-margin-bottom">
            <span class="date">
              {{ date }}
            </span>

            <span class="balance positive" v-text="'50.00'">
            </span>
          </header>
          <section>
            <transaction
            v-for="transaction in group"
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

export default {
  props: ['groups'],

  components: {
    Transaction
  }
}
</script>

<style>

</style>

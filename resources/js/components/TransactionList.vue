<template>
  <section class="transaction-list uk-section">
    <div class="uk-container">
      <div class="uk-child-width-1-1" uk-grid v-if="groups.length">
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

        <section class="uk-flex uk-flex-center" v-if="pagination.last_page > 1">
          <button
          class="uk-button uk-button-small uk-button-default"
          @click="paginate(pagination.current_page - 1)"
          :disabled="onFirstPage">
            <span uk-icon="chevron-left"></span>Prev
          </button>

          <button class="uk-button uk-button-small uk-button-default" disabled>Page {{ pagination.current_page }}</button>

          <button
          class="uk-button uk-button-small uk-button-default"
          @click="paginate(pagination.current_page + 1)"
          :disabled="!hasMorePages">
            Next<span uk-icon="chevron-right"></span>
          </button>
        </section>
      </div>

      <div class="uk-child-width-1-1" uk-grid v-else>
        <div>
          <div class="uk-flex-center uk-child-width-1-2" uk-grid>
            <div class="uk-alert-primary uk-border-radius uk-text-center" uk-alert>
                <p>No Transactions Found...</p>
            </div>
          </div>
        </div>
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

  props: ['pagination', 'groups'],

  mixins: [CurrencyMixin],

  computed: {
    onFirstPage() {
      return this.pagination.current_page === 1;
    },

    hasMorePages() {
      return this.pagination.current_page < this.pagination.last_page;
    }
  },

  components: {
    Transaction
  },

  methods: {
    paginate(page) {
      this.$emit('paginate-list', {page});
    }
  },

  updated() {

  }
}
</script>

<style>

</style>

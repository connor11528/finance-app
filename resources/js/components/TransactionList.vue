<template>
  <section class="transaction-list uk-section">
    <div class="uk-container">
      <div class="uk-child-width-1-1 uk-animation-fade" uk-grid v-if="hasTransactions">
        <section class="transaction-group" v-for="(group, date) in groups.data" :key="date">
          <header class="uk-flex uk-flex-between uk-flex-middle uk-margin-bottom">
            <span class="date">
              {{ date | groupDate }}
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

        <section class="uk-flex uk-flex-center uk-flex-middle pagination" v-if="groups.last_page > 1">
          <button
          class="uk-button uk-button-small uk-button-default"
          @click="paginate(groups.current_page - 1)"
          :disabled="onFirstPage">
            <span uk-icon="chevron-left"></span>Prev
          </button>

          <span class="page-no">Page {{ groups.current_page }}</span>

          <button
          class="uk-button uk-button-small uk-button-default"
          @click="paginate(groups.current_page + 1)"
          :disabled="!hasMorePages">
            Next<span uk-icon="chevron-right"></span>
          </button>
        </section>
      </div>

      <div class="uk-child-width-1-1" uk-grid v-if="!hasTransactions && !loading">
        <div>
          <div class="uk-flex-center uk-child-width-1-2" uk-grid>
            <div class="uk-alert-primary uk-border-radius uk-text-center" uk-alert>
              <p>No Entries Found</p>
            </div>
          </div>
        </div>
      </div>

      <div class="uk-child-width-1-1" uk-grid v-if="loading">
        <div>
          <div class="uk-flex-center uk-child-width-1-2" uk-grid>
            <div class="uk-alert-primary uk-border-radius uk-text-center" uk-alert>
              <div class="uk-flex uk-flex-middle uk-flex-center"><div class="uk-margin-left spinner blue"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Transaction from './Transaction';
  import CurrencyMixin from '../mixins/CurrencyMixin';

  export default {
    props: ['groups'],

    mixins: [CurrencyMixin],

    computed: {
      hasTransactions() {
        return this.groups.total;
      },

      onFirstPage() {
        return this.groups.current_page === 1;
      },

      hasMorePages() {
        return this.groups.current_page < this.groups.last_page;
      },

      loading() {
        return !this.groups.hasOwnProperty('data');
      }
    },

    components: {
      Transaction
    },

    methods: {
      paginate(page) {
        this.$emit('paginate-list', {page});
      }
    }
  }
</script>

<template>
  <div>
    <nav-bar />
    <balance-menu
    @transaction-added="getDashboardData"
    @transaction-import="transactionsImporting"
    :total-balance="totalBalance"
    :importing="importing.status" />

    <section class="uk-section uk-section-small uk-padding-remove-bottom" v-if="importing.status">
      <div class="uk-container">
        <div uk-grid>
          <div class="uk-width-1-1">
            <div class="uk-alert-warning" uk-alert>
              <div class="uk-flex uk-flex-center uk-flex-middle">
                <span class="uk-margin-small-right spinner"></span>
                We're importing {{ importing.rows }} balance entries. Sit tight.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <transaction-list
    @transaction-deleted="getDashboardData"
    @transaction-edited="getDashboardData"
    @paginate-list="paginateList"
    :groups="groups" />
  </div>
</template>

<script>
  import NavBar from './NavBar';
  import BalanceMenu from './BalanceMenu';
  import TransactionList from './TransactionList';

  export default {
    data() {
      return  {
        totalBalance: 0,
        statusCheck: {},
        importing: {
          status: false
        },
        groups: {},
      }
    },

    components: {
      NavBar,
      BalanceMenu,
      TransactionList
    },

    watch: {
      'importing.status': function(status) {
        if (status === true) {
          this.statusCheck = setInterval(() => {
            this.getImportStatus();
          }, 3000);
        } else {
          this.$notify({message: 'Transactions were imported!'});

          clearInterval(this.statusCheck);

          this.groups = {};

          this.refreshDashboard();
        }
      }
    },

    methods: {
      getDashboardData() {
        this.$http.get('dashboard').then(({data}) => {
          this.totalBalance = parseFloat(data.total_balance);

          this.importing.status = data.import_status;
        });
      },


      getTransactions(page = this.groups?.meta?.current_page || 1) {
        this.groups = {};

        this.$http.get('transactions', {
          params: {
            page
          }
        }).then(({data}) => {
          this.groups = data
        });
      },

      refreshDashboard() {
        this.getDashboardData();

        this.getTransactions();
      },

      transactionsImporting(data) {
        this.importing = {
          status: true,
          rows: data.rows
        }
      },

      getImportStatus() {
        this.$http.get('/import-status')
        .then(({data}) => {
          this.importing.status = data.import_status
        })
      },

      paginateList(data) {
        this.getTransactions(data.page);
      }
    },

    created() {
      this.refreshDashboard();
    }
  }
</script>

<template>
  <div>
    <nav-bar />
    <balance-menu
    @transaction-added="getDashboardData"
    :total-balance="totalBalance" />

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
        groups: []
      }
    },

    components: {
      NavBar,
      BalanceMenu,
      TransactionList
    },

    methods: {
      getTotalBalance() {
        this.$http.get('dashboard').then(({data}) => {
          this.totalBalance = parseFloat(data.total_balance);
        });
      },

      getTransactions(page = 1) {
        this.$http.get('transactions', {
          params: {
            page
          }
        }).then(({data}) => {
          this.groups = data
        });
      },

      getDashboardData() {
        this.getTotalBalance();
        this.getTransactions();
      },

      paginateList(data) {
        this.getTransactions(data.page);
      }
    },

    created() {
      this.getDashboardData();
    }
  }
</script>

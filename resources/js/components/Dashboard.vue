<template>
  <div>
    <nav-bar />
    <balance-menu
    @transaction-added="getDashboardData"
    :total-balance="totalBalance" />

    <transaction-list
    @transaction-deleted="getDashboardData"
    @transaction-edited="getDashboardData"
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

    getTransactions() {
      this.$http.get('transactions').then(({data}) => {
        this.groups = data.groups;
      });
    },

    getDashboardData() {
      this.getTotalBalance();
      this.getTransactions();
    }
  },

  mounted() {
    this.getDashboardData();
  }
}
</script>

<template>
  <div>
    <nav-bar />
    <balance-menu
    @transaction-added="getTotalBalance"
    :total-balance="totalBalance" />
    <transaction-list />
  </div>
</template>

<script>
import NavBar from './NavBar';
import BalanceMenu from './BalanceMenu';
import TransactionList from './TransactionList';

export default {
  data() {
    return  {
      totalBalance: 0
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
  },

  mounted() {
    this.getTotalBalance();
  }
}
</script>

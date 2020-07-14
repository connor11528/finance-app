<template>
  <div>
    <nav-bar />
    <balance-menu />
    <transaction-list />
  </div>
</template>

<script>
import NavBar from './NavBar';
import BalanceMenu from './BalanceMenu';
import TransactionList from './TransactionList';

export default {
  components: {
    NavBar,
    BalanceMenu,
    TransactionList
  }
}
</script>

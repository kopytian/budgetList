<template>
  <div class="total-value" :class="{ 'negative-state': isNegativeBalance, 'positive-state': isPositiveBalance}">
    Balance: {{total}}
  </div>
</template>

<script>
export default {
  name: 'Total balance',
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isNegativeBalance() {
      return this.total < 0;
    },
    isPositiveBalance() {
      return this.total > 0;
    }
  },
}
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
}
.negative-state{
  color: red;
}
.positive-state{
  color: green;
}
</style>

<template>
  <div id="App">
    <Form @submitForm="onFormSubmit"/>
    <TotalBalance :total = "totalBalance"/>
    <BudgetList :list="list" :sortedType="sortedType" :types="types"
      @sortItems="sortItems" @deleteItem="onDeleteItem"
    />
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList.vue';
import TotalBalance from '@/components/TotalBalance.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form
  },
  data: () => ({
    list: {
      1: {
        type: 'income',
        value: 100,
        comment: 'Some comment',
        id: 1
      },
      2: {
        type: 'outcome',
        value: -10,
        comment: 'Some outcome comment',
        id: 2
      },
    },
    types: {
      all: 'All items',
      income: 'Only income',
      outcome: 'Only outcome',
    },
    sortedType: 'all',
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0);
    }
  },
  methods: {
    onDeleteItem(id) {
      delete this.list[id];
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      };
      this.list[newObj.id] = newObj;
    },
    sortItems(type) {
      this.sortedType = type;
    },
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

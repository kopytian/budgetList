<template>
  <div class="budget-list-wrap">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ header }}</span>
        </div>
      </template>
      <template v-if="!isEmpty">
        <budgetListSort :sortedType="sortedType" :types="types" @sortItems="sortItems" />
        <div v-for="(item, prop) in filteredList" :key="prop">
          <BudgetListItem :item="filteredList[prop]" @deleteItem="deleteItem" />
        </div>
      </template>
      <el-alert v-else :title="emptyTitle" type="info" :closable="false" />
    </el-card>
  </div>
</template>

<script>
import BudgetListItem from './BudgetListItem.vue';
import BudgetListSort from './BudgetListSort.vue';

export default {
  name: 'BudgetList',
  components: {
    BudgetListItem,
    BudgetListSort
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List',
  }),
  props: {
    list: {
      type: Object,
      default: () => ({})
    },
    sortedType: {
      type: String,
      default: () => ('')
    },
    types: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
    filteredList() {
      switch (this.sortedType) {
        case 'income':
          return this.filterList('income', this.list);
        case 'outcome':
          return this.filterList('outcome', this.list);
        default:
          return this.list;
      }
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
    sortItems(type) {
      this.$emit('sortItems', type);
    },
    filterList(nameType, list) {
      return Object.fromEntries(Object.entries(list)
        .filter(([, value]) => (value.type === nameType)));
    }
  }
}
</script>

<style scoped>
  .budget-list-wrap{
    width: 500px;
    margin: auto;
  }
</style>
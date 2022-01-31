<template>
  <div class="list-item">
    <template v-if="isIncomeType">
      <el-icon :size="20">
        <top />
      </el-icon>
    </template>
    <template v-else-if="isOutcomeType">
      <el-icon :size="20">
        <bottom />
      </el-icon>
    </template>
    <span class="item-comment">{{item.comment}}</span>
    <span class="item-value"
      :class="{
        'outcome-type-value': isOutcomeType,
        'income-type-value': isIncomeType}"
      >
      {{item.value}}
    </span>
    <el-popconfirm
      confirm-button-text="Yes"
      cancel-button-text="No"
      icon-color="red"
      title="Are you sure to delete this item?"
      @confirm="confirmEvent(item.id)"
       @cancel="cancelEvent"
      >
      <template #reference>
        <el-button class="button" type="danger" size="mini">Delete</el-button>
      </template>
    </el-popconfirm>
  </div>
</template>

<script>

export default {
  name: 'BudgetListItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
    confirmEvent(id) {
      this.deleteItem(id);
    },
    cancelEvent() {
    }
  },
  computed: {
    isOutcomeType() {
      return this.item.type === 'outcome';
    },
    isIncomeType() {
      return this.item.type === 'income';
    },
  }
}
</script>

<style scoped>
  .list-item{
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }
  .item-value{
    font-weight: bold;
    margin-left: auto;
    margin-right: 20px;
  }
  .outcome-type-value{
    color: red;
  }
  .income-type-value{
    color: green;
  }
</style>
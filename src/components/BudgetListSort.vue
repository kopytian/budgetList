<template>
  <div class="sorting">
    <el-button
     v-for="(type, index) of types"
     :key="index"
     @click="currentSortedType = index, changeSortedType(currentSortedType)"
      class="button" size="mini" type="default"
      :class="[(currentSortedType === index) ? 'active-button' : '']"
    >
      {{ type }}
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSortedType: 'all'
    }
  },
  props: {
    types: {
      type: Object,
      default: () => ({})
    },
    sortedType: {
      type: String,
      default: 'all',
    }
  },
  methods: {
    changeSortedType(type) {
      this.$emit('sortItems', type);
    }
  }
}
</script>

<style scoped>
.sorting{
  text-align: left;
  padding: 15px;
}
.active-button{
  background-color: #909399;
}
.active-button:active,
.active-button:hover,
.active-button:visited{
  color: #606266;
  border-color: #909399;
}
</style>
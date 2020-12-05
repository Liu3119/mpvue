<template>
  <div class="tag-group-wrapper">
    <div class="tag-group-header">
      <div class="header-text">{{ headerText }}</div>
      <div class="header-btn" @click="onBtnClick">{{ btnText }}</div>
    </div>
    <div class="tag-group">
      <div class="tag-group-inner" v-for="(text, index) of value" :key="index">
        <tag :text="text" @onTagClick="onTagClick(text, index)" />
      </div>
    </div>
  </div>
</template>
<script>
import Tag from './Tag.vue'
export default {
  components: { Tag },
  props: {
    headerText: String,
    btnText: String,
    value: Array
  },
  methods: {
    onTagClick (text, index) {
      this.$emit('onTagClick', text, index)
    },
    onBtnClick () {
      this.$emit('onBtnClick')
    }
  }
}
</script>
<style lang="scss" scoped>
.tag-group-wrapper {
  max-width: 100%;
  margin-top: 35px;
  .tag-group-header {
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 20px;
    .header-text {
      color: #333333;
    }
    .header-btn {
      color: #3696ef;
    }
  }
  .tag-group {
    max-width: 100%;
    box-sizing: border-box;
    padding: 4px 16px 0;
    display: flex;
    flex-flow: row wrap;
    .tag-group-inner {
      max-width: 100%;
      box-sizing: border-box;
      padding: 12px 12px 0;
    }
  }
}
</style>
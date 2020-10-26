<template>
  <div class="search-bar">
    <div class="search-bar-content">
      <van-icon name="search" class="search" />
      <input
        v-model="searchWord"
        type="text"
        class="search-input"
        :focus="focus"
        :disabled="disabled"
        :maxlength="limit"
        :placeholder="hotSearch.length ? hotSearch : '搜索'"
        @input="onChange"
        confirm-type="search"
        @confirm="onConfirm"
      />
      <van-icon v-if="searchWord.length" name="close" class="clear" @click="onClearClick" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  props: {
    focus: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 50
    },
    hotSearch: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      searchWord: ''
    }
  },
  created () {
  },
  methods: {
    onSearchBarClick () {
      this.$emit('onClick')
    },
    onClearClick () {
      this.searchWord = ''
      this.$emit('onClear')
    },
    onChange (e) {
      const { value } = e.mp.detail
      this.$emit('onChange', value)
    },
    onConfirm (e) {
      const { value } = e.mp.detail
      this.$emit('onConfirm', value)
    }
  }
}
</script>

<style scoped>
.search-bar {
  padding: 15px 15.5px;
}
.search-bar .search-bar-content {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 12px 15px;
  background: #F5F7F9;
  border-radius: 20px;
  box-sizing: border-box;
}
.search-bar .search-bar-content .search-input {
  flex-grow: 1;
  margin: 0 8px;
}
.search,.clear {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #858c96;
}
</style>

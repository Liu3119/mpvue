<template>
  <div class='tag-wrapper' @click='onClick'>
    <div class='tag'>{{text}}</div>
  </div>
</template>
<script>
export default {
  props: {
    text: String
  },
  methods: {
    onClick () {
      this.$emit('onTagClick')
    }
  }
}
</script>
<style lang="scss" scoped>
.tag-wrapper {
  max-width: 100%;
  display: flex;
  justify-content: center;
  background: #F7F7F9;
  border-radius: 16px;
  padding: 6px 17px;
  .tag {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #272E37;
  }
}
</style>
<template>
  <div class="auto-wrapper">
    <div class="auto">
      <div class="auto-info">
        <div class="auto-img">
          <image-view
            src="https://www.youbaobao.xyz/mpvue-res/logo.jpg"
            height="100%"
            mode="scrollTopFill"
            round
          />
        </div>
        <div class="sub-title">登录小慕读书</div>
        <div class="title">全场好书免费读</div>
      </div>
      <button
        class="auto-btn"
        open-type="getUserInfo"
        @getuserinfo="getUserInfo"
      >
        授权登录
      </button>
    </div>
  </div>
</template>
<script>
import ImageView from './ImageView.vue'
export default {
  components: {
    ImageView
  },
  methods: {
    getUserInfo () {
      this.$emit('getUserInfo')
    }
  }
}
</script>
<style lang="scss" scoped>
.auto-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #999;
  z-index: 1000;
  .auto {
    position: relative;
    width: 270px;
    height: 248px;
    background: #f5f5f5;
    border-radius: 18px;
    .auto-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 22.5px;
      .auto-img {
        width: 74px;
        height: 74px;
      }
      .sub-title {
        margin-top: 18px;
        font-size: 13px;
        color: #999;
        line-height: 18.5px;
      }
      .title {
        margin-top: 3.5px;
        font-size: 16px;
        color: #333;
        font-weight: 400;
        line-height: 12.5px;
      }
    }
    .auto-btn {
      position: absolute;
      bottom: 0;
      width: 100%;
      color: #fff;
      background-image: linear-gradient(90deg, #1ea3f5 0%, #0f87fc 100%);
      border-radius: 0 0 18px 18px;
    }
  }
}
</style>
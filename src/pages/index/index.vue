<template>
  <div class="home">
    <search-bar
      disabled
      @click="onSearchBarClick"
    />
    <home-card />
    <home-banner
      img="http://www.youbaobao.xyz/book/res/bg.jpg"
      title="mpv2.0上线了"
      subTitle="开始学习"
      @onClick="onBannerClick"
    />
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
import HomeCard from '../../components/home/HomeCard'
import HomeBanner from '../../components/home/HomeBanner'
export default {
  components: {
    HomeBanner,
    SearchBar,
    HomeCard
  },
  methods: {
    onSearchBarClick () {
      // 跳转搜索页
    },
    onBannerClick () {
      console.log('点击Banner')
    }
  }
}
</script>

<style scoped>

</style>

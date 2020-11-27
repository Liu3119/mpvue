<template>
  <div class="home">
    <search-bar
      disabled
      @click="onSearchBarClick"
      :hot-search="hotSearch"
    />
    <home-card
      :data="homeCard"
    />
    <home-banner
      :img="banner.img"
      :title="banner.title"
      :subTitle="banner.subTitle"
      @onClick="onBannerClick(banner.url)"
    />
    <div :style="{ marginTop: '23px' }">
      <home-book
        title="为你推荐"
        :row="1"
        :col="3"
        :data='recommend'
        mode='col'
        btnText="换一批"
        @onMoreClick="recommendClick('recommend')"
        @onBookClick='onBookMoreClick'
      />
    </div>
    <div :style="{ marginTop: '23px' }">
      <home-book
        title="免费阅读"
        :row="2"
        :col="2"
        :data='freeRead'
        mode='col'
        btnText="换一批"
        @onMoreClick="recommendClick('freeRead')"
        @onBookClick='onBookMoreClick'
      />
    </div>
    <div :style="{ marginTop: '23px' }">
      <home-book
        title="当前最热"
        :row="1"
        :col="4"
        :data='hotBook'
        mode='col'
        btnText="换一批"
        @onMoreClick="recommendClick('hotBook')"
        @onBookClick='onBookMoreClick'
      />
    </div>
    <div :style="{ marginTop: '23px' }">
      <home-book
        title="分类"
        :row="2"
        :col="3"
        :data='category'
        mode='category'
        btnText="查看全部"
        @onBookClick='onBookMoreClick'
        @onMoreClick='onCategoryClick'
      />
    </div>
  </div>
</template>

<script>
  import SearchBar from '../../components/home/SearchBar.vue'
  import HomeCard from '../../components/home/HomeCard'
  import HomeBanner from '../../components/home/HomeBanner'
  import HomeBook from '../../components/home/HomeBook.vue'
  import { getHomeBook, recommend, freeRead, hotBook } from '../../api'

  export default {
    components: {
      HomeBanner,
      HomeCard,
      HomeBook,
      SearchBar,
    },
    data () {
      return {
        hotSearch: '',
        homeCard: {},
        recommend: [],
        freeRead: [],
        category: [],
        hotBook: [],
        banner: {},
      }
    },
    created () {
      this.getHomeBookInfo()
    },
    methods: {
      recommendClick (key) {
        switch (key) {
          case 'recommend':
            recommend().then(rs => {
              this.recommend = rs.data.data
            })
            break
          case 'freeRead':
            freeRead().then(rs => {
              this.freeRead = rs.data.data
            })
            break
          case 'hotBook':
            hotBook().then(rs => {
              this.hotBook = rs.data.data
            })
            break
        }
      },
      getHomeBookInfo () {
        getHomeBook( { openId: '1234' } ).then( rs => {
          const {
            data: {
              shelf,
              recommend,
              freeRead,
              hotBook,
              category,
              banner,
              shelfCount,
              hotSearch: {
                keyword,
              },
            },
          } = rs.data
          this.recommend = recommend
          this.freeRead = freeRead
          this.hotBook = hotBook
          this.category = category
          this.banner = banner
          this.hotSearch = keyword
          this.homeCard = {
            bookList: shelf,
            num: shelfCount,
            userInfo: {
              avatar: 'https://www.youbaobao.xyz/mpvue-res/logo.jpg',
              nickName: '米老鼠',
            },
          }
        } )
      },
      onHomeBookClick () {
        console.log( '图书' )
      },
      onBookMoreClick () {
        console.log( 'more click' )
      },
      onCategoryClick () {},
      onSearchBarClick () {
        // 跳转搜索页
      },
      onBannerClick ( url ) {
        console.log( '点击Banner', url )
      },
    },
  }
</script>

<style lang='scss' scoped>
</style>

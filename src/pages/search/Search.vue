<template>
  <div class="search-item-wrapper">
    <search-bar
      :hotSearch="hotSearchKeyWord"
      :focus="searchFocus"
      @onChange="changeSearchKey"
      @onClear="onClearSearch"
      @onConfirm="onConfirm"
      ref="searchBar"
    />
    <tag-group
      :value="hotSearchArray"
      headerText="热门搜索"
      btnText="换一批"
      @onBtnClick="changeHotSearch"
      @onTagClick="showBookDetails"
      v-if="hotSearchArray.length > 0 && !showSearchList"
    />
    <tag-group
      :value="historySearch"
      headerText="历史搜索"
      btnText="清空"
      @onBtnClick="clearHistorySearch"
      @onTagClick="searchKeyWord"
      v-if="historySearch.length > 0 && !showSearchList"
    />
    <search-list :data="searchList" v-if="showSearchList" />
  </div>
</template>
<script>
import SearchList from '@/components/search/SearchList.vue'
import SearchBar from '@/components/home/SearchBar.vue'
import TagGroup from '@/components/base/TagGroup.vue'
import { search, hotSearch } from '@/api/index'
import { getStorageSync, setStorageSync, showToast } from '@/api/wechat'

const KEY_HISTORY_SEARCH = 'historySearch'

export default {
  components: {
    SearchList,
    SearchBar,
    TagGroup
  },
  computed: {
    showSearchList () {
      const keys = Object.keys(this.searchList)
      return keys.length > 0
    },
    hotSearchArray () {
      const _hotSearch = []
      this.hotSearch.forEach(o => _hotSearch.push(o.title))
      return _hotSearch
    }
  },
  data () {
    return {
      hotSearch: [],
      hotSearchKeyWord: '',
      historySearch: [],
      searchList: {},
      searchFocus: true,
      openId: '',
      page: 1
    }
  },
  mounted () {
    this.page = 1
    this.openId = getStorageSync('openId')
    this.hotSearchKeyWord = this.$route.query.hotSearch
    this.getHotSearch()
    this.historySearch = getStorageSync(KEY_HISTORY_SEARCH) || []
  },
  methods: {
    getHotSearch () {
      hotSearch().then(rs => {
        this.hotSearch = rs.data.data
      })
    },
    onConfirm (keyword) {
      // 1. 判断是否有搜索关键词
      if (!keyword || keyword.trim().length === 0) {
        // 如果没有， 则获取热门搜索词，通过热门搜索词发起请求
        keyword = this.hotSearchKeyWord
        this.$refs.searchBar.setValue(keyword)
      }
      this.onSearch(keyword)
      // 2. 将搜索结果写入历史搜索
      if (!this.historySearch.includes(keyword)) {
        this.historySearch.unshift(keyword)
        if (this.historySearch.length > 10) {
          this.historySearch.splice(10)
        }
        setStorageSync(KEY_HISTORY_SEARCH, this.historySearch)
      }
      // 3. 将搜索框失去焦点
      this.searchFocus = false
    },
    onClearSearch () {
      this.searchList = {}
    },
    changeSearchKey (keyword) {
      this.searchFocus = true
      if (!keyword || keyword.trim().length === 0) {
        this.searchList = {}
        return
      } else {
        this.page = 1
        this.onSearch(keyword)
      }
    },
    onSearch (keyword) {
      search({
        keyword,
        openId: this.openId,
        page: this.page
      }).then(rs => {
        this.searchList = rs.data.data
      })
    },
    searchKeyWord (text) {
      this.$refs.searchBar.setValue(text)
      this.onSearch(text)
     },
    clearHistorySearch () {
      this.historySearch = []
      setStorageSync(KEY_HISTORY_SEARCH, [])
    },
    changeHotSearch () {
      this.getHotSearch()
    },
    showBookDetails (text, index) {
      console.log(text, index)
    }
  },
  onPageScroll () {
    if (this.searchFocus) this.searchFocus = false
  },
  onReachBottom () {
    if (this.showSearchList) {
      const keyword = this.$refs.searchBar.getValue()
      search({
        keyword,
        openId: this.openId,
        page: ++this.page
      }).then(rs => {
        const { book } = rs.data.data
        if (book && book.length > 0) {
          this.searchList.book.push(...book)
        } else {
          showToast('真的已经没有了')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.search-item-wrapper {
  padding-bottom: 20px;
}
</style>
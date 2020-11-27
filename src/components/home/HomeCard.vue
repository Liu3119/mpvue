<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wrapper">
          <image-view :src="avatar" round />
        </div>
        <div class="nickname">{{ nickName }}</div>
        <div class="shelf-text">书架共{{ data.num }}本好书</div>
        <div class="round-item"></div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info">
        <div class="book-wrapper">
          <div
            class="book-img-wrapper"
            v-for="(item, index) of bookList"
            :key="index"
            @click="onBookClick"
          >
            <image-view :src="item.cover" />
          </div>
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon
            class="arrow"
            name="arrow"
            size="11px"
            color="#828489"
          ></van-icon>
        </div>
      </div>
      <div class="feedback-wrapper">
        <span @click="onFeedBackClick">反馈</span>
      </div>
    </div>
    <van-dialog id="van-dialog"></van-dialog>
  </div>
</template>

<script>
import ImageView from '../base/ImageView'
import Dialog from 'vant-weapp/dist/dialog/dialog'
export default {
  name: 'homecard',
  components: {
    ImageView
  },
  props: {
    data: Object,
    hasSign: {
      type: Boolean,
      default: false
    },
    signDay: {
      type: Number,
      default: 0
    }
  },
  computed: {
    avatar () {
      return this.data && this.data.userInfo && this.data.userInfo.avatar
    },
    nickName () {
      return this.data && this.data.userInfo && this.data.userInfo.nickName
    },
    bookList () {
      return (this.data && this.data.bookList) || []
    }
  },
  data () {
    return {}
  },
  created () {
  },
  methods: {
    gotoShelf () { },
    onBookClick () { },
    sign () { },
    onFeedBackClick () {
      Dialog.confirm({
        title: '反馈',
        message: '您是否确认提交反馈信息',
        confirmButtonText: '是',
        cancelButtonText: '否'
      }).then(() => {
        console.log('点击是之后时间')
      }).catch(() => {
        console.log('点击否')
      })
    }
  }
}
</script>

<style scoped>
.home-card {
  background-image: linear-gradient(-90deg, #54575f 0%, #595b60 100%);
  border-radius: 15px;
  margin: 22px 20px 0;
}
.home-card-inner {
  padding: 21.5px 17px 20px 20px;
  box-sizing: border-box;
  position: relative;
}
.user-info {
  display: flex;
  align-items: center;
}
.avatar-wrapper {
  width: 20px;
  height: 20px;
}
.nickname,
.shelf-text {
  font-size: 12px;
  color: #fff;
}
.nickname {
  margin: 0 8.5px;
}
.shelf-text {
  opacity: 0.7;
}
.round-item {
  width: 4px;
  height: 4px;
  background: #a2a2a2;
  border-radius: 50%;
  margin: 0 8px;
}
.book-info {
  display: flex;
}
.book-wrapper {
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  margin-top: 16.5px;
}
.shelf-wrapper {
  display: flex;
  align-items: center;
}
.shelf {
  width: 11px;
  font-size: 11px;
  word-break: break-word;
  color: #fff;
  opacity: 0.8;
}
.book-img-wrapper {
  width: 70px;
  height: 101px;
}
.feedback-wrapper {
  position: absolute;
  top: 19.5px;
  right: 0;
  width: 44.5px;
  height: 23.5px;
  line-height: 23.5px;
  background: #707070;
  border-radius: 100px 0 0 100px;
  color: #fff;
  font-size: 11px;
  text-align: center;
}
</style>

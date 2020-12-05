<template>
  <div class="search-table-wrapper">
    <div class="search-table-inner">
      <div
        class="search-table-book"
        v-for="(book, index) of data"
        :key="index"
        @click="onClick(book)"
      >
        <div class="book-img-wrapper">
          <div class="book-img">
            <image-view
              :src="book.cover"
            />
          </div>
        </div>
        <div class="book-info-wrapper">
          <div class="book-info-title">{{book.title}}</div>
          <div class="book-info-author">{{book.author}}</div>
          <div class="book-info-category">{{book.category}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ImageView from '../base/ImageView.vue'
export default {
  components: { ImageView },
  props: {
    data: Array
  },
  methods: {
    onClick (book) {
      this.$emit('onClick', book)
    }
  }
}
</script>
<style lang="scss" scoped>
.search-table-wrapper {
  padding: 0 16px;
  .search-table-inner {
    .search-table-book {
      margin: 14.5px 0;
      display: flex;
      align-items: center;
      .book-img-wrapper {
        .book-img {
          width: 47px;
          height: 68.5px;
        }
      }
      .book-info-wrapper {
        width: 80%;
        margin-left: 15.5px;
        .book-info-title {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 16px;
          color: #333333;
          line-height: 22.5px;
        }
        .book-info-author {
          margin-top: 5px;
          font-size: 13px;
          color: rgba(0,0,0,0.65);
          line-height: 18px;
        }
        .book-info-category {
          font-size: 13px;
          color: rgba(0,0,0,0.45);
          line-height: 18px;
        }
      }
    }
  }
}
</style>
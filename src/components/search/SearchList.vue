<template>
  <div>
    <search-item
      icon="apps-o"
      :title="category"
      subTitle="Category"
      @onClick="showList(category, 'category')"
      v-if="category"
    />
    <search-item
      icon="user-o"
      :title="author"
      subTitle="Author"
      @onClick="showList(author, 'author')"
      v-if="author"
    />
    <search-item
      icon="newspaper-o"
      :title="publisher"
      subTitle="Publisher"
      @onClick="showList(publisher, 'publisher')"
      v-if="publisher"
    />
    <search-table :data="data.book" @onClick="onBookClick" />
  </div>
</template>
<script>
import SearchItem from './SearchItem.vue'
import SearchTable from './SearchTable.vue'
export default {
  components: { SearchItem, SearchTable },
  props: {
    data: Object
  },
  computed: {
    category () {
      if (this.data && this.data.category && this.data.category.length > 0) {
        return this.data.category[0].categoryText
      } else {
        return null
      }
    },
    author () {
      if (this.data && this.data.author && this.data.author.length > 0) {
        return this.data.author[0].author
      } else {
        return null
      }
    },
    publisher () {
      if (this.data && this.data.publisher && this.data.publisher.length > 0) {
        return this.data.publisher[0].publisher
      } else {
        return null
      }
    }
  },
  methods: {
    showList (title, key) {
      console.log(title, key)
    },
    onBookClick (book) {
      console.log(book)
    }
  }
}
</script>
<template>
  <div>
    <CharacterList
      :current-page="currentPage"
      :total.sync="total"
      :limit.sync="limit"
    />
    <Pagination
      :total="total"
      :limit="limit"
      @selectPage="selectPage"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import CharacterList from '@/components/Character/CharacterList.vue'

export default {
  name: 'Home',
  components: {
    CharacterList,
    Pagination,
  },
  data: () => ({
    total: 0,
    limit: 0,
    currentPage: 0,
  }),
  methods: {
    /**
     * @param {Number} page
     */
    selectPage (page) {
      this.currentPage = page
    },
  },
}
</script>

<style>
body {
  margin: 0;
  overflow-x: hidden;
}
</style>

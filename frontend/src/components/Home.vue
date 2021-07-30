<template>
  <div>
    <div class="characterList">
      <Character
        v-for="character in characters"
        :key="character.id"
        v-bind="character"
      />
    </div>
    <Pagination
      :total="total"
      :limit="limit"
      @selectPage="selectPage"
    />
  </div>
</template>

<script>
import axios from '@/utils/axios'
import Pagination from '@/components/Pagination.vue'
import Character from '@/components/Character/Character.vue'

export default {
  name: 'Home',
  components: {
    Character,
    Pagination,
  },
  data: () => ({
    total: 0,
    limit: 0,
    currentPage: 0,
    characters: [],
  }),
  watch: {
    async selectedPage () {
      await this.loadData()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
  mounted () {
    this.loadData()
  },
  methods: {
    async loadData () {
      const { data: { data }, status } = await axios.get('/characters', {
        params: {
          page: this.currentPage,
        },
      })
      if (status === 200) {
        this.limit = data.limit
        this.total = data.total
        this.characters = data.results
      }
    },
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

.characterList {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 50vh;
  width: 100%;
  max-width: 100%;
}
</style>

<template>
  <div class="characterList">
    <Character
      v-for="character in characters"
      :key="character.id"
      v-bind="character"
    />
  </div>
</template>

<script>
import axios from '@/utils/axios'
import Character from '@/components/Character/Character.vue'

export default {
  name: 'Home',
  components: {
    Character,
  },
  data: () => ({
    total: 0,
    count: 0,
    characters: [],
  }),
  mounted () {
    this.loadData()
  },
  methods: {
    async loadData () {
      const { data: { data }, status } = await axios.get('/characters')
      if (status === 200) {
        this.total = data.total
        this.count = data.count
        this.characters = data.results
      }
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

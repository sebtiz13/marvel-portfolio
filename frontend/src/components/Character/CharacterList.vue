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
  name: 'CharacterList',
  components: {
    Character,
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    characters: [],
  }),
  watch: {
    async currentPage () {
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
        this.$emit('update:limit', data.limit)
        this.$emit('update:total', data.total)
        this.characters = data.results
      }
    },
  },
}
</script>

<style>
.characterList {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(480px, 50vh);
  width: 100%;
  max-width: 100%;
}

@media (min-width: 960px) {
  .characterList {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1366px) {
  .characterList {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1920px) {
  .characterList {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>

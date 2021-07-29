<template>
  <div>
    {{ characters }}
  </div>
</template>

<script>
import axios from '@/utils/axios'

export default {
  name: 'Home',
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

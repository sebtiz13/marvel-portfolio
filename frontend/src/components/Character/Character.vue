<template>
  <div class="character">
    <CharacterCover
      :thumbnail="thumbnail"
      :name="name"
    />
  </div>
</template>

<script>
import CharacterCover from '@/components/Character/CharacterCover.vue'

export default {
  name: 'Character',
  components: {
    CharacterCover,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: Object,
      default: () => ({ path: '', extension: '' }),
    },
  },
}
</script>

<style>
.character {
  width: 25vw;
}
</style>

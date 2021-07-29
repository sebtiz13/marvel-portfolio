<template>
  <div
    class="character"
    :class="{
      'character-active': active
    }"
    @click="flipCharacter"
  >
    <div class="character-inner">
      <CharacterCover
        :thumbnail="thumbnail"
        :name="name"
      />
      <CharacterInfo
        :description="description"
        :comics="comics"
        :series="series"
        :stories="stories"
      />
    </div>
  </div>
</template>

<script>
import CharacterCover from '@/components/Character/CharacterCover.vue'
import CharacterInfo from '@/components/Character/CharacterInfo.vue'

export default {
  name: 'Character',
  components: {
    CharacterCover,
    CharacterInfo,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: Object,
      default: () => ({ path: '', extension: '' }),
    },
    comics: {
      type: Object,
      default: () => ({}),
    },
    series: {
      type: Object,
      default: () => ({}),
    },
    stories: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    active: false,
  }),
  methods: {
    flipCharacter () {
      this.active = !this.active
    },
  },
}
</script>

<style>
.character {
  background-color: transparent;
  perspective: 1000px;
  cursor: pointer;
  overflow: hidden;
}

.character:not(.character-active):hover > .character-inner {
  transform: rotateY(10deg);
}

.character-active > .character-inner {
  transform: rotateY(180deg);
}

.character-inner {
  position: relative;
  height: 100%;
  width: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.character-inner > div {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>

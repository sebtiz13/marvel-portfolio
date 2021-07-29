<template>
  <div class="characterInfo">
    {{ description }}
    {{ comics }}
    {{ series }}
    {{ stories }}
  </div>
</template>

<script>
export default {
  name: 'CharacterInfo',
  props: {
    description: {
      type: String,
      default: '',
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
}
</script>

<style>
.characterInfo {
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: #151515;
  color: rgb(229, 229, 229)
}

.characterInfo img {
  max-width: 100%;
}
</style>

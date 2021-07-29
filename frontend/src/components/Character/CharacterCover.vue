<template>
  <div class="characterCover">
    <img :src="thumbnailSrc">
    <div class="characterCover--info">
      <h1>{{ name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterCover',
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
  computed: {
    thumbnailSrc () {
      return [this.thumbnail.path, this.thumbnail.extension].join('.')
    },
  },
}
</script>

<style>
.characterCover {
  position: relative;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}

.characterCover img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.characterCover--info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px 10px;
  display: flex;
  background-color: rgba(0, 0, 0, .75);
  color: rgb(229, 229, 229)
}
</style>

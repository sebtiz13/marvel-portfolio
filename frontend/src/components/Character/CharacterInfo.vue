<template>
  <div class="characterInfo">
    <ul class="characterInfo-chapter">
      <li
        :class="{ active: section === 'description' }"
        @click.stop="changeSection('description')"
      >
        Description
      </li>
      <li
        :class="{ active: section === 'comics' }"
        @click.stop="changeSection('comics')"
      >
        Comics
      </li>
      <li
        :class="{ active: section === 'series' }"
        @click.stop="changeSection('series')"
      >
        Series
      </li>
      <li
        :class="{ active: section === 'stories' }"
        @click.stop="changeSection('stories')"
      >
        Stories
      </li>
    </ul>
    <div class="characterInfo-section">
      <span v-if="section === 'description'">
        {{ description }}
      </span>
      <CharacterItems
        v-if="section === 'comics'"
        :items="comics.items"
      />
      <CharacterItems
        v-if="section === 'series'"
        :items="series.items"
      />
      <CharacterItems
        v-if="section === 'stories'"
        :items="stories.items"
      />
    </div>
  </div>
</template>

<script>
import CharacterItems from '@/components/Character/CharacterItems.vue'

export default {
  name: 'CharacterInfo',
  components: {
    CharacterItems,
  },
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
  data: () => ({
    section: 'comics',
  }),
  methods: {
    /**
     * @param {string} section
     */
    changeSection (section) {
      this.section = section
    },
  },
}
</script>

<style>
.characterInfo {
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: rgb(241, 241, 241);
  color: #151515;
}

.characterInfo img {
  max-width: 100%;
}

.characterInfo-chapter {
  display: flex;
  padding: 0;
  margin: 0;
}

.characterInfo-chapter li {
  display: block;
  height: 15px;
  border-top: 5px solid transparent;
  background-color: #151515;
  color: #ffff;
  padding: 10px 15px;
  flex-grow: 1;
  text-align: center;
}

.characterInfo-chapter li.active {
  border-color: #e62429;
}

.characterInfo-section {
  padding: 15px;
  overflow-x: auto;
  height: calc(100% - 70px);
}
</style>

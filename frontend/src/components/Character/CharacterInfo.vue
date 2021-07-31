<template>
  <div class="characterInfo">
    <div v-if="countData > 0">
      <ul class="characterInfo-chapter">
        <li
          v-if="description.length > 0"
          :class="{ active: section === 'description' }"
          @click.stop="changeSection('description')"
        >
          Description
        </li>
        <li
          v-if="comics.returned > 0"
          :class="{ active: section === 'comics' }"
          @click.stop="changeSection('comics')"
        >
          Comics
        </li>
        <li
          v-if="series.returned > 0"
          :class="{ active: section === 'series' }"
          @click.stop="changeSection('series')"
        >
          Series
        </li>
        <li
          v-if="stories.returned > 0"
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
    <div
      v-else
      class="characterInfo-empty"
    >
      <h2>No data</h2>
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
      default: () => ({ returned: 0 }),
    },
    series: {
      type: Object,
      default: () => ({ returned: 0 }),
    },
    stories: {
      type: Object,
      default: () => ({ returned: 0 }),
    },
  },
  data: () => ({
    section: 'comics',
  }),
  computed: {
    countData () {
      return [
        this.description.length,
        this.comics.returned,
        this.series.returned,
        this.stories.returned,
      ].reduce((a, b) => a + b, 0)
    },
  },
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

.characterInfo-empty {
  text-align: center;
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

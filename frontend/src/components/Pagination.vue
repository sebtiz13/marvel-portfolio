<template>
  <ul class="paginations">
    <li
      v-for="p in pages"
      :key="p"
      :class="{ active: p === currentPage }"
      @click="currentPage = p"
    >
      {{ p }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    currentPage: 1,
  }),
  computed: {
    /**
     * @return {Number}
     */
    pages () {
      return Math.ceil(this.total / this.limit)
    },
  },
  watch: {
    currentPage (current) {
      this.$emit('selectPage', current - 1)
    },
  },
}
</script>

<style>
.paginations {
  display: flex;
  padding: 20px;
  margin: 0;
  flex-wrap: wrap;
  justify-content: center;
}

.paginations li {
  display: block;
  line-height: 25px;
  width: 25px;
  height: 25px;
  margin: 5px;
  flex-shrink: 1;
  text-align: center;
  color: #e62429;
  background-color: #d8d8d8;
  cursor: pointer;
}

.paginations li.active {
  background-color: #414141;
}
</style>

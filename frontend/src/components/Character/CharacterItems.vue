<template>
  <div>
    <ul>
      <li
        v-for="item in items"
        :key="item.name"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CharacterInfo',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

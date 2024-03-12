<template>
  <v-sheet v-bind="{ color, width, height }" />
</template>

<script setup lang="ts">
defineProps({
  color: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
});
</script>

<!-- If you comment out scoped or lang="scss" there is no error -->
<style scoped lang="scss">
.class {
  font-size: 1rem;
}
</style>

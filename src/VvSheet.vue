<template>
  <v-sheet v-bind="{ color, width, height }" />
</template>

<script setup lang="ts">
import { color, width, height } from './config';
</script>

<!-- If you comment out scoped or lang="scss" there is no error -->
<style scoped lang="scss">
.class {
  font-size: 1rem;
}
</style>

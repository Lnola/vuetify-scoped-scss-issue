<template>
  <v-app>
    <v-container class="d-flex">
      <v-sheet class="mx-1" v-bind="{ color, width, height }" />
      <w-sheet class="mx-1" v-bind="{ color, width, height }" />
      <vv-sheet class="mx-1" />
    </v-container>

    <span></span>
  </v-app>
</template>

<script setup lang="ts">
import WSheet from './WSheet.vue';
import VvSheet from './VvSheet.vue';
import { color, width, height } from './config';
</script>

<style scoped lang="scss">
@import '@/scss/settings';

span {
  width: 200px;
  height: 200px;
  background-color: $blue-custom !important;

  @media #{map-get($display-breakpoints, 'md-and-up')} {
    margin: 1rem 0 0;
  }
}
</style>

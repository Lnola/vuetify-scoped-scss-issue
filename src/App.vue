<template>
  <v-app>
    <v-container class="d-flex">
      <v-sheet class="mx-1" v-bind="{ color, width, height }" />
      <w-sheet class="mx-1" v-bind="{ color, width, height }" />
      <vv-sheet class="mx-1" />
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import WSheet from './WSheet.vue';
import VvSheet from './VvSheet.vue';
import { color, width, height } from './config';
</script>

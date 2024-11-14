<script setup lang="ts">
const value = defineModel<'in-progress' | 'completed'>()
</script>

<template>
  <div class="text-2xl cursor-pointer">
    <iconify-icon
      v-if="value === 'completed'"
      icon="lucide:circle-check"
      class="text-green-500"
    />
    <iconify-icon v-else icon="lucide:circle-dot" class="text-gray-500" />
  </div>
</template>

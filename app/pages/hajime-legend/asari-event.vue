<script setup lang="ts">
import CharacterDropdown from '@/components/CharacterDropdown.vue'

definePageMeta({
  layout: 'hajime-legend',
})

const selectedCharacter = ref('jsna')
</script>

<template>
  <div>
    <div class="text-semibold text-center text-2xl">Asari Event Stat Requirements</div>
    <div class="flex justify-center p-2">
      <CharacterDropdown v-model="selectedCharacter" />
    </div>
  </div>
</template>

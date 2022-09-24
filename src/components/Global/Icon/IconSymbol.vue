<template>
  <svg class="icon-symbol" aria-hidden="true">
    <use :xlink:href="`#${icon}`"></use>
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
}>()
</script>

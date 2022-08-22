<template>
  <p @click="changeFlag()">Son: {{ props.flag }}</p>
</template>

<script lang="ts" setup>
interface Props {
  modelValue: string;
  flag: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  flag: false
});

// emit
const emit = defineEmits<{
  (e: 'update:modelValue', str: string): void;
  (e: 'update:flag', flag: boolean): void;
}>();

const changeFlag = (): void => {
  emit('update:modelValue', '嘿嘿嘿');
  emit('update:flag', false);
};
</script>

<template>
  <div
    class="flex flex-col justify-center items-center border border-neutral w-16 rounded-lg"
  >
    <button @click="addValue(1)" class="w-full btn btn-sm">+</button>
    <div class="p-2 text-3xl">
      {{ props.modelValue.toString().padStart(2, "0") }}
    </div>
    <button @click="addValue(-1)" class="w-full btn btn-sm">-</button>
  </div>
</template>

<script lang="ts" setup>
import { watch } from "vue"

interface Props {
  modelValue: number
  min?: number
  max?: number
}

interface Emits {
  (e: "update:modelValue", modelValue: number): void
}

const props = withDefaults(defineProps<Props>(), { min: 0, max: 99 })
const emits = defineEmits<Emits>()

// watcher

watch(() => props.modelValue, modelValueWatcher)

// actions

function addValue(value: number) {
  emits("update:modelValue", props.modelValue + value)
}

function modelValueWatcher(value: number) {
  if (value > props.max) {
    emits("update:modelValue", props.min)
  }

  if (value < props.min) {
    emits("update:modelValue", props.max)
  }
}
</script>

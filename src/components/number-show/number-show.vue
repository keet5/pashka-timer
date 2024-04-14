<template>
  <div class="p-2 text-2xl w-10">
    {{ props.number.toString().padStart(2, "0") }}
  </div>
</template>

<sytle lang="postcss"></sytle>

<script lang="ts" setup>
interface Props {
  number: number
}
import { computed } from "vue"

const props = defineProps<Props>()

const style = computed(() => `--value: ${props.number}`)
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-2 p-2">
    <timer />
    <timer />
  </div>
</template>

<script lang="ts" setup>
import Timer from "@/components/timer"

function clickHandler() {
  const url = "http://localhost:5173/" // URL сайта, который вы хотите отобразить
  const windowFeatures = "width=800,height=600,top=0,left=0,fullscreen=yes" // Настройки нового окна
  window.open(url, "_blank", windowFeatures)
}
</script>

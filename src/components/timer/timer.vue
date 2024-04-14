<template>
  <div
    class="flex gap-2 flex-col p-2 rounded-lg border-neutral border aspect-square items-center justify-around"
  >
    <template v-if="state.setDisplay">
      <div class="flex gap-2">
        <input-number v-model="state.hours" :max="23" />
        <input-number v-model="state.minutes" :max="60" />
        <input-number v-model="state.seconds" :max="60" />
      </div>
      <div class="flex gap-2 items-center">
        <button @click="startClick" class="btn btn-sm btn-outline btn-circle">
          <icon-play />
        </button>

        <div @click="openFileInput">
          <button class="btn btn-sm btn-outline btn-circle">
            <input class="hidden" @change="loadAudio" type="file" />
            <icon-music />
          </button>
        </div>
      </div>
    </template>
    <div class="w-full max-w-[300px] aspect-square" v-else>
      <div
        class="w-full radial-progress relative flex justify-center items-center"
        style="--size: 100%; --thickness: 2px"
        :style="progressStyle"
      >
        <div class="flex">
          <number-show v-for="v in hms" :number="v" />
        </div>

        <div class="absolute m-auto translate-y-12 flex gap-1">
          <button
            @click="pauseStartClick"
            class="btn btn-sm btn-outline btn-circle"
          >
            <icon-pause v-if="state.timer.isRunning" />
            <icon-play v-else />
          </button>

          <button @click="stopClick" class="btn btn-sm btn-outline btn-circle">
            <icon-stop />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, watch } from "vue"
import Timer from "@/core/timer"
import NumberShow from "@/components/number-show"
import InputNumber from "@/components/input-number"

import IconPlay from "@/components/icons/icon-play"
import IconStop from "@/components/icons/icon-stop"
import IconPause from "../icons/icon-pause"
import IconMusic from "../icons/icon-music"

const state = reactive({
  hours: 0,
  minutes: 0,
  seconds: 0,
  audio: new Audio("src/assets/audio/default.ogg"),
  timer: new Timer(),
  setDisplay: true,
})

// getters

const progressStyle = computed(
  () => `--value: ${Math.round(state.timer.progress * 100)}`
)

const hms = computed(() => {
  return state.timer.hms
})

// watchers

watch(() => state.timer.isFinished, isFinishedWatcher)

// actions

function openFileInput(event: MouseEvent) {
  const target = event.target as HTMLElement

  const firstChild = target.firstChild as HTMLInputElement

  if (firstChild == null) return

  firstChild.click()
}

function isFinishedWatcher(finished: boolean) {
  if (finished) {
    state.audio.play()
    state.setDisplay = true
  }
}

function pauseStartClick() {
  if (state.timer.isRunning) {
    state.timer.stop()
  } else {
    state.timer.start()
  }
}

function startClick() {
  state.timer.setInterval(state.hours, state.minutes, state.seconds)
  state.timer.start()
  state.setDisplay = false
}

function stopClick() {
  state.timer.stop()
  state.timer.reset()
  state.setDisplay = true
}

function loadAudio(event: Event) {
  const e = event.target as HTMLInputElement
  if (e.files == null) return
  const file = e.files[0]
  if (file == null) return

  const fileUrl = URL.createObjectURL(file)
  state.audio = new Audio(fileUrl)
}

function click() {
  var url = "http://192.168.0.103:3000" // URL сайта, который вы хотите отобразить
  var windowFeatures = "width=200,height=200,top=0,left=0,fullscreen=yes" // Настройки нового окна
  window.open(url, "_blank", windowFeatures)
}
</script>

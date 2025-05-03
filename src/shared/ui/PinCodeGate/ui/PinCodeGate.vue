<script setup lang="ts">
import { usePinCode } from '../model'
import { watch, ref } from 'vue'

const props = defineProps<{
  pin: string
}>()

const { enteredPin, isUnlocked, submitPin } = usePinCode(props.pin)
const showError = ref(false)

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement
  enteredPin.value = target.value.replace(/\D/g, '').slice(0, 4)
}

// Автопроверка когда введено ровно 4 цифры
watch(enteredPin, (val) => {
  if (val.length === 4) {
    if (val === props.pin) {
      submitPin()
    } else {
      showError.value = true
      setTimeout(() => {
        enteredPin.value = ''
        showError.value = false
      }, 500)
    }
  }
})
</script>

<template>
  <div class="gate card">
    <!-- PIN-код панель -->
    <div v-show="!isUnlocked" class="pin-container">
      <p class="title">Введите PIN-код</p>
      <div
        class="pin-input"
        :class="{ error: showError }"
        @click="$refs.pinInput?.focus()"
      >
        <div v-for="n in 4" :key="n" class="pin-box">
          {{ enteredPin[n - 1] || '' }}
        </div>
        <input
          ref="pinInput"
          type="tel"
          inputmode="numeric"
          pattern="\d*"
          maxlength="4"
          v-model="enteredPin"
          @input="handleInput"
        />
      </div>
    </div>

    <!-- Контент -->
    <div v-show="isUnlocked" class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.gate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.pin-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.pin-input {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  position: relative;
  cursor: text;
  transition: transform 0.2s, border-color 0.2s;
}

.pin-input.error {
  animation: shake 0.3s;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}

.pin-box {
  width: 3rem;
  height: 3rem;
  border: 2px solid #333;
  border-radius: 0.5rem;
  font-size: 2rem;
  text-align: center;
  line-height: 3rem;
}

.pin-input.error .pin-box {
  border-color: red;
}

.pin-input input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.content {
  width: 100%;
  height: 100%;
}
</style>

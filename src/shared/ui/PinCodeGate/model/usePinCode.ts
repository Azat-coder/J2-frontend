import { ref, computed } from 'vue'

export function usePinCode(correctPin: string) {
    const enteredPin = ref('')
    const isUnlocked = ref(false)

    function submitPin() {
        if (enteredPin.value === correctPin) {
            isUnlocked.value = true
        }
    }

    return {
        enteredPin,
        isUnlocked: computed(() => isUnlocked.value),
        submitPin,
    }
}
import { useSpeechSynthesis } from '@vueuse/core';
import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';

export const useSpeechSynthesisStore = defineStore('speechSyntesis', () => {
  const voice = ref<SpeechSynthesisVoice>(undefined as unknown as SpeechSynthesisVoice);
  const text = ref('Привет, Азат!');
  const pitch = ref(1);
  const rate = ref(1);
  const speech = useSpeechSynthesis(text, {
    voice,
    pitch,
    rate,
  });
  let synth: SpeechSynthesis;
  const voices = ref<SpeechSynthesisVoice[]>([]);

  onMounted(() => {
    if (speech.isSupported.value) {
      setTimeout(() => {
        synth = window.speechSynthesis;
        voices.value = synth.getVoices();
        voice.value = voices.value[20];
      });
    }
  });

  const play = (textVal: string) => {
    text.value = textVal;

    if (speech.status.value === 'pause') {
      window.speechSynthesis.resume();
    } else {
      speech.speak();
    }
  };

  const pause = () => {
    window.speechSynthesis.pause();
  };

  const stop = () => {
    speech.stop();
  };

  return {
    voice,
    text,
    pitch,
    rate,
    speech,
    voices,
    play,
    pause,
    stop,
  };
});

import { useLocalStorage } from '@vueuse/core';
import { $t, updatePreset, updateSurfacePalette } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';
import { commonColorScheme, primaryColors as initialPrimaryColors, surfaces as initialSurfaces, noirSemantic } from '@/shared/assets';
import { useLayout } from '@/layout/composables/layout';
import { computed, onMounted, type Ref, type ComputedRef, ref, nextTick } from 'vue';

interface IUseStyleConfig {
  preset: Ref<string>;
  primary: Ref<string>;
  surface: Ref<string>;
  changePreset: (value: string) => void;
  updateColors: (type: string, color: Object) => void;
  onPresetChange: (value: string) => void;
  getPrimary: ComputedRef<string>;
  getSurface: ComputedRef<string>;
}

const presets = {
  Aura,
  Lara,
  Nora
};

export function useStyleConfig(): IUseStyleConfig {
  const preset = useLocalStorage('preset', "");
  const primary = useLocalStorage('primaryColor', "");
  const surface = useLocalStorage('surfaceColor', "");

  const changePreset = (value: string) => {
    preset.value = value;
  };

  const { layoutConfig } = useLayout();

  function onPresetChange(value) {
      changePreset(value);
      const presetValue = presets[preset.value];
      const surfacePalette = surfaces.value.find((s) => s.name === layoutConfig.surface)?.palette;

      $t().preset(presetValue).preset(getPresetExt()).surfacePalette(surfacePalette).use({ useDefaultOptions: true });
  }

  const primaryColors = ref(initialPrimaryColors);
  const surfaces = ref(initialSurfaces);

  function updateColors(type: 'primary' | 'surface', color: { name: string; palette: any }) {
    if (type === 'primary') {
        primary.value = color.name;
    } else if (type === 'surface') {
        surface.value = color.name;
    }

    applyTheme(type, color);
  }

  function applyTheme(type: 'primary' | 'surface', color: { name: string; palette: any }) {
    if (type === 'primary') {
        updatePreset(getPresetExt());
    } else if (type === 'surface') {
        updateSurfacePalette(color.palette);
    }
  }

  function getPresetExt() {
    const color = primaryColors.value.find((c) => c.name === primary.value);

    if (color.name === 'noir') {
        return {
            semantic: noirSemantic
        };
    } else {
        return {
            semantic: {
                primary: color.palette,
                colorScheme: commonColorScheme
            }
        };
    }
  }

  const getPrimary = computed(() => primary.value);

  const getSurface = computed(() => surface.value);

  onMounted(() => {
    nextTick(() => {
      const primaryColor = primaryColors.value.find((c) => c.name === primary.value);
      const surfaceColor = surfaces.value.find((s) => s.name === surface.value);
      if (primaryColor) applyTheme('primary', primaryColor);
      if (surfaceColor) applyTheme('surface', surfaceColor);
    });
  });

  return {
    preset,
    primary,
    surface,
    changePreset,
    updateColors,
    onPresetChange,
    getPrimary,
    getSurface,
  };
}
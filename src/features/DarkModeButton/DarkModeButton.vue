<script setup lang="ts">
import { useDarkMode } from './model';
const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>

<template>
    <input id="toggle" class="toggle" type="checkbox" :checked="isDarkMode" @change="toggleDarkMode" />
</template>

<style scoped>
.toggle {
    --size: 1.5rem;
    appearance: none;
    outline: none;
    cursor: pointer;
    width: var(--size);
    height: var(--size);
    box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
    border-radius: 999px;
    color: #3a3a5a3f;
    transition: all 500ms;
}
.toggle:checked {
    --ray-size: calc(var(--size) * -0.4);
    --offset-orthogonal: calc(var(--size) * 0.65);
    --offset-diagonal: calc(var(--size) * 0.45);
    transform: scale(0.75);
    color: #fa0;
    transition: all 500ms;
    box-shadow:
        inset 0 0 0 var(--size),
        calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
        var(--offset-orthogonal) 0 0 var(--ray-size),
        0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
        0 var(--offset-orthogonal) 0 var(--ray-size),
        calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size),
        var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
        calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
        var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
}
.toggle {
    z-index: 1;
}
.toggle:checked ~ .title {
    --color: #fa0;
    transition: color 500ms;
}
.title {
    --color: #e6e6ff;
    color: var(--color);
    z-index: 1;
    cursor: pointer;
    display: block;
    padding: 0.5rem 0 0;
    transition: color 500ms;
}
</style>

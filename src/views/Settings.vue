<script setup>
import { AppConfigurator } from '@/features/AppConfigurator';
</script>

<template>
    <div className="card">
        <h4>Настройки</h4>
        <div class="relative flex justify-end">
            <button
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                type="button"
                class="layout-topbar-action layout-topbar-action-highlight"
            >
                <i class="pi pi-palette"></i>
            </button>
            <AppConfigurator />
        </div>
    </div>
</template>

<style lang="scss">
@mixin focused() {
    outline-width: var(--focus-ring-width);
    outline-style: var(--focus-ring-style);
    outline-color: var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
    box-shadow: var(--focus-ring-shadow);
    transition:
        box-shadow var(--transition-duration),
        outline-color var(--transition-duration);
}

.layout-topbar-action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    color: var(--text-color);
    transition: background-color var(--element-transition-duration);
    cursor: pointer;

    &:hover {
        background-color: var(--surface-hover);
    }

    &:focus-visible {
        @include focused();
    }

    i {
        font-size: 1.25rem;
    }

    span {
        font-size: 1rem;
        display: none;
    }

    &.layout-topbar-action-highlight {
        background-color: var(--primary-color);
        color: var(--primary-contrast-color);
    }
}
</style>

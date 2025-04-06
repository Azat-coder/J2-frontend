<template>
  <div class="layout-wrapper layout-theme-dark">
    <slot name="header" />
    <slot name="sidebar" />
    <div class="layout-main-container">
      <main class="layout-main">
        <slot />
      </main>
    </div>
    <div class="layout-mask"></div>
  </div>
</template>

<style scoped lang="scss">
  @import './style';
</style>

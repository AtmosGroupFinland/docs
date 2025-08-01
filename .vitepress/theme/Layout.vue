<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      Content
    </template>
  </Layout>
</template>

<style>
.VPNav {
  background: var(--vp-nav-bg-color);
}

.VPNav .VPNavBarTitle .title {
  border: none;
}

.VPNavBarMenuLink {
  /* color: var(--vp-c-brand-1) !important; */
  color: white !important;
}

.VPNavBarMenuLink.active {
  /* color: white !important; */
  color: var(--vp-c-brand-1) !important;
}

.vpi-languages.option-icon, .vpi-chevron-down.text-icon {
  /* color: var(--vp-c-brand-1) !important; */
  color: white !important;
}
</style>
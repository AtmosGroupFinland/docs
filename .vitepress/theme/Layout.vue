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

.VPNav .VPNavBarTitle .title{
  border: none;
}

</style>
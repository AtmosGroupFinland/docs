<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- <template #aside-outline-before>
      Content
    </template> -->
  </Layout>
</template>

<style>
.VPNav {
  background: var(--vp-nav-bg-color);
}

.VPNav .VPNavBarTitle .title {
  border: none;
  display: flex;
  align-items: flex-end;
}

.VPNavBarMenuLink {
  color: white !important;
  transition: color 0.3s ease;
}

.VPNavBarMenuLink:hover {
  color: var(--vp-c-brand-1) !important;
}

.VPNavBarMenuLink.active {
  color: var(--vp-c-brand-1) !important;
}

/* Fix for blog link active state - more specific selectors */
.VPNavBarMenuLink[href*="/blog/"]:not(.active):not(:hover) {
  color: white !important;
}

.VPNavBarMenuLink[href*="/blog/"]:hover,
.VPNavBarMenuLink[href*="/blog/"].active,
.VPNavBarMenuLink[href*="/blog/"].router-link-active {
  color: var(--vp-c-brand-1) !important;
}

.vpi-languages.option-icon,
.vpi-chevron-down.text-icon {
  color: white !important;
}

/* Additional hover effects for language selector */
.VPNavBarTranslations .button:hover .vpi-languages.option-icon,
.VPNavBarTranslations .button:hover .vpi-chevron-down.text-icon {
  color: var(--vp-c-brand-1) !important;
}

/* Hover effect for hamburger menu */
.VPNavBarHamburger:hover {
  opacity: 0.9;
}
button.VPNavBarHamburger path {
  stroke: #ffffff;
}
</style>
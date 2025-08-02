---
layout: page
---

<script setup>
// This page will redirect to English blog via our redirect system  
// But we create it as a placeholder to avoid 404s during navigation
</script>

# Blogi
Teid suunatakse blogi ingliskeelsele versioonile...

<script>
// Client-side redirect as backup
if (typeof window !== 'undefined') {
  setTimeout(() => {
    window.location.replace('/blog/')
  }, 1000)
}
</script>
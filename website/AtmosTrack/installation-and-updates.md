---
title: Installation and Updates
description: Download and install the latest version of AtmosTrack
---

<script setup>
import { data as releaseData } from '../../.vitepress/data/releaseData.data.ts'

function formatFileSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  if (bytes === 0) return '0 Bytes'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
}

function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleDateString()
  } catch {
    return dateString
  }
}
</script>

# Installation and Updates

As of 03.08.2025 we only have Beta version, stable release is coming very soon!

## Latest Beta Version

<div class="release-info">
  <h3>AtmosTrack {{ releaseData.version }}</h3>
  <p><strong>Release Date:</strong> {{ formatDate(releaseData.releaseDate) }}</p>
  
  ### Download for Windows
  <div class="download-section">
    <a :href="releaseData.downloadUrl" class="download-button" download>
      Download {{ releaseData.fileName }}
    </a>
    <p class="file-info">
      <strong>File Size:</strong> {{ formatFileSize(releaseData.size) }}<br>
      <strong>SHA512:</strong> <code class="sha512">{{ releaseData.sha512 }}</code>
    </p>
  </div>
</div>

## Installation Instructions

1. **Download** the latest installer using the link above
2. **Run** the downloaded `.exe` file
3. **Accept Warning** There will be warning about installing potentially dangerous software this is due to software being in Beta version and missing a code signing certificate (we're woking on it).

![Image of website](/installation1.png "Image of website")

![Image of website](/installation2.png "Image of website")
5. **Follow** the installation wizard steps
6. **Launch** AtmosTrack from your desktop or start menu

## System Requirements

- **Operating System:** Windows 10 or later (64-bit)
- **Memory:** 4 GB RAM minimum
- **Storage:** 500 MB available space
- **Network:** Internet connection required for updates

## Updates

AtmosTrack automatically checks for updates when launched. You can also manually check for updates from the application menu.

<style scoped>
.release-info {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 24px;
  margin: 0;
  background: var(--vp-c-bg-soft);
}

.release-info h3 {
    margin: 0;
}

.download-section {
  margin: 16px 0;
}

.download-button {
  display: inline-block;
  padding: 10px 20px;
  background: var(--vp-c-brand);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: background-color 0.2s;
}

.file-info {
  margin-top: 12px;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}

.sha512 {
  word-break: break-all;
  font-size: 0.8em;
}
</style>

Feel free to contact our support in any instalation issues: support@atmosgroup.fi
<template>
  <div class="blog-index">
    <div class="blog-header">
      <h1>{{ getLocalizedTitle() }}</h1>
      <p>{{ getLocalizedSubtitle() }}</p>
    </div>

    <div class="blog-posts">
      <article v-for="post in posts" :key="post.url" class="blog-post-card">
        <div class="post-meta">
          <time :datetime="post.frontmatter.date">{{ formatDate(post.frontmatter.date) }}</time>
          <div class="post-tags" v-if="post.frontmatter.tags">
            <span v-for="tag in post.frontmatter.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>

        <h2 class="post-title">
          <a :href="post.url">{{ post.frontmatter.title }}</a>
        </h2>

        <p class="post-excerpt">{{ post.frontmatter.excerpt }}</p>

        <div class="post-footer">
          <span class="post-author" v-if="post.frontmatter.author">by {{ post.frontmatter.author }}</span>
          <a :href="post.url" class="read-more">{{ getLocalizedReadMore() }} →</a>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { data as allPosts } from '../../data/blogPosts.data.js'

const props = defineProps({
  language: {
    type: String,
    default: 'en'
  }
})

// Filter posts for the current language, fallback to English if no posts available
const posts = computed(() => {
  const langPosts = allPosts.filter(post => post.language === props.language)
  
  // If no posts in the requested language, show English posts
  if (langPosts.length === 0) {
    return allPosts.filter(post => post.language === 'en')
  }
  
  return langPosts
})

function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function getLocalizedTitle() {
  const titles = {
    'en': 'Blog',
    'fi': 'Blogi',
    'ar': 'المدونة',
    'ee': 'Blogi'
  }
  return titles[props.language] || titles['en']
}

function getLocalizedSubtitle() {
  const subtitles = {
    'en': 'Latest updates and insights from the AGF team',
    'fi': 'Viimeisimmät päivitykset ja näkemykset AGF-tiimiltä',
    'ar': 'آخر التحديثات والرؤى من فريق AGF',
    'ee': 'Viimased uudised ja teadmised AGF meeskonnalt'
  }
  return subtitles[props.language] || subtitles['en']
}

function getLocalizedReadMore() {
  const readMore = {
    'en': 'Read more',
    'fi': 'Lue lisää',
    'ar': 'اقرأ المزيد',
    'ee': 'Loe edasi'
  }
  return readMore[props.language] || readMore['en']
}
</script>

<style scoped>
/* Same styles as BlogIndex.vue */
.blog-index {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

.blog-header {
  text-align: center;
  margin-bottom: 3rem;
}

.blog-header h1 {
  font-size: 3rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.blog-header p {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
}

.blog-posts {
  display: grid;
  gap: 2rem;
}

.blog-post-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  background: var(--vp-c-bg);
}

.blog-post-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.post-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

.post-title {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.post-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.3s ease;
}

.post-title a:hover {
  color: var(--vp-c-brand-1);
}

.post-excerpt {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
}

.post-author {
  color: var(--vp-c-text-2);
}

.read-more {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.read-more:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .blog-index {
    padding: 1rem;
  }
  
  .blog-header h1 {
    font-size: 2rem;
  }
  
  .blog-post-card {
    padding: 1.5rem;
  }
  
  .post-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .post-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
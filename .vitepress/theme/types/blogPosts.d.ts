// Type definitions for blog posts data loader
declare module '../../data/blogPosts.data.js' {
  export interface BlogPost {
    url: string
    frontmatter: {
      title: string
      date: string
      excerpt?: string
      author?: string
      tags?: string[]
      [key: string]: any
    }
    language: 'en' | 'fi' | 'ar' | 'ee'
  }
  
  export const data: BlogPost[]
}
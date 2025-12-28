<template>
  <div class="max-w-3xl px-6 py-12 mx-auto md:py-20">
    <section class="mb-16">
      <h1 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">Writing</h1>
      <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Posts from my <a href="https://benjheath.substack.com" target="_blank" class="underline hover:text-gray-900 dark:hover:text-white">Substack</a>.
      </p>
    </section>

    <section>
      <div v-if="pending" class="text-gray-600 dark:text-gray-400">
        Loading posts...
      </div>
      
      <div v-else-if="error" class="text-red-600 dark:text-red-400">
        Failed to load posts. Please try again later.
      </div>
      
      <div v-else class="space-y-8">
        <article v-for="post in posts" :key="post.link" class="flex gap-4">
          <a 
            v-if="post.thumbnail" 
            :href="post.link" 
            target="_blank"
            class="flex-shrink-0"
          >
            <img 
              :src="post.thumbnail" 
              :alt="post.title"
              class="object-cover w-24 h-24 rounded-lg md:w-32 md:h-32"
            />
          </a>
          <div class="flex-1 min-w-0">
            <h2 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              <a 
                :href="post.link" 
                target="_blank"
                class="hover:underline"
              >
                {{ post.title }}
              </a>
            </h2>
            <p 
              class="mb-2 leading-relaxed text-gray-700 dark:text-gray-300 line-clamp-3"
              v-html="stripHtml(post.description)"
            />
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ formatDate(post.pubDate) }}
            </p>
          </div>
        </article>
        
        <p v-if="posts?.length === 0" class="italic text-gray-600 dark:text-gray-400">
          No posts yet...
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: posts, pending, error } = await useFetch('/api/substack')

function stripHtml(html: string | undefined | null): string {
  if (!html) return ''
  // Remove HTML tags and decode entities for preview
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .substring(0, 300) + (html.length > 300 ? '...' : '')
}

function formatDate(dateString: string | undefined | null): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

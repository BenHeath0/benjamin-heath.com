<template>
  <div class="max-w-3xl px-6 py-12 mx-auto md:py-20">
    <!-- Bio Section -->
    <section class="mb-16">
      <h1 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">Ben Heath</h1>
      <div class="space-y-4">
        <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I'm a Boston-based software engineer and Engineering Manager at Recharge. 
          I lead a six-engineer full-stack team building storefront widgets, backend services, and other customer-facing features. 
          Prior to this role, I was a senior engineer on the team.
        </p>
        <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Previously I worked at MITRE building software in the public interest.
        </p>
      </div>
    </section>

    <!-- Blog Articles / Projects Section -->
    <section>
      <h2 class="mb-2 text-2xl font-semibold text-gray-900 md:text-3xl dark:text-white">Things my teams have built</h2>
      <p class="mb-8 text-gray-600 dark:text-gray-400">
        Here are some articles/blogs/case studies of features my teams have built over the years.
      </p>
      <div class="space-y-8">
        <article 
          v-for="article in articles.slice().reverse()" 
          :key="article.id"
        >
          <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            <a 
              :href="article.url" 
              :target="article.external ? '_blank' : undefined"
              class="hover:underline"
            >
              {{ article.title }}
            </a>
          </h3>
          <p class="mb-2 leading-relaxed text-gray-700 dark:text-gray-300">
            {{ article.description }}
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ article.date }}
          </p>
        </article>
        <p v-if="articles.length === 0" class="italic text-gray-600 dark:text-gray-400">
          Articles coming soon...
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
  external?: boolean;
}

// Add your blog articles/projects here
const articles: Article[] = [
  {
    id: 1,
    title: "The Fight is in Us - MITRE",
    description: '"The Fight Is In Us" was a U.S. government–led public awareness and donor recruitment campaign launched during the COVID-19 pandemic to encourage recovered patients to donate convalescent plasma for use as an investigational treatment.',
    date: "2020-2021",
    url: "https://newsnetwork.mayoclinic.org/discussion/calling-all-covid-19-survivors-now-you-could-help-others-defeat-it/",
    external: true
  },
  {
    id: 2,
    title: "Checkout Upsell - Case Study",
    description: "Case study on how Puracy used the Checkout Incentives features built by our team to double their subscription checkouts.",
    date: "2024",
    url: "https://getrecharge.com/case-studies/puracy-doubles-subscription-checkouts/",
    external: true
  }
];
</script>

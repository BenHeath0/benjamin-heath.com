interface SeoOptions {
  title: string
  description?: string
  path: string
}

export function useSeo({ title, description, path }: SeoOptions) {
  const { siteUrl, siteImage, siteDescription } = useRuntimeConfig().public
  const url = `${siteUrl}${path}`
  const desc = description ?? siteDescription

  useSeoMeta({
    title,
    description: desc,
    ogTitle: title,
    ogDescription: desc,
    ogUrl: url,
    ogImage: siteImage,
    twitterTitle: title,
    twitterDescription: desc,
    twitterImage: siteImage
  })

  useHead({
    link: [{ rel: 'canonical', href: url }]
  })
}

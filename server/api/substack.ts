export default defineEventHandler(async () => {
  // Add cache-busting timestamp to avoid stale CDN responses
  const feedUrl = `https://benjheath.substack.com/feed?_t=${Date.now()}`
  
  const response = await fetch(feedUrl, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
    },
  })
  const xml = await response.text()
  
  // Parse the XML to extract posts
  const posts: Array<{
    title: string
    link: string
    pubDate: string
    description: string
    thumbnail: string | null
  }> = []
  
  // Extract items from the RSS feed
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  let match
  
  while ((match = itemRegex.exec(xml)) !== null) {
    const itemContent = match[1]
    
    const title = itemContent.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1] 
      || itemContent.match(/<title>([\s\S]*?)<\/title>/)?.[1] 
      || ''
    
    const link = itemContent.match(/<link>([\s\S]*?)<\/link>/)?.[1] || ''
    
    const pubDate = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] || ''
    
    const description = itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1]
      || itemContent.match(/<description>([\s\S]*?)<\/description>/)?.[1]
      || ''
    
    // Extract thumbnail from enclosure tag
    const enclosureMatch = itemContent.match(/<enclosure[^>]+url="([^"]+)"[^>]*type="image\/[^"]*"/)
      || itemContent.match(/<enclosure[^>]+type="image\/[^"]*"[^>]+url="([^"]+)"/)
    const thumbnail = enclosureMatch?.[1]?.replace(/&amp;/g, '&') || null
    
    posts.push({
      title: title.trim(),
      link: link.trim(),
      pubDate: pubDate.trim(),
      description: description.trim(),
      thumbnail
    })
  }
  
  return posts
})

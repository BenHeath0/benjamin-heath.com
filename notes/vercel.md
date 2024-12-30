# Vercel Notes

Getting this working on vercel was a pain in the ass.

Deploying to the default [https://ben-heath0-github-io.vercel.app/](https://ben-heath0-github-io.vercel.app/) was easy, but getting it on
[benjamin-heath.com](benjamin-heath.com) was annoying

## HOW TO

### Cloudfare

- Need `CNAME` w/ `www` as name pointed to `ben-heath0-github-io.vercel.app` with proxy `ON`
- Need `A` record with `@` as name pointed to `76.76.21.21`, with proxy `OFF`. They provide this IP from vercel

### Vercel

- Add `benjamin-heath.com` as a domain, and then do their recommendation, which takes `benjamin-heath.com` and redirects it to `www.benjamin-heath.com`

### Other notes

- This is NOT what they tell you to do. I tried pointing a `CNAME` at `cname.vercel-dns.com` but it didnt work 🤷
- Seems to be working though?

### Docs

For when this breaks and i need help again

- [vercel x cloudflare doc](https://vercel.com/docs/integrations/external-platforms/cloudflare)
- [vercel domain management](https://vercel.com/ben-heaths-projects/benjamin-heath.com/settings/domains)
- [kinda helpful github guy](https://gist.github.com/nivethan-me/a56f18b3ffbad04bf5f35085972ceb4d)
  - so like, he was trying his best and its a very recent doc... but he did the "use vercel DNS" thing that didnt work for me. maybe itll work in future

# LFG Labs — .md domain portfolio

A minimal, accessible static site listing 12 short `.md` domains held as
long-term brand assets. Built with Nextra + Next.js, statically exported,
deployed on Vercel.

## Stack

- Next.js 15 + Nextra 4 (theme-blog base, customised)
- Pure CSS (no Tailwind), serif typography inspired by `thomas.md`
- Static export (`output: 'export'`)

## Edit prices

Edit `data/domains.ts`. Order is preserved as written — keep it sorted by
price descending.

## Local dev

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## Deploy

```bash
vercel link --team lfglabs
vercel --prod
```

The 12 `.md` domains are configured as project aliases on Vercel. Their DNS
records live in the matching Cloudflare zones (A → 76.76.21.21, CNAME www
→ cname.vercel-dns.com, TXT verification).
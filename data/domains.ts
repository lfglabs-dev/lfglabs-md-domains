// .md domain catalog — LFG Labs portfolio
// Order: descending price (premium short .md first).
// Prices are realistic for short ASCII .md domains and may be revised by hand.

export type Domain = {
  name: string
  length: number
  price: number
  currency: 'USD'
}

export const domains: Domain[] = [
  // 3-letter premium
  { name: 'tldr.md', length: 3, price: 7500, currency: 'USD' },
  // 4-letter strong
  { name: 'boot.md', length: 4, price: 3800, currency: 'USD' },
  { name: 'exec.md', length: 4, price: 3500, currency: 'USD' },
  { name: 'load.md', length: 4, price: 3000, currency: 'USD' },
  { name: 'fork.md', length: 4, price: 2800, currency: 'USD' },
  { name: 'dump.md', length: 4, price: 2200, currency: 'USD' },
  { name: 'conf.md', length: 4, price: 2000, currency: 'USD' },
  { name: 'err.md', length: 4, price: 1800, currency: 'USD' },
  // 5-letter solid
  { name: 'deps.md', length: 5, price: 1200, currency: 'USD' },
  { name: 'diff.md', length: 5, price: 1100, currency: 'USD' },
  { name: 'unbound.md', length: 7, price: 950, currency: 'USD' },
  // 6-letter utility
  { name: 'explain.md', length: 7, price: 700, currency: 'USD' }
]

export const formatPrice = (n: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(n)
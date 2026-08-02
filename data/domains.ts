// .md domain catalog — LFG Labs portfolio
// Order: descending price (premium short .md first).
// `length` is the count of letters in the SLD (before ".md").

export type Domain = {
  name: string
  length: number
  price: number
  currency: 'USD'
}

export const domains: Domain[] = [
  // 3-letter: rarest
  { name: 'err.md', length: 3, price: 9000, currency: 'USD' },
  // 4-letter strong
  { name: 'tldr.md', length: 4, price: 4000, currency: 'USD' },
  { name: 'boot.md', length: 4, price: 3200, currency: 'USD' },
  { name: 'exec.md', length: 4, price: 3000, currency: 'USD' },
  { name: 'load.md', length: 4, price: 2600, currency: 'USD' },
  { name: 'fork.md', length: 4, price: 2400, currency: 'USD' },
  { name: 'dump.md', length: 4, price: 2200, currency: 'USD' },
  { name: 'conf.md', length: 4, price: 2000, currency: 'USD' },
  { name: 'deps.md', length: 4, price: 1900, currency: 'USD' },
  { name: 'diff.md', length: 4, price: 1800, currency: 'USD' },
  // 7-letter
  { name: 'explain.md', length: 7, price: 5000, currency: 'USD' },
  { name: 'unbound.md', length: 7, price: 950, currency: 'USD' }
]

export const formatPrice = (n: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(n)
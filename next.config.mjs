import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: false,
  search: false,
  staticImage: true
})

export default withNextra({
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true }
})
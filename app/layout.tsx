import './styles.css'
import { Footer, Layout, Navbar } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'

export const metadata = {
  title: '.md domains — LFG Labs',
  description:
    'A curated portfolio of short .md domains held as long-term brand assets by LFG Labs.',
  icons: { icon: '/favicon.svg' }
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head
        backgroundColor={{ dark: '#131110', light: '#fbfaf6' }}
        color={{ hue: 45, saturation: 12, lightness: { light: 32, dark: 74 } }}
      />
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()} />
          {children}
          <Footer>
            {new Date().getFullYear()} ·{' '}
            <a href="https://lfglabs.dev">LFG Labs</a> ·{' '}
            <a href="https://thomas.md">Thomas Marchand</a>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
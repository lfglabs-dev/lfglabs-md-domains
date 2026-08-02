import { domains, formatPrice } from '../data/domains'

export default function Home() {
  return (
    <main>
      <h1>A handful of <code>.md</code> domains I&rsquo;m holding.</h1>

      <p className="lede">
        I picked up these names a while back because they&rsquo;re short, easy to
        say out loud, and useful for the kind of product launches and tools I
        tend to build. Some of them I&rsquo;ll keep, the others I&rsquo;m open
        to parting with. Prices below, in USD, sorted most expensive first.
      </p>

      <table className="domains" aria-label="Available .md domains">
        <thead>
          <tr>
            <th scope="col">Domain</th>
            <th scope="col" className="len">Length</th>
            <th scope="col" className="price">Price</th>
          </tr>
        </thead>
        <tbody>
          {domains.map((d) => (
            <tr key={d.name}>
              <td className="name">
                <a href={`https://${d.name}`} rel="noopener noreferrer">
                  {d.name}
                </a>
              </td>
              <td className="len">{d.length}</td>
              <td className="price">{formatPrice(d.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Why these ones</h2>
      <p>
        Short names that read well out loud, work as a project handle, and
        don&rsquo;t need explaining. Mostly bought for personal use, a couple
        I&rsquo;d rather see go to someone who&rsquo;ll actually use them.
      </p>
      <p>
        Want one? Drop me a line and tell me what you have in mind.
      </p>

      <section className="contact" aria-label="Contact">
        <p>
          Contact: <a href="https://x.com/th0rgal_">x.com/th0rgal_</a>
          {' · '}
          <a href="mailto:dns@thomas.md">dns@thomas.md</a>
        </p>
      </section>
    </main>
  )
}
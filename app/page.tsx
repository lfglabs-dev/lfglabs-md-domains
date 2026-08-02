import { domains, formatPrice } from '../data/domains'

export default function Home() {
  return (
    <main>
      <h1>Some <code>.md</code> names we&rsquo;re holding.</h1>

      <p className="lede">
        LFG Labs picked these up as a long-term position. When Claude Opus 4.5
        came out we figured out humans wouldn&rsquo;t be the only ones on the
        web anymore &mdash; and <code>.md</code> domains are a natural fit for
        products built for LLMs. Prices below, sorted most expensive first.
        All firm but negotiable.
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

      <h2>Why <code>.md</code>, why now</h2>
      <p>
        Every model reads and writes markdown natively. Every README, every
        docs site, every agent tool speaks it. A short <code>.md</code> name
        is the natural home for that &mdash; a landing page, a docs root, a
        URL a model can hand back to a user without anyone having to think
        about it.
      </p>
      <p>
        We expect these names to keep appreciating as the AI era matures.
        It&rsquo;s a small, focused bet.
      </p>
      <p>
        Want one? Tell us which and what for. We&rsquo;ll figure out the
        rest.
      </p>

      <section className="contact" aria-label="Contact">
        <p>
          <a href="https://x.com/th0rgal_">@th0rgal_</a>
          {' · '}
          <a href="mailto:dns@thomas.md">dns@thomas.md</a>
        </p>
      </section>
    </main>
  )
}
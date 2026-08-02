import { domains, formatPrice } from '../data/domains'

export default function Home() {
  return (
    <main>
      <h1>Some <code>.md</code> names we&rsquo;re holding.</h1>

      <p className="lede">
        LFG Labs picked these up as a long-term position. When Claude Opus 4.5
        came out we figured out humans wouldn&rsquo;t be the only ones on the
        web anymore, and <code>.md</code> domains are a natural fit for
        products built for LLMs. Prices below, sorted most expensive first.
        Prices are negotiable if you take several.
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
        Models read and write markdown natively. A short <code>.md</code> name
        probably makes sense for something targeting LLMs. We expect these
        names to keep appreciating as the AI era matures.
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
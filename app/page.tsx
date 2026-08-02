import { domains, formatPrice } from '../data/domains'

export default function Home() {
  return (
    <main>
      <h1>A small portfolio of <code>.md</code> domains.</h1>

      <p className="lede">
        Twelve short, memorable <code>.md</code> names held by LFG Labs as long-term
        brand assets. Acquired as a focused investment, not for speculation.
        Each is priced in USD and listed below in descending order.
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

      <h2>How to buy one</h2>
      <p>
        A name transfers cleanly to a buyer of choice (Cloudflare Registrar,
        another registrar, or a deal broker). Payment in USDT or wire; no escrow
        drama, no rush.
      </p>
      <p>
        Reach out and tell me which name you want and how you'd like to use it.
        I'll reply with transfer options and timeline.
      </p>

      <h2>About this collection</h2>
      <p>
        All names were registered as a deliberate long-term position: short,
        pronounceable, and useful for product launches, command-line tools,
        personal sites, or brandable shortcuts. They are listed here so that
        anyone interested can see what is held and at what price.
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
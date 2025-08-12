export const metadata = {
  title: 'FAQ',
  description: 'Shipping, storage, allergens, and refunds for Mama Ow.'
}

export default function FAQPage() {
  return (
    <main className="container py-8 space-y-6">
      <h1 className="text-2xl font-bold">FAQ</h1>

      <section className="space-y-2">
        <h2 className="font-semibold">Shipping</h2>
        <p>West Malaysia: RM 5 | Free above RM 60.</p>
        <p>East Malaysia: From RM 12 (calculated at checkout).</p>
        <p>Singapore: From RM 20 (calculated at checkout).</p>
        <p>No PO Box or parcel locker deliveries; failed attempts twice = return & refund (minus delivery fee).</p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">Storage</h2>
        <p>Oil separation is natural — stir before use. Store in a cool, dry place.</p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">Allergens</h2>
        <p>Contains peanuts.</p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">Refunds</h2>
        <p>Parcels returned after two failed delivery attempts will be refunded minus delivery fee.</p>
      </section>
    </main>
  )
}

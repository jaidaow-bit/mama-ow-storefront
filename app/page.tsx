import Hero from '../components/Hero'
import FeaturesStrip from '../components/FeaturesStrip'
import ProductCard from '../components/ProductCard'
import BundleBuilder from '../components/BundleBuilder'
import products from '../data/products.json'

export const metadata = {
  title: 'Home',
  description:
    "Mama Ow — warm, family-style peanut butter. Naturally sweet from roasted peanuts. No sugar, no salt, no preservatives."
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturesStrip />
      <section className="container py-8 space-y-6">
        <div className="rounded-xl bg-pbj-beige/40 p-4">
          <p className="text-sm">
            Shipping — West Malaysia: RM 5 | Free above RM 60. East Malaysia: From RM 12 (calculated at checkout). Singapore: From RM 20 (calculated at checkout). No PO Box or parcel locker deliveries; failed attempts twice = return & refund (minus delivery fee).
          </p>
        </div>
        <h2 className="text-xl font-bold">Shop Favourites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map(p => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <BundleBuilder />
      </section>
    </main>
  )
}

import ProductCard from '../../components/ProductCard'
import products from '../../data/products.json'
import { Suspense } from 'react'

export const metadata = {
  title: 'Shop',
  description: 'Shop Mama Ow peanut butter — 250g jars, RM 18 each.'
}

function Filters() {
  return (
    <aside className="flex gap-2 flex-wrap text-sm">
      <span className="px-3 py-1 rounded-full bg-pbj-grey/50">Texture: Chunky</span>
      <span className="px-3 py-1 rounded-full bg-pbj-grey/50">Texture: Smooth</span>
      <span className="px-3 py-1 rounded-full bg-pbj-grey/50">Sugar/Salt: No Sugar No Salt</span>
      <span className="px-3 py-1 rounded-full bg-pbj-grey/50">Sugar/Salt: Less Sugar Less Salt</span>
    </aside>
  )
}

export default function ShopPage() {
  return (
    <main className="container py-8 space-y-6">
      <h1 className="text-2xl font-bold">Shop Mama Ow</h1>
      <Suspense>
        <Filters />
      </Suspense>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map(p => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </main>
  )
}

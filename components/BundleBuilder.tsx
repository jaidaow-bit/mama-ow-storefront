'use client'
import { useCartStore } from '../context/CartContext'
import products from '../data/products.json'
import { trackAddToCart } from '../context/ga'

export default function BundleBuilder() {
  const addToCart = useCartStore(s => s.addToCart)
  const cartTotal = useCartStore(s => s.total)
  const addBundle = (count: number) => {
    const picks = (products as any[]).slice(0, count)
    picks.forEach(p => {
      addToCart(p as any)
      trackAddToCart(p as any)
    })
  }
  const remainingForFree = Math.max(0, 60 - cartTotal)
  return (
    <section className="card p-4">
      <h2 className="font-bold text-lg">Bundle Builder</h2>
      <p className="text-sm mb-3">Build a 2-pack or 4-pack. Free shipping in West Malaysia at RM 60.</p>
      <div className="flex gap-2">
        <button className="btn btn-primary" onClick={() => addBundle(2)}>Add 2-Pack</button>
        <button className="btn btn-secondary" onClick={() => addBundle(4)}>Add 4-Pack</button>
      </div>
      <p className="mt-3 text-sm">
        {remainingForFree > 0
          ? `Add RM ${remainingForFree.toFixed(2)} more for free West Malaysia shipping.`
          : 'You’ve hit the free shipping threshold for West Malaysia!'}
      </p>
    </section>
  )
}

'use client'
import Link from 'next/link'
import { useCartStore } from '../context/CartContext'
import { trackAddToCart } from '../context/ga'
type Product = {
  name: string
  slug: string
  price: number
  description: string
  ingredients: string
}

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore(s => s.addToCart)
  const onAdd = () => {
    addToCart(product as any)
    trackAddToCart(product as any)
  }
  return (
    <article className="card p-4 flex flex-col gap-2">
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="text-sm text-pbj-nutty">RM {product.price}</p>
      <div className="mt-2 flex gap-2">
        <button onClick={onAdd} className="btn btn-primary" aria-label={`Add ${product.name} to cart`}>
          Add to Cart
        </button>
        <Link href={`/product/${product.slug}`} className="btn btn-secondary" aria-label={`View ${product.name}`}>
          View
        </Link>
      </div>
    </article>
  )
}

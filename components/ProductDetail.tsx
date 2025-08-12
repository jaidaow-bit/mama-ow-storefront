'use client'
import { useCartStore } from '../context/CartContext'
import { trackAddToCart } from '../context/ga'
type Product = {
  name: string
  slug: string
  price: number
  description: string
  ingredients: string
}

export default function ProductDetail({ product }: { product: Product }) {
  const addToCart = useCartStore(s => s.addToCart)
  const onAdd = () => {
    addToCart(product as any)
    trackAddToCart(product as any)
  }
  return (
    <main className="container py-8 space-y-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-pbj-nutty">RM {product.price} • 250g jar</p>

      <section className="space-y-2">
        <p>{product.description}</p>
        <p><strong>Ingredients:</strong> {product.ingredients}</p>
        <p><strong>Nutrition (per 100g):</strong> Energy 2440 kJ, Protein 26g, Fat 50g, Carbs 12g (est.).</p>
        <p><strong>Nutrition (per serving ~20g):</strong> Energy 488 kJ, Protein 5.2g, Fat 10g, Carbs 2.4g (est.).</p>
        <p><strong>Allergen Warning:</strong> Peanuts</p>
        <p><strong>Storage Tips:</strong> Oil separation is natural, stir before use.</p>
      </section>

      <div className="flex gap-3">
        <button onClick={onAdd} className="btn btn-primary">Add to Cart</button>
      </div>
    </main>
  )
}

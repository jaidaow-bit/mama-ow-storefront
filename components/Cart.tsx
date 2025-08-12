'use client'
import { useCartStore } from '../context/CartContext'
import { trackBeginCheckout, trackPurchase } from '../context/ga'
import { useState } from 'react'

export default function Cart() {
  const { items, removeFromCart, clear, total } = useCartStore()
  const [open, setOpen] = useState(false)

  const beginCheckout = () => {
    trackBeginCheckout(items as any, total)
    alert('Checkout started (demo).')
  }

  const confirmPurchase = () => {
    trackPurchase(items as any, total, `MO-${Date.now()}`)
    alert('Thank you for your purchase (demo).')
    clear()
  }

  return (
    <aside
      className={`fixed z-40 top-0 right-0 h-full w-80 transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
      aria-label="Shopping cart panel"
    >
      <button
        className="fixed right-4 bottom-6 btn btn-primary shadow-lg"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="cart-panel"
      >
        Cart ({items.length})
      </button>

      <div id="cart-panel" className="h-full bg-pbj-white border-l border-pbj-grey/60 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-3">Cart</h2>
        {items.length === 0 ? (
          <p className="text-sm">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {items.map((it, idx) => (
              <li key={`${it.slug}-${idx}`} className="flex items-center justify-between">
                <span className="text-sm">{it.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">RM {it.price}</span>
                  <button
                    className="text-xs underline"
                    onClick={() => removeFromCart(it.slug)}
                    aria-label={`Remove ${it.name}`}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 border-t pt-3 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>RM {total.toFixed(2)}</span>
          </div>
          <p className="text-xs text-pbj-nutty">
            West Malaysia: RM 5 | Free above RM 60. East Malaysia: From RM 12. Singapore: From RM 20.
          </p>
          <div className="flex gap-2">
            <button className="btn btn-secondary w-full" onClick={beginCheckout}>Begin Checkout</button>
            <button className="btn btn-primary w-full" onClick={confirmPurchase}>Purchase (Demo)</button>
          </div>
        </div>
      </div>
    </aside>
  )
}

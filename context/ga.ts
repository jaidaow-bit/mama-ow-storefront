type Product = { name: string; slug: string; price: number }

const gtag = (...args: any[]) => {
  if (typeof window === 'undefined') return
  // @ts-ignore
  if (typeof window.gtag !== 'function') return
  // @ts-ignore
  window.gtag(...args)
}

export const trackAddToCart = (product: Product) => {
  gtag('event', 'add_to_cart', {
    currency: 'MYR',
    value: product.price,
    items: [
      {
        item_id: product.slug,
        item_name: product.name,
        price: product.price,
        quantity: 1
      }
    ]
  })
}

export const trackBeginCheckout = (items: Product[], total: number) => {
  gtag('event', 'begin_checkout', {
    currency: 'MYR',
    value: total,
    items: items.map(i => ({
      item_id: i.slug,
      item_name: i.name,
      price: i.price,
      quantity: 1
    }))
  })
}

export const trackPurchase = (items: Product[], total: number, transactionId: string) => {
  gtag('event', 'purchase', {
    currency: 'MYR',
    transaction_id: transactionId,
    value: total,
    items: items.map(i => ({
      item_id: i.slug,
      item_name: i.name,
      price: i.price,
      quantity: 1
    }))
  })
}

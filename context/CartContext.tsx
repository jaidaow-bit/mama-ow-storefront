'use client'
import { create } from 'zustand'

type Item = {
  name: string
  slug: string
  price: number
}

type Store = {
  items: Item[]
  total: number
  addToCart: (p: Item) => void
  removeFromCart: (slug: string) => void
  clear: () => void
}

export const useCartStore = create<Store>((set, get) => ({
  items: [],
  total: 0,
  addToCart: (p) =>
    set((state) => ({
      items: [...state.items, p],
      total: state.total + p.price
    })),
  removeFromCart: (slug) =>
    set((state) => {
      const idx = state.items.findIndex(i => i.slug === slug)
      if (idx === -1) return state
      const next = [...state.items]
      const [removed] = next.splice(idx, 1)
      return { items: next, total: state.total - (removed?.price ?? 0) }
    }),
  clear: () => set({ items: [], total: 0 })
}))

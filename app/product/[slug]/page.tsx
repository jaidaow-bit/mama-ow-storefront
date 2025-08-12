import { notFound } from 'next/navigation'
import products from '../../../data/products.json'
import ProductDetail from '../../../components/ProductDetail'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = (products as any[]).find(p => p.slug === params.slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/product/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://mama-ow.example.com/product/${product.slug}`
    }
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = (products as any[]).find(p => p.slug === params.slug)
  if (!product) return notFound()
  return <ProductDetail product={product} />
}

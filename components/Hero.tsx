import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-pbj-beige">
      <div className="container py-10 text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Mama Ow Peanut Butter</h1>
        <p className="max-w-2xl mx-auto">
          Warm, heartfelt, family-style peanut butter by Jaida Ow. Naturally sweet from roasted peanuts —
          no sugar, no salt, no preservatives.
        </p>
        <div className="flex justify-center gap-3">
          <Link href="/shop" className="btn btn-primary">Shop Now</Link>
          <Link href="/about" className="btn btn-secondary">Our Story</Link>
        </div>
      </div>
    </section>
  )
}

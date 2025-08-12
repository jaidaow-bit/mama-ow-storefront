import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-pbj-deep text-white">
      <div className="container py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">Mama Ow</h3>
          <p className="text-sm mt-2">
            Warm, heartfelt, family-style peanut butter by Jaida Ow. Naturally sweet from roasted peanuts — no sugar, no salt, no preservatives.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Pages</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/recipes">Recipes</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Shipping</h4>
          <p className="text-sm mt-2">West Malaysia: RM 5 | Free above RM 60</p>
          <p className="text-sm">East Malaysia: From RM 12 (calculated at checkout)</p>
          <p className="text-sm">Singapore: From RM 20 (calculated at checkout)</p>
          <p className="text-sm mt-2">No PO Box or parcel locker deliveries; failed attempts twice = return & refund (minus delivery fee).</p>
        </div>
      </div>
      <div className="text-center text-xs py-4 bg-black/20">© {new Date().getFullYear()} Mama Ow</div>
    </footer>
  )
}

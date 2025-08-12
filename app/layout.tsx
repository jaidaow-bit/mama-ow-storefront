import './globals.css'
import Footer from '../components/Footer'
import Cart from '../components/Cart'

export const metadata = {
  metadataBase: new URL('https://mama-ow.example.com'),
  title: {
    default: 'Mama Ow Peanut Butter',
    template: '%s | Mama Ow Peanut Butter'
  },
  description:
    "Warm, heartfelt peanut butter made with love by Jaida Ow’s family. Naturally sweet from roasted peanuts — no sugar, no salt, no preservatives.",
  openGraph: {
    title: 'Mama Ow Peanut Butter',
    description:
      "Warm, heartfelt peanut butter made with love by Jaida Ow’s family. Naturally sweet from roasted peanuts — no sugar, no salt, no preservatives.",
    url: 'https://mama-ow.example.com',
    siteName: 'Mama Ow',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mama Ow Peanut Butter',
    description:
      "Warm, heartfelt peanut butter made with love by Jaida Ow’s family. Naturally sweet from roasted peanuts — no sugar, no salt, no preservatives."
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  return (
    <html lang="en">
      <body className="bg-pbj-white text-pbj-deep">
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { anonymize_ip: true });
                `
              }}
            />
          </>
        )}
        <div className="min-h-screen flex flex-col">
          <Cart />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Mama Ow.'
}

export default function ContactPage() {
  return (
    <main className="container py-8 space-y-4">
      <h1 className="text-2xl font-bold">Contact</h1>
      <form
        className="card p-4 space-y-3"
        onSubmit={(e) => {
          e.preventDefault()
          alert('Thanks for reaching out to Mama Ow!')
        }}
        aria-label="Contact form"
      >
        <label className="block">
          <span className="text-sm">Name</span>
          <input className="mt-1 w-full border rounded p-2" required name="name" />
        </label>
        <label className="block">
          <span className="text-sm">Email</span>
          <input type="email" className="mt-1 w-full border rounded p-2" required name="email" />
        </label>
        <label className="block">
          <span className="text-sm">Message</span>
          <textarea className="mt-1 w-full border rounded p-2" required name="message" rows={5} />
        </label>
        <button className="btn btn-primary" type="submit">Send</button>
      </form>
    </main>
  )
}

const features = [
  { label: "100% Natural", desc: "Just roasted peanuts, nothing else" },
  { label: "Plant-Based", desc: "Perfect for vegetarians & vegans" },
  { label: "No Preservatives", desc: "Freshness without the fake stuff" },
  { label: "No Colourings", desc: "Nature’s colour is all we need" },
  { label: "No Artificial Flavouring", desc: "Pure peanut taste, no extras" },
  { label: "No Added Oil", desc: "Creamy from peanuts alone" },
  { label: "Made with Love", desc: "From our family kitchen to yours" }
]

export default function FeaturesStrip() {
  return (
    <div className="bg-pbj-grey/40">
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3 py-4">
        {features.map(f => (
          <div key={f.label} className="text-center">
            <p className="font-semibold text-sm">{f.label}</p>
            <p className="text-xs">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

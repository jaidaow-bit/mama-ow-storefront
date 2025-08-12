export const metadata = {
  title: 'Recipes',
  description:
    "Recipe ideas from Jaida Ow — delicious ways to enjoy Mama Ow Peanut Butter."
}

export default function RecipesPage() {
  return (
    <main className="container py-8 space-y-4">
      <h1 className="text-2xl font-bold">Recipes</h1>
      <p>
        Embed recipe videos from Jaida Ow’s YouTube channel showing ways to use the PB.
      </p>
      <div className="rounded-xl overflow-hidden border">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed?listType=playlist&list=PL_MAMA_OW_RECIPE_PLAYLIST"
          title="Mama Ow Recipe Videos"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </main>
  )
}

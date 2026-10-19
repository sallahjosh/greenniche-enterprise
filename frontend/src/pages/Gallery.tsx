import { brand } from '@/lib/brand'

const galleryImages = [
  { url: '/images/gn-image-1.jpg', tag: 'Operations' },
  { url: '/images/gn-image-2.jpg', tag: 'Products' },
  { url: '/images/gn-image-3.jpg', tag: 'Processing' },
  { url: '/images/gn-image-4.jpg', tag: 'Processing' },
  { url: '/images/gn-image-5.jpg', tag: 'Products' },
  { url: '/images/gn-image-6.jpg', tag: 'Operations' },
]

export function Gallery() {
  return (
    <>
      <section className="border-b border-brand-100 bg-brand-50/40">
        <div className="container-page py-12 md:py-16">
          <h1 className="text-3xl font-extrabold md:text-4xl">Gallery</h1>
          <p className="mt-3 max-w-2xl text-lg text-brand-900/80">
            A look at GreenNiche products, processing and the community behind our work.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((img) => (
            <figure key={img.url} className="card overflow-hidden">
              <img src={img.url} alt={`${brand.name} — ${img.tag} (caption to be confirmed)`} className="h-56 w-full object-cover" loading="lazy" />
              <figcaption className="px-4 py-3 text-xs text-brand-900/60">
                {img.tag} · caption to be confirmed
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-sm text-brand-900/60">
          These photographs are the images you supplied. Administrators will be able to upload,
          caption and publish gallery images from the dashboard once that module is built.
        </p>
      </section>
    </>
  )
}

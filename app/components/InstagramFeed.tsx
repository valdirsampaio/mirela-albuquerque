import Image from 'next/image'
import { Instagram } from 'lucide-react'

// Placeholder Unsplash images representing hair care / trichology content
const POSTS = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=75',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=75',
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=75',
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=75',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=75',
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=75',
]

export default function InstagramFeed() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF4E8]">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow mb-2 block">Redes sociais</span>
            <h2 className="heading-section text-[clamp(2rem,4vw,3rem)] text-[#2C1F14]">
              Acompanhe no{' '}
              <em className="italic text-[#9E7A42]">Instagram</em>
            </h2>
          </div>
          <a
            href="https://instagram.com/mirela_albuquerque"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2"
          >
            <Instagram size={14} strokeWidth={1.5} />
            @mirela_albuquerque
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {POSTS.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/mirela_albuquerque"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden block"
              aria-label={`Post do Instagram ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Conteúdo educativo sobre tricologia - post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-[rgba(44,31,20,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={20} className="text-[#FDFAF5]" strokeWidth={1.5} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

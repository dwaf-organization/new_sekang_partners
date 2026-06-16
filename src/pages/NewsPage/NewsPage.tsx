import { NewsGallerySection } from '@/components/organisms/newsgallerysection/NewsGallerySection'
import { NewsPageHeroSection } from '@/components/organisms/newspageherosection/NewsPageHeroSection'
import { newsGalleryItems, newsHero } from '@/data/news.data'

export function NewsPage() {
  return (
    <main className="min-h-svh bg-white font-primary">
      <NewsPageHeroSection hero={newsHero} />
      <NewsGallerySection items={newsGalleryItems} />
    </main>
  )
}

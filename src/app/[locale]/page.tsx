import { Header } from '@/components/molecules/header/header'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('home_page')

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}

export default async function HomePage() {
  const t = await getTranslations('navbar')
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
    </main>
  )
}

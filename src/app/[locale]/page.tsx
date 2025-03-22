import { Experience } from '@/components/molecules/experience/experience'
import { Header } from '@/components/molecules/header/header'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('metadata')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Experience />
    </main>
  )
}

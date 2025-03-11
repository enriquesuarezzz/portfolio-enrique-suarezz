import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'

export default async function HomePage() {
  const t = await getTranslations('HomePage')
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/">{t('title')}</Link>
    </div>
  )
}

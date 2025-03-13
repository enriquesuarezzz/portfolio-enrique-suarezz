import Link from 'next/link'
import LocaleSwitcher from '../locale_switcher/locale_switcher'
import { getTranslations } from 'next-intl/server'
import { OnestText } from '@/components/atoms/onest_text'

export default async function HomePage() {
  const t = await getTranslations('navbar')
  const data = [
    {
      title: t('experience'),
      href: '/#experience',
    },
    {
      title: t('skills'),
      href: '/#skills',
    },
    {
      title: t('proyects'),
      href: '/#proyects',
    },
    {
      title: t('contact'),
      href: 'mailto:enriquesuarezmartin@gmail.com',
    },
  ]

  return (
    <nav className="fixed top-0 mx-auto flex w-full items-center justify-center gap-3 pt-5 md:gap-5">
      {/* Navbar links */}
      {data.map((item) => (
        <Link href={item.href} key={item.title}>
          <OnestText
            tag="h1"
            fontSize="16px"
            style="bold"
            className="hover:text-orange relative mx-auto block w-fit text-black text-white after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-[#ccb32b] after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
          >
            {item.title}
          </OnestText>
        </Link>
      ))}
      {/* Language selection */}
      <div className="flex gap-2 md:ml-5 md:gap-3">
        <LocaleSwitcher />
      </div>
    </nav>
  )
}

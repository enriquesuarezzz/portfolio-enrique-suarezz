'use client'
import Link from 'next/link'
import { OnestText } from '@/components/atoms/onest_text'
import { useRouter } from 'next/navigation'
import English from '@/components/atoms/svg/english'
import Spanish from '@/components/atoms/svg/spanish'

interface NavbarItem {
  translations: {
    experience: string
    skills: string
    proyects: string
    contact: string
  }
}

export default function Navbar({ translations }: NavbarItem) {
  const router = useRouter()
  const changeLanguage = (locale: string) => {
    router.push(`/${locale}`)
  }

  const data = [
    {
      title: translations.experience,
      href: '/#experience',
    },
    {
      title: translations.skills,
      href: '/#skills',
    },
    {
      title: translations.proyects,
      href: '/#projects',
    },
    {
      title: translations.contact,
      href: 'mailto:enriquesuarezmartin@gmail.com',
    },
  ]

  return (
    <nav className="fixed top-0 mx-auto flex w-full items-center justify-center gap-3 pt-5 md:gap-5">
      {/* Navbar links */}
      {data.map((item) => (
        <Link href={item.href} key={item.title}>
          <OnestText
            fontSize="20px"
            style="bold"
            className="hover:text-orange after:bg-orange relative mx-auto block w-fit text-white after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
          >
            {item.title}
          </OnestText>
        </Link>
      ))}
      {/* Language selection */}
      <div className="flex items-center space-x-4">
        <button
          aria-label="Change language to Spanish"
          onClick={() => changeLanguage('es')}
          title="Switch to Spanish"
        >
          <Spanish className="h-6 w-6 hover:scale-110" />
        </button>
        <button
          aria-label="Change language to English"
          onClick={() => changeLanguage('en')}
          title="Switch to English"
        >
          <English className="h-6 w-6 hover:scale-110" />
        </button>
      </div>
    </nav>
  )
}

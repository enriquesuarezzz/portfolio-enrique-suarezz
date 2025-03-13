import { OnestText } from '@/components/atoms/onest_text'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Button from '../button/button'
import Download from '@/components/atoms/svg/download'
import Github from '@/components/atoms/svg/github'
import Linkedin from '@/components/atoms/svg/linkedin'

export async function Header() {
  const t = await getTranslations('header')
  return (
    <header className="flex items-center justify-center gap-10 pt-16 md:gap-24 md:pt-24 lg:gap-40 lg:pt-40">
      {/* main title */}
      <div className="flex w-full max-w-[450px] flex-col items-center justify-center gap-6 md:max-w-[600px]">
        <div className="flex items-center gap-4 md:items-start">
          <OnestText fontSize="56px" style="bold" className="text-white">
            {t('title')}
          </OnestText>
          {/* image */}
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/1.jpg'}`}
            alt="Enrique Suarez Image"
            width={100}
            height={100}
            unoptimized
            className="block rounded-full md:hidden"
          />
        </div>
        {/* description */}
        <OnestText fontSize="20px" style="bold" className="text-white">
          {t('description')}
        </OnestText>
        {/* buttons */}
        <div className="grid w-full grid-cols-2 pt-4 md:flex md:gap-4 lg:pt-10">
          {/* linkedin button */}
          <Button
            text="Linkedin"
            href="https://www.linkedin.com/in/enrique-suarezzz"
            rel="noopener noreferrer"
            className=""
          >
            <Linkedin />
          </Button>
          {/* github button */}
          <Button
            text="Github"
            href="https://www.github.com/enriquesuarezzz"
            rel="noopener noreferrer"
            className=""
          >
            <Github />
          </Button>
          {/* download cv button */}
          <Button
            text={t('download')}
            href="/pdf/enrique_suarez_english.pdf"
            rel="noopener noreferrer"
            className="mt-4 text-nowrap md:ml-0 md:mt-0"
          >
            <Download />
          </Button>
        </div>
      </div>
      {/* image */}
      <div className="hidden pb-0 md:flex md:pb-20 lg:pb-16">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/header_image.avif'}`}
          alt="Enrique Suarez Image"
          width={250}
          height={200}
          unoptimized
          className="rounded-full"
        />
      </div>
    </header>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { OnestText } from '@/components/atoms/onest_text'
import { getTranslations } from 'next-intl/server'
import Computer from '@/components/atoms/svg/svg/computer'

export async function Experience() {
  const t = await getTranslations('experience')
  return (
    <section
      id="experience"
      className="flex w-full items-center justify-center"
    >
      <div className="w-full pt-10 md:pt-40">
        {/* title */}
        <div className="flex items-center justify-center gap-4 md:justify-start">
          {/* computer icon */}
          <Computer />
          {/* title */}
          <OnestText style="bold" fontSize="32px" className="text-white">
            {t('title')}
          </OnestText>
        </div>
        <div className="flex flex-col items-center justify-center pt-6 md:flex-row md:items-start">
          <div className="flex w-full flex-col items-center md:w-1/2 md:items-start">
            {/* company name */}
            <OnestText style="bold" fontSize="22px" className="text-orange">
              {t('subtitle')}
            </OnestText>
            {/* period */}
            <OnestText style="bold" fontSize="16px" className="text-white">
              {t('date')}
            </OnestText>
          </div>
          {/* description */}
          <div className="flex w-full pt-4 md:w-1/2 md:pt-0">
            <OnestText
              style="bold"
              fontSize="16px"
              className="text-center text-white md:text-start"
            >
              {t('description')}
            </OnestText>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-5 md:pt-10">
          <div>
            {/* title */}
            <OnestText
              style="bold"
              fontSize="16px"
              className="text-center text-white md:text-start"
            >
              {t('proyects_title')}
            </OnestText>
          </div>
          {/* projects */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {/* first project */}
            <Link href="https://mumbaimasalarestaurants.com/es" target="_blank">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/mumbai.avif'}`}
                width={400}
                height={300}
                alt="Proyect"
                className="transition-all hover:scale-110"
              />
            </Link>
            {/* second project */}
            <Link href="https://kalmaholiday.com/es" target="_blank">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/kalma_holiday.avif'}`}
                width={400}
                height={300}
                alt="Proyect"
                className="transition-all hover:scale-110"
              />
            </Link>
            {/* third project */}
            <Link href="https://www.graciplus.com/es" target="_blank">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/graciplus.avif'}`}
                width={400}
                height={300}
                alt="Proyect"
                className="transition-all hover:scale-110"
              />
            </Link>
            {/* fourth project */}
            <Link href="https://www.bravus-design.com/" target="_blank">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/bravus_design.avif'}`}
                width={400}
                height={300}
                alt="Proyect"
                className="transition-all hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

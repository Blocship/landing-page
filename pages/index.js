import Head from 'next/head'
import Image from 'next/image'
import HeroBlock from '../public/hero-block.svg'
import SectionHeading from '../components/headings/SectionHeading'
import SubHeading from '../components/headings/SubHeading'
import HeroHeading from '../components/headings/HeroHeading'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blocship</title>
        <meta name="description" content="We Create Flutter Centric Mobile Apps That Engage & Convert Users." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroHeading>
          We <Image className='inline w-[34px] md:w-[42px] lg:w-[54px]' src={HeroBlock} alt="build" /> <strong>Flutter Centric</strong> Mobile Apps That Engage & Convert Users.
        </HeroHeading>
        <div className='flex flex-col gap-4 justify-center mt-12'>
          <SubHeading>What We Offer</SubHeading>
          <SectionHeading className='text-center'>Section heading</SectionHeading>
          <div className='flex gap-4 justify-center'>
            <div className='w-12 h-12 bg-primary'></div>
            <div className='w-12 h-12 bg-secondary'></div>
            <div className='w-12 h-12 bg-matt-black'></div>
            <div className='w-12 h-12 bg-gradient-to-br from-light-gradient/50 to-dark-gradient'></div>
          </div>
        </div>
      </main>
    </div>
  )
}

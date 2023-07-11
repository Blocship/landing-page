import Head from 'next/head'
import AppDevelopmentProcess from '../components/sections/AppDevelopmentProcess'
import HeroArea from '../components/sections/HeroArea'
import AppDevelopmentBlock from '../components/sections/AppDevelopmentBlock'

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
        {/* <div className='flex gap-4 justify-center'>
          <div className='w-12 h-12 bg-primary'></div>
          <div className='w-12 h-12 bg-secondary'></div>
          <div className='w-12 h-12 bg-matt-black'></div>
          <div className='w-12 h-12 bg-gradient-to-br from-light-gradient/50 to-dark-gradient'></div>
        </div> */}

        <HeroArea/>
        <AppDevelopmentBlock/>
        <AppDevelopmentProcess/>
      </main>
    </div>
  )
}

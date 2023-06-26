import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blocship</title>
        <meta name="description" content="We Create Flutter Centric Mobile Apps That Engage & Convert Users." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">
          We Create Flutter Centric Mobile Apps That Engage & Convert Users.
        </h1>
        <div className='flex gap-4 justify-center mt-12'>
          <div className='w-12 h-12 bg-primary'></div>
          <div className='w-12 h-12 bg-secondary'></div>
          <div className='w-12 h-12 bg-matt-black'></div>
          <div className='w-12 h-12 bg-gradient-to-br from-light-gradient/50 to-dark-gradient'></div>
        </div>
      </main>
    </div>
  )
}

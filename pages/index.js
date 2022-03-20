import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>I am Benyamin</title>
        <link type="image/png" sizes="16x16" rel="icon" href="/boy-16.png"></link>
        <link type="image/png" sizes="32x32" rel="icon" href="/boy-32.png"></link>
        <link type="image/png" sizes="96x96" rel="icon" href="/boy-96.png"></link>
        <link type="image/png" sizes="120x120" rel="icon" href="/boy-120.png"></link>
      </Head>
      <div className='container'>
        this is home
      </div>
    </>
  )
}

import Head from 'next/head'

export const endPoint = 'http://bmahmoudyan.pythonanywhere.com/me/'
export async function getServerSideProps() {
  const about = await (await fetch(`${endPoint}about/`)).json()
  return {
    props: {
      about
    }
  }
}

export default function Home({ about }) {
  console.log(about)
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
        <div className='about'>
          {about.results.map((about) => {
            return (
              <div className='about-item'>
                <p>{about.text}</p>
                <img src={about.pictuer} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

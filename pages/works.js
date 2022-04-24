import Head from 'next/head'

export const endPoint = 'http://bmahmoudyan.pythonanywhere.com/me/'
export async function getServerSideProps() {
  const tags = await (await fetch(`${endPoint}tag/`)).json()
  const work = await (await fetch(`${endPoint}work/`)).json()
  return {
    props: {
      tags,
      work
    }
  }
}

export default function Works({ tags, work }) {
  console.log(work)
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
        <div className='tags' >
          <ul>
            {tags.results.map((item) => {
              return (
                <li className='tags-item'>{item.name}</li>
              )
            })}
          </ul>
        </div>
        <div className='projects'>
          {work.results.map((work) => {
            return (
              <div className='projects-item'>
                <div className='text'>
                  <a href={work.link}><h2>{work.title}</h2></a>
                  <p>{work.description}</p>
                </div>
                <img src={work.pictuer} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

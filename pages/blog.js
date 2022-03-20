import Head from "next/head"
import styles from "../styles/Blog.module.css"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export const Blog = () => {
    const [time, setTime] = useState(8)
    const router = useRouter()
    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime(time - 1), 1000)
        return () => clearInterval(timer)
    }, [time])

    useEffect(() => {
        setTimeout(() => {
            router.push("https://medium.com/@iam_benyamin")
        }, 8000)
    }, [])
    
    return (
        <>
            <Head>
                <title>Benyamin | blog</title>
            </Head>
            <div className="container">
                <div className={styles.blog} >
                    <p>
                        Hi, there. I write in a medium as my blog.<br /> I will redirect you to my medium page in <span>{time}</span> seconds
                    </p>
                </div>
            </div>
        </>
    )
}
export default Blog
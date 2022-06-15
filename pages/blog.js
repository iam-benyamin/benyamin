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
                <title>بنیامین | مقالات</title>
            </Head>
            <div className="container">
                <div className={styles.blog} >
                    <p>
                    أهلاً. أنا أكتب في وسيط مثل مدونتي.<br /> سأعيد توجيهك إلى صفحتي المتوسطة بتنسيق <span>{time}</span> ثواني
                    </p>
                </div>
            </div>
        </>
    )
}
export default Blog
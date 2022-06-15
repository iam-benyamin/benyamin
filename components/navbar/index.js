import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="border-bottom">
            <div className="container">
                <div className="nav">
                    <div className="name-logo"><h2><Link href="https://benyamin.vercel.app/"><a>Benyamin Mahmoudyan</a></Link></h2></div>
                    <div className="links">
                        <Link href="/"><a>مسکن</a></Link>
                        <Link href="/works"><a>الاعمال</a></Link>
                        <Link href="/blog"><a>مقالات</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar

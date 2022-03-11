import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://vercel.com" target="_blank" rel="noreferrer" >
                Powered by{' '}
                <span className="logo">
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    )
}

export default Footer

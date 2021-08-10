import './footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return(
        <footer className="footer">
            <p>copyright - {currentYear}</p>
        </footer>
        )
}
export default Footer;
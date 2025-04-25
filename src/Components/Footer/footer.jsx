import './footer.css'
import Icon from '../../assets/Icon.svg'
import a from '../../assets/twich.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'

export default function Footer() {
    return (
        <footer>
            <img src={Icon} alt="Icon" />
            <ul>
                <li><a href="/"><img src={a} alt="Twich" /></a></li>
                <li><a href="/"><img src={facebook} alt="Facebook" /></a></li>
                <li><a href="/"><img src={instagram} alt="Instagram" /></a></li>
            </ul>
            <small>Copywright 2020 Bella Onojie.com</small>
        </footer>
    )
}



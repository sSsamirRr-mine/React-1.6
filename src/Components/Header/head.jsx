import './head.css'
import Icon from '../../assets/Icon.svg'
export default function Head() {
    return (
        <div className="head">
            <img src={Icon} alt="Icon" />
            <ul>
                <li><a href="/" className='home'>Home</a></li>
                <li><a href="/">Product</a></li>
                <li><a href="/">Faq</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
    )
}



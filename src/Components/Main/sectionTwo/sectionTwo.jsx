import './sectionTwo.css';
import login from '../../../assets/login.svg';
import search from '../../../assets/search.svg';
import pay from '../../../assets/pay.svg';
export default function SectionTwo() {
    return (
        <div className="sectionTwo">
            <h2 className='boss'>How the app works</h2>
            <div className='cards'>
                <div className='card_one card'>
                    <img src={login} alt="Login img" />
                    <div className='info info_one'>
                        <h4>Create an account</h4>
                        <h2>
                            Create/login to an existing
                            account to get started
                        </h2>
                        <p>An account is created with your email <br /> and a desired password</p>
                    </div>
                </div>
                <div className='card_two card'>
                    <div className='info info_two'>
                        <h4>Explore varieties</h4>
                        <h2>
                            Shop for your favorites
                            meal as e dey hot.
                        </h2>
                        <p>
                            Shop for your favorite meals or drinks <br />
                            and enjoy while doing it.
                        </p>
                    </div>
                    <img src={search} alt="search" />
                </div>
                <div className='card_three card'>
                    <img src={pay} alt="pay" />
                    <div className='info info_three'>
                        <h4>Checkout</h4>
                        <h2>
                            When you done check out
                            and get it delivered.
                        </h2>
                        <p>
                            When you done check out and get it <br />
                            delivered with ease.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


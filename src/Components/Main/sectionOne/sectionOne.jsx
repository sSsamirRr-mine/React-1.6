import './sectionOne.css';
import smartPhone from '../../../assets/smartPhones.svg'
export default function SectionOne() {
    return (
        <div className="sectionOne">
            <div className='main'>
                <h2>Food app</h2>
                <h1>
                    Why stay hungry when
                    <br />you can order form Bella Onojie
                </h1>
                <p>
                    Download the bella onoje’s food app now on
                </p>
                <div className='btn'>
                    <button type='button' className='Play'>
                        Playstore
                    </button>
                    <button type='button' className='App'>
                        App Store
                    </button>
                </div>
            </div>
            <img src={smartPhone} alt="smartPhones" className='Phones' />
        </div>
    );
}   
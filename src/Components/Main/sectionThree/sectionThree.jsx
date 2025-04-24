import './sectionThree.css';
export default function SectionTwo() {
    return (
        <section className="sectionThree">
            <h2>Download the app now.</h2>
            <p>Available on your favorite store. Start your premium experience now</p>
            <div className='btns_three'>
                <button type='button' className='playstores'>Playstore</button>
                <button type='button' className='apps'>App store</button>
            </div>
        </section>
    );
}
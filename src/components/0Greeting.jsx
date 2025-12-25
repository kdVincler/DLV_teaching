import '../css/0Greeting.css';
import headshot from '../assets/image00017.webp';

function Greeting() {
    return (
    <>
        {/* greeting not done yet */}
        <section className="tile greeting">
            <div className="text">
                <h1 className='pt-4 pb-4'>
                    Flautist & Teacher
                </h1>
                <p>
                    Doroti is a freelance flautist and highly experienced music teacher of flute, recorder and music theory based in London.
                </p>
                
            </div>
            <figure>
                <img src={headshot} alt="picture depicting Doroti Vincler" />
                {/* <figcaption><i></i></figcaption> */}
            </figure>
        </section>
    </>
    )
}

export default Greeting;
import '../css/0Greeting.css';
import headshot from '../assets/Headshot.jpg';

function Greeting() {
    return (
    <>
        {/* greeting not done yet */}
        <section className="tile greeting">
            <div className="text">
                <h1>
                    Flute & Piccolo
                </h1>
                <p>
                    Doroti is a freelance flautist and highly experienced music teacher for flute, recorder and music theory.
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
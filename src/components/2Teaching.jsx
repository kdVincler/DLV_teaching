import '../css/2Teaching.css'
import teaching from '../assets/teaching.png'

function Teaching() {
    return(
    <>
        {/* teaching not done yet 
            first 2 paragraph (above picture originally):
                I am an experienced and passionate teacher with an LRAM diploma in teaching and pedagogical theory from the Royal Academy of Music. 
                <br />
                <br />
                I am a professional flautist based in London as well as the flute & recorder teacher at Seaton House Preparatory School, Kew Green Prep School and the Camden Music Service's Saturday Centre.
        
        */}
        <section className="tile teaching">
            <div className="text">
                <h1>
                    My qualifications
                </h1>
                I am an experienced & dedicated teacher and am passionate about providing quality and engaging music education to my students regardless of their age, background or level of playing. 
                <br />
                <br />
                I hold a Bachelors degree (BMus Hons) from the Royal Academy of Music and a Master of Performance degree with Distinction from the Royal Collage of Music in Classical Flute Performance as well as an LRAM diploma in teaching and pedagogical theory from the Royal Academy of Music. 
                <br />
                <br />
                Besides teaching privately in London, I am also the flute & recorder teacher at Seaton House Preparatory School, Kew Green Prep School and the Camden Music Service's Saturday Centre.
                <h1>
                    Why learn to play an instrument?
                </h1>
                Music pedagogue and composer Zoltan Kodály said that <b>'Music is an anchor for the mind, body, and soul.'</b> Besides the numerous and proven benefits on cognitive functions and emotional & mental health, I strongly believe that learning to play an instrument above all should be an enjoyable experience. As your teacher I am here to help you achieve your musical goals whatever they may be.
                <br />
                <br />
                <figure>
                    <img src={teaching} alt="Doroti leading her students in performing at the Royal Albert Hall" />
                    <figcaption><i>Leading the flute section of the Camden Concert Band at the Royal Albert Hall <br /> The Camden Schools' Music Festival, 24th April 2023</i></figcaption>
                </figure>
                <h1>
                    My teaching philosophy
                </h1>
                I am committed to providing engaging and inspiring lessons that are tailored to the individual needs and interests of my students. Whether working with beginners or more advanced players, my objective remains the same: to help my pupils reach their full musical potential. I strive to facilitate lessons where students are able to freely experiment with expressing their unique musical imagination while also honing in their technical skills.
                <br />
                <br />
                I have been trained from age seven by the most respected Kodaly pedagogues in Hungary, so I know from first-hand experience how beneficial the early cultivation of good aural skills is for an instrumentalist. My knowledge of Kodály solfege allows me to train my pupils' rhythmic skills and musical timing in a unique way that encourages them to focus on instant rhythmic accuracy.
                <h1 id='sales_pitch'>
                    Contact for private lesson availability or to book a workshop.
                </h1>
            </div>
        </section>
    </>
    )
}

export default Teaching;
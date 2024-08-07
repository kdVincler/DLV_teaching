import '../css/2Teaching.css'
import teaching from '../assets/teaching.png'

function Teaching() {
    return(
    <>
        {/* teaching not done yet */}
        <section className="tile teaching">
            <div className="text">
                I am an experienced and passionate teacher with an LRAM diploma in teaching and pedagogical theory from the Royal Academy of Music.
                <br />
                <br />
                I am committed to providing engaging and inspiring lessons that are tailored to the individual needs and interests of my students. Whether working with beginners or more advanced players, my objective remains the same: to help my pupils reach their full musical potential. I strive to facilitate lessons where students are able to freely experiment with expressing their unique musical imagination while also honing in their technical skills. I have been trained from age seven by the most respected Kodaly pedagogues in Hungary, so I know from fist-hand experience how beneficial the early cultivation of good aural skills is for an instrumentalist. My knowledge of Kodály solfege allows me to train my pupils’ rhythmic skills and musical timing in a unique way that encourages them to focus on instant rhythmic accuracy.
                <br />
                <figure>
                    <img src={teaching} alt="Doroti leading her students in performing at the Royal Albert Hall" />
                    <figcaption><i>Leading the flute section of the Camden Concert Band at the Royal Albert Hall <br /> The Camden Schools' Music Festival, 24th April 2023</i></figcaption>
                </figure>
                <br />
                <b>BEGINNER TO ADVANCED</b>, all ages and abilities are welcome.
                <br />
                <br />
                Online lessons are taught with <b>high-quality</b>audio features specifically tailored for musicians and I also provide detailed lesson notes.
                <br />
                <br />
                I have a <b>100 % pass rate</b> for music exams, and I have expertise in teaching from <b>ALL</b> the main examination boards' syllabi including <b>ABRSM, TRINITY, GCSE & A LEVEL MUSIC PERFORMANCE PREP and SCHOOL SCHOLARSHIPS</b>.   
            </div>
        </section>
    </>
    )
}

export default Teaching;
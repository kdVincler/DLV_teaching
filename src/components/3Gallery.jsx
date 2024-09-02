import '../css/3Gallery.css'
import ReactPlayer from 'react-player'

/* photo imports */
import teaching from '../assets/gallery/photos/teaching.png'
import photo2 from '../assets/gallery/photos/IMG_7083.png'
import photo3 from '../assets/gallery/photos/Screenshot.png'
import photo4 from '../assets/gallery/photos/IMG_1544.png'
import photo5 from '../assets/gallery/photos/8103.png'
import photo6 from '../assets/gallery/photos/IMG_1184.jpg'
import photo7 from '../assets/gallery/photos/IMG_6962.png'
import photo8 from '../assets/gallery/photos/photo8.png'
import photo9 from '../assets/gallery/photos/IMG_1121.png'

/* audio imports */

function Gallery() {
    const photos = [
        // usage:
        // {
        //     file: *file variable as when imported*,
        //     alt_Text: `alt text`
        // },
        {
            file: photo9,
            alt_Text: `Doroti playing the flute` 
        },
        {
            file: teaching,
            alt_Text: `Doroti leading her students in performing at the Royal Albert Hall` 
        },
        {
            file: photo2,
            alt_Text: `Black and white photo of Doroti playing at Ronnie Scott's Jazz CLub in London` 
        },
        
        {
            file: photo5,
            alt_Text: `Doroti in studio with her flute` 
        },
        {
            file: photo3,
            alt_Text: `Doroti playing in orchestra` 
        },
        {
            file: photo6,
            alt_Text: `Doroti in Greenwitch with her flute` 
        },
        {
            file: photo4,
            alt_Text: `Doroti playing with Szabolcs Philharmonics Orchestra` 
        },
        {
            file: photo8,
            alt_Text: `Doroti in front of the Royal Collage of Music with her flute` 
        },
        {
            file: photo7,
            alt_Text: `Doroti playing the flute` 
        },
    ]
    const videos = [
        // usage:
        // `youtube url`,
    ]
    const audios = [
        // usage:
        // ,
        // {
        //     file: *file variable as when imported*,
        //     name: `name of the piece`,
        //     albumCover: *file variable as when imported*,
        //     albumCoverAlt: `alt text for album cover`
        // },
    ]
    return(
    <>
        {/* gallery not done yet */}
        <section className="tile gallery">
            <div className="text">
                <h1>
                    Photos
                </h1>
                <section className='photoContainer'>
                    {
                        photos.length ? (
                            photos.map((photo) => {
                                return(
                                    <img src={photo.file} alt={photo.alt_Text} />
                                )
                            }) 
                        ) : (
                            <h1 className='nothingToDisplay'>
                                No pictures to display.
                            </h1>
                        )
                    }
                </section>
                <h1 className='hr'>
                    Videos
                </h1>
                <section className='videoContainer'>
                    {
                        videos.length ? (
                            videos.map((url, i) => {
                                return(
                                    <>
                                        {i !== 0 && <br />}
                                        <div className='player-wrapper'>
                                            <ReactPlayer
                                                className='react-player'
                                                url={url}
                                                controls="true"
                                                width='100%'
                                                height='100%'
                                            />
                                        </div>
                                    </>
                                )
                            })
                        ) : (
                            <h1 className='nothingToDisplay'>
                                No videos to display.
                            </h1>
                        )
                    }
                </section>
                <h1 className='hr'>
                    Recordings
                </h1>
                <section className='audioContainer'>
                    {
                        audios.length ? (
                            audios.map((mp3) => {
                                return(
                                    <figure>
                                        <img src={mp3.albumCover} alt={mp3.albumCoverAlt} />
                                        <div>
                                            <figcaption>{mp3.name}</figcaption>
                                            <audio 
                                                controls 
                                                src={mp3.file}
                                                controlsList='nodownload'
                                            ></audio>    
                                        </div>
                                    </figure>
                                )
                            })
                        ) : (
                            <h1 className='nothingToDisplay'>
                                No recordings to display.
                            </h1>
                        ) 
                    }
                </section>
            </div>
        </section>
    </>
    )
}

export default Gallery;
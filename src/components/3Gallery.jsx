import '../css/3Gallery.css'
import ReactPlayer from 'react-player'

import { useState } from 'react';

/* photo imports */
import teaching from '../assets/teaching.webp'
import photo2 from '../assets/gallery/photos/IMG_7083.webp'
import photo3 from '../assets/gallery/photos/Screenshot.webp'
import photo5 from '../assets/gallery/photos/Headshot.webp'
import photo6 from '../assets/gallery/photos/IMG_1121.webp'
import photo7 from '../assets/gallery/photos/image00016.webp'
import photo8 from '../assets/gallery/photos/image00008.webp'
import photo9 from '../assets/gallery/photos/image00021.webp'
import photo10 from '../assets/gallery/photos/image00010.webp'
import photo11 from '../assets/gallery/photos/image00015.webp'
import photo12 from '../assets/gallery/photos/image00001.webp'
import photo13 from '../assets/gallery/photos/image00014.webp'
import photo14 from '../assets/gallery/photos/image00023.webp'
import photo15 from '../assets/gallery/photos/image00007.webp'


/* audio imports */
/* import audio1 from '../assets/gallery/audios/filename.mp3' */ 

function Gallery() {
    const photos = [
        // usage:
        // {
        //     file: *file variable as when imported*,
        //     alt_Text: `alt text`
        // },
        {
            file: photo7,
            alt_Text: `Doroti at Canary Wharf posing with her flute` 
        },
        {
            file: photo6,
            alt_Text: `Doroti playing the flute` 
        },
        {
            file: photo8,
            alt_Text: `Doroti at Canary Wharf posing with her flute` 
        },
        {
            file: teaching,
            alt_Text: `Doroti leading her students in performing at the Royal Albert Hall` 
        },
        {
            file: photo9,
            alt_Text: `Doroti at Canary Wharf posing with her flute` 
        },
        {
            file: photo10,
            alt_Text: `Doroti at Canary Wharf posing with her flute` 
        },
        {
            file: photo11,
            alt_Text: `Doroti at Canary Wharf posing with her flute` 
        },
        {
            file: photo13,
            alt_Text: `Doroti at Canary Wharf posing with her flute` 
        },
        {
            file: photo12,
            alt_Text: `Doroti at Canary Wharf posing with her flute` 
        },
        {
            file: photo15,
            alt_Text: `Doroti at Canary Wharf posing with her flute` 
        },
        {
            file: photo2,
            alt_Text: `Black and white photo of Doroti playing at Ronnie Scott's Jazz CLub in London` 
        },
        {
            file: photo14,
            alt_Text: `Doroti at Canary Wharf posing with her flute` 
        },
        {
            file: photo3,
            alt_Text: `Doroti playing in orchestra` 
        },
        {
            file: photo5,
            alt_Text: `Doroti posing with her flute in a photo studio` 
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

    const [showPopup, setShowPopup] = useState(false)
    const [imgPopup, setImgPopup] = useState(0)

    function GalleryPopup() {
        {
            return(
                photos.length && (
                    <div className="popup" onClick={() => {setShowPopup(!showPopup); setImgPopup(0)}}>
                        <img className='popupImg' src={photos[imgPopup].file} alt={photos[imgPopup].alt_Text} loading='lazy'/>
                    </div>
                )
            )
        }
            
    }

    return(
    <>
        {/* gallery not done yet */}
        <style>
            {`
                .gallery .popup {
                    visibility: ${showPopup ? `visible` : `hidden`}
                }
            `}
        </style>
        <section className="tile gallery">
            <div className="text">
                <h1>
                    Photos
                </h1>
                <section className='photoContainer'>
                    {
                        photos.length ? (
                            photos.map((photo, i) => {
                                return(
                                    <img src={photo.file} alt={photo.alt_Text}
                                    key={i} onClick={ () => {
                                        setShowPopup(!showPopup); 
                                        setImgPopup(i)
                                    }}/>
                                )
                            }) 
                        ) : (
                            <h1 className='nothingToDisplay'>
                                No pictures to display.
                            </h1>
                        )
                    }
                    <GalleryPopup />
                </section>
                {/* <h1 className='hr'>
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
                </section> */}
            </div>
        </section>
    </>
    )
}

export default Gallery;
import React from 'react';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../css/1Background.css'

function Background() {
    /* 
        Source of timeline design:
        https://stackblitz.com/edit/react-q23ymd?file=src%2FApp.js
        https://www.npmjs.com/package/react-vertical-timeline-component
    */
    const timeline_education = [
        {
            icon: { iconStyle: { background: '#f07167' } },
            date: '2020-22',
            title: 'Royal College of Music',
            subtitle: 'Master of Performance with Distinction',
            desc: undefined,
        },
        {
            icon: { iconStyle: { background: '#f07167' } },
            date: '2020',
            title: 'LRAM - Licenciate of the Royal Academy of Music',
            subtitle: 'Diploma in Teaching and Pedagogical Theory',
            desc: undefined,
        },
        {
            icon: { iconStyle: { background: '#f07167' } },
            date: '2016-20',
            title: 'Royal Academy of Music',
            subtitle: 'Bachelor of Music (Hons) ',
            desc: undefined,
        },
    ];

    const timeline_awards = [
        {
            icon: { iconStyle: { background: '#ffb4a2' } },
            date: '2021/22',
            title: 'Royal College of Music, Edward and Helen Hague Award Holder',
            subtitle: undefined,
            desc: undefined,
        },
        {
            icon: { iconStyle: { background: '#ffb4a2' } },
            date: '2020-22',
            title: 'Recipient of the St. Marylebone Educational Foundation Grant',
            subtitle: undefined,
            desc: undefined,
        },
        {
            icon: { iconStyle: { background: '#ffb4a2' } },
            date: '2020/21',
            title: 'Royal College of Music, Leverhulme Arts Scholar',
            subtitle: undefined,
            desc: undefined,
        },
        {
            icon: { iconStyle: { background: '#ffb4a2' } },
            date: '2016-2020',
            title: 'Royal Academy of Music, Entrance Scholarship',
            subtitle: undefined,
            desc: undefined,
        },
    ];

    return(
    <>
        {/* background not done yet */}
        <section className="tile background">
            <div className="text">        
                <h1>
                    BIOGRAPHY
                </h1>
                <section className='bio'>
                    I am a professional flautist based in London. As a freelance musician I play with orchestras and chamber ensembles regularly in London, across the UK and abroad.
                    <br />
                    <br />
                    After starting the flute at the age of nine, I was accepted to the Zoltan Kodaly Secondary Music School in Hungary, before moving to London and completing my Bachelors degree (BMus Hons) at the Royal Academy of Music and a Master of Performance degree in Classical Flute Performance with Distinction at the Royal College of Music.
                </section>
                <h1 className='hr'>
                    RECENT PERFORMANCES
                </h1>
                <section>
                    <ul>
                        <li>firebird</li>
                        <li>charlie</li>
                    </ul>
                </section>
                <h1 className='hr'>
                    TEACHING
                </h1>
                <section>
                    <ul>
                        <li>KGPS</li>
                        <li>Seaton House</li>
                        <li>Camden Music Service</li>
                    </ul>
                </section>
                <h1 className='hr'>
                    EDUCATION
                </h1>
                <article>
                    <VerticalTimeline>
                        {timeline_education.map((t, i) => {
                        return (
                            <VerticalTimelineElement
                            key={i}
                            className="vertical-timeline-element--work"
                            date={t.date}
                            {...t.icon}
                            >
                            {t.title ? (
                                <React.Fragment>
                                <h1 className="vertical-timeline-element-title">{t.title}</h1>
                                {t.subtitle && (
                                    <p className="vertical-timeline-element-subtitle">
                                    {t.subtitle}
                                    </p>
                                )}
                                {t.desc && <p>{t.desc}</p>}
                                </React.Fragment>
                            ) : undefined}
                            </VerticalTimelineElement>
                        );
                        })}
                    </VerticalTimeline>
                </article>

                <h1 className='hr'>
                    AWARDS & SCHOLARSHIPS
                </h1>
                <article>
                    <VerticalTimeline>
                        {timeline_awards.map((t, i) => {
                        return (
                            <VerticalTimelineElement
                            key={i}
                            className="vertical-timeline-element--work"
                            date={t.date}
                            {...t.icon}
                            >
                            {t.title ? (
                                <React.Fragment>
                                <h1 className="vertical-timeline-element-title">{t.title}</h1>
                                {t.subtitle && (
                                    <p className="vertical-timeline-element-subtitle">
                                    {t.subtitle}
                                    </p>
                                )}
                                {t.desc && <p>{t.desc}</p>}
                                </React.Fragment>
                            ) : undefined}
                            </VerticalTimelineElement>
                        );
                        })}
                    </VerticalTimeline> 
                </article>    
            </div>
        </section>
    </>
    )
}

export default Background;
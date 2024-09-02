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
            icon: { iconStyle: { background: '#EB4639' } },
            date: '2020-22',
            title: 'Royal College of Music',
            subtitle: 'Master of Performance with Distinction',
            desc: undefined,
        },
        {
            icon: { iconStyle: { background: '#EB4639' } },
            date: '2020',
            title: 'LRAM - Licenciate of the Royal Academy of Music',
            subtitle: 'Diploma in Teaching and Pedagogical Theory',
            desc: undefined,
        },
        {
            icon: { iconStyle: { background: '#EB4639' } },
            date: '2016-20',
            title: 'Royal Academy of Music',
            subtitle: 'Bachelor of Music (Hons) ',
            desc: undefined,
        },
    ];

    const timeline_awards = [
        {
            icon: { iconStyle: { background: '#f07167' } },
            date: '2021/22',
            title: 'Royal College of Music, Edward and Helen Hague Award Holder',
            subtitle: undefined,
            desc: undefined,
        },
        {
            icon: { iconStyle: { background: '#f07167' } },
            date: '2020-22',
            title: 'Recipient of the St. Marylebone Educational Foundation Grant',
            subtitle: undefined,
            desc: undefined,
        },
        {
            icon: { iconStyle: { background: '#f07167' } },
            date: '2020/21',
            title: 'Royal College of Music, Leverhulme Arts Scholar',
            subtitle: undefined,
            desc: undefined,
        },
        {
            icon: { iconStyle: { background: '#f07167' } },
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
                    Doroti started playing the flute at the age of 10 under the tutelage of Adrienne Kádárné Bedő, before being accepted to the Kodály Zoltán Music Secondary School of Kecskemét (Hungary) at top of her class. There she studied with Ákos Dratsay between 2012 and 2016. Doroti was only 15 years old when she won Special Prize at the VIII. National Jeney Zoltán Flute Competition in Hungary. She then received 3rd prize at the X. National Elek Tihamér Flute competition in 2016.
                    <br />
                    <br />
                    In the same year Doroti has successfully auditioned to the Royal Academy of Music, where she was accepted as an undergraduate student of Clare Southworth. During her four years at the academy Doroti studied modern flute with Karen Jones and Michael Cox, baroque flute with Lisa Beznosiuk and piccolo with Helen Keen. 
                    <br />
                    <br />
                    In 2020 Doroti started her postgraduate studies as a Leverhulme Scholar at the Royal College of Music. Here Doroti studied with Gitte Marcusson, Emer McDonough and Adam Walker on the modern flute and with Rachel Brown on the baroque flute. During her studies Doroti was also the recipient of the Edward and Helen Hague award as well as the St. Marylebone Educational Foundation Grant. Doroti graduated with a Master of Performance degree with Distinction in 2022.
                    <br />
                    <br />
                    Doroti is passionate about bringing classical music to everyone's day-to-day life and gives regular solo and chamber concerts throughout the year. Besides her work as a professional flautist, Doroti is also a dedicated teacher. As well as teaching privately, Doroti is the flute & recorder teacher at Seaton House Preparatory School, Kew Green Preparatory School and the Camden Music Service's Saturday Centre. As a freelance musician Doroti plays regularly with orchestras and chamber ensembles in London, across the UK and abroad.
                </section>
                <h1 className='hr'>
                    RECENT PERFORMANCE HIGHLIGHTS
                </h1>
                <section>
                    <ul>
                        <li>Principal & Sub-principal flute, London Firebird Orchestra 2022-Present</li>
                        <li>Marie Curie the Musical, London, Charing Cross Theatre 2024 (deputy flute)</li>
                        <li>Charlie & the Chocolate Factory UK & Ireland Tour 2023/24 (deputy flute/picc/alto)</li>
                        <li>Kalpadruma Collective at Ronnie Scott's 2022</li>
                    </ul>
                </section>
                <h1 className='hr'>
                    TEACHING
                </h1>
                <section>
                    <ul>
                        <li>Camden Music Service's Saturday Centre (flute teacher)</li>
                        <li>Kew Green Preparatory School (woodwind teacher)</li>
                        <li>Seaton House Preparatory School (flute and recorder)</li>
                        
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
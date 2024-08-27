import React from 'react';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../css/1Background.css'

function Background() {
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
            <h1>
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

            <h1 id='hr'>
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
                
        </section>
    </>
    )
}

export default Background;
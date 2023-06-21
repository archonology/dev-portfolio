import * as React from "react";

const Quotes = (theme) => {
    const sliderStyle = 'qoute-slider ' + theme.theme;

    return (
        <div>
            <section className='row'>
                <div className={sliderStyle}>
                        <div className="slider">
                            <div className="mask">
                                <a
                                    href="https://www.linkedin.com/in/reed-meher/details/recommendations/?detailScreenTabIndex=0"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ul>
                                        <li className="anim1"><q className="qoute">Does his job with creativity, compassion, and sincere attention to detail.</q>
                                            <p className="source">
                                                - Coworker Brittany K.
                                            </p>
                                        </li>
                                        <li className="anim2">
                                            <q className="qoute">Very dependable and great at problem solving.</q>
                                            <p className="source">
                                                - Coworker Agne S.
                                            </p>
                                        </li>
                                        <li className="anim3">
                                            <q className="qoute"> Excellent communication skills</q>
                                            <p className="source">
                                                - Teammate Alexandra D.
                                            </p>
                                        </li>
                                        <li className="anim4">
                                            <q className="qoute">An amazing teammate, a hard worker, an exceptional listener, and a compassionate soul.</q>
                                            <p className="source">
                                                - Coworker and client Heidi A.
                                            </p>
                                        </li>
                                    </ul></a>
                            </div>
                        </div>
                    </div>
            
            </section>
        </div>
    )
}

export default Quotes;
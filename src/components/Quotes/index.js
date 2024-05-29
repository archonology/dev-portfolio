const Quotes = () => {
  const sliderStyle = "qoute-slider dark";

  return (
    <div>
      <section className="row">
        <div className={sliderStyle}>
          <div className="slider">
            <div className="mask">
              <a
                href="https://www.linkedin.com/in/reed-meher/details/recommendations/?detailScreenTabIndex=0"
                target="_blank"
                rel="noreferrer"
              >
                <ul>
                  <li className="anim1">
                    <q className="qoute">
                      Reed is a pleasure to work with because of his motivation
                      to grow, learn, and work hard.
                    </q>
                    <p className="source">- Coding Instructor Stephen O.</p>
                  </li>
                  <li className="anim2">
                    <q className="qoute">
                      Whatever organization can leverage his skills stands to
                      prosper immensely.
                    </q>
                    <p className="source">- Coworker Jack L.</p>
                  </li>
                  <li className="anim3">
                    <q className="qoute">
                      Does his job with creativity, compassion, and sincere
                      attention to detail.
                    </q>
                    <p className="source">- Coworker Brittany K.</p>
                  </li>
                  <li className="anim4">
                    <q className="qoute">
                      He has shown great leadership skills and helps others when
                      needed.
                    </q>
                    <p className="source">- Developer David H.</p>
                  </li>
                  <li className="anim5">
                    <q className="qoute">
                      Excellent communication skills that kept things running
                      smoothly for the whole team.
                    </q>
                    <p className="source">- Teammate Alexandra D.</p>
                  </li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quotes;

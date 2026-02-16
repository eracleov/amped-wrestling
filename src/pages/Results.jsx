import { motion } from 'framer-motion';
import { Calendar, MapPin, Medal, TrendingUp } from 'lucide-react';
import { results, seasonRecord } from '../data/results';
import './Results.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function getPlaceClass(place) {
  if (place === 'Champion' || place === '1st') return 'result-place--gold';
  if (place === '2nd') return 'result-place--silver';
  if (place === '3rd') return 'result-place--bronze';
  return 'result-place--default';
}

export default function Results() {
  return (
    <div className="results-page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="page-hero__title">Competition Results</h1>
            <p className="page-hero__subtitle">
              Tracking our athletes' achievements across Texas and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Season Overview */}
      <section className="results-season">
        <div className="container">
          <motion.div
            className="season-banner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="season-banner__record">
              <TrendingUp size={24} />
              <div>
                <span className="season-banner__number">{seasonRecord.varsityDualRecord}</span>
                <span className="season-banner__label">{seasonRecord.season} Dual Record</span>
              </div>
            </div>
            <div className="season-banner__highlights">
              {seasonRecord.highlights.map((h) => (
                <div key={h} className="season-highlight">
                  <Medal size={14} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Results */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Tournament Results</h2>
          <div className="results-list">
            {results.map((event, i) => (
              <motion.div
                key={`${event.event}-${i}`}
                className="result-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.1 } },
                }}
              >
                <div className="result-card__header">
                  <h3 className="result-card__event">{event.event}</h3>
                  <div className="result-card__meta">
                    <span><Calendar size={14} /> {event.date}</span>
                    <span><MapPin size={14} /> {event.location}</span>
                  </div>
                </div>
                <div className="result-card__highlights">
                  {event.highlights.map((h, j) => (
                    <div key={j} className="result-entry">
                      <span className="result-entry__athlete">{h.athlete}</span>
                      <span className="result-entry__result">{h.result}</span>
                      <span className={`result-place ${getPlaceClass(h.place)}`}>{h.place}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

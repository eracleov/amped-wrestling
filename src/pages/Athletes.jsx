import { motion } from 'framer-motion';
import { Star, Weight, Award } from 'lucide-react';
import { athletes } from '../data/athletes';
import './Athletes.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Athletes() {
  return (
    <div className="athletes-page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="page-hero__title">Our Athletes</h1>
            <p className="page-hero__subtitle">
              Meet the wrestlers who represent Amped on mats across Texas and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="athletes-grid">
            {athletes.map((athlete, i) => (
              <motion.div
                key={athlete.name}
                className="athlete-profile"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } },
                }}
              >
                <div className="athlete-profile__header">
                  <div className="athlete-profile__avatar">
                    {athlete.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="athlete-profile__name">{athlete.name}</h3>
                    <div className="athlete-profile__meta">
                      <span className="athlete-profile__tag">
                        <Weight size={14} />
                        {athlete.weightClass}
                      </span>
                      <span className="athlete-profile__tag">
                        <Award size={14} />
                        {athlete.division}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="athlete-profile__bio">{athlete.bio}</p>
                <div className="athlete-profile__achievements">
                  <h4>Achievements</h4>
                  <ul>
                    {athlete.achievements.map((a) => (
                      <li key={a}>
                        <Star size={14} />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

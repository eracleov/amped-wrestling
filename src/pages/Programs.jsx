import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Shield, Flame, Users, Check } from 'lucide-react';
import { programs } from '../data/programs';
import './Programs.css';

const iconMap = { Trophy, Shield, Flame, Users };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Programs() {
  return (
    <div className="programs-page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="page-hero__title">Programs</h1>
            <p className="page-hero__subtitle">
              Train with purpose. Compete with confidence. Programs for every age and skill level.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon] || Trophy;
            const isEven = i % 2 === 1;
            return (
              <motion.div
                key={program.id}
                id={program.id}
                className={`program-detail ${isEven ? 'program-detail--reverse' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="program-detail__content">
                  <div className="program-detail__icon">
                    <Icon size={32} />
                  </div>
                  <h2 className="program-detail__title">{program.name}</h2>
                  <span className="program-detail__subtitle">{program.subtitle}</span>
                  <p className="program-detail__desc">{program.description}</p>
                  <ul className="program-detail__features">
                    {program.features.map((f) => (
                      <li key={f}>
                        <Check size={16} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/register" className="btn btn--primary">Join This Program</Link>
                </div>
                <div className="program-detail__visual">
                  <div className="program-detail__placeholder">
                    <Icon size={64} />
                    <span>{program.name}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

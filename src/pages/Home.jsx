import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Shield, Flame, Users, ChevronRight, MapPin, Star } from 'lucide-react';
import { clubInfo } from '../data/clubInfo';
import { athletes } from '../data/athletes';
import { programs } from '../data/programs';
import { seasonRecord } from '../data/results';
import './Home.css';

const iconMap = { Trophy, Shield, Flame, Users };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const featuredAthletes = athletes.slice(0, 3);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__content">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="hero__badge">USA Wrestling Sanctioned Club</span>
            <h1 className="hero__title">AMPED WRESTLING</h1>
            <p className="hero__subtitle">{clubInfo.description}</p>
            <div className="hero__actions">
              <Link to="/register" className="btn btn--primary btn--lg">Join Now</Link>
              <Link to="/schedule" className="btn btn--outline btn--lg">View Schedule</Link>
            </div>
            <div className="hero__location">
              <MapPin size={16} />
              <span>{clubInfo.address.city}, {clubInfo.address.state}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Season Record Bar */}
      <section className="record-bar">
        <div className="container record-bar__inner">
          <div className="record-bar__item">
            <span className="record-bar__number">{seasonRecord.varsityDualRecord}</span>
            <span className="record-bar__label">Season Record</span>
          </div>
          <div className="record-bar__item">
            <span className="record-bar__number">{athletes.length}+</span>
            <span className="record-bar__label">Competitive Athletes</span>
          </div>
          <div className="record-bar__item">
            <span className="record-bar__number">4</span>
            <span className="record-bar__label">Programs</span>
          </div>
          <div className="record-bar__item">
            <span className="record-bar__number">6</span>
            <span className="record-bar__label">Days / Week</span>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">
              From youth wrestling to adult MMA, we have a program for every level.
            </p>
          </motion.div>
          <div className="programs-grid">
            {programs.map((program, i) => {
              const Icon = iconMap[program.icon] || Trophy;
              return (
                <motion.div
                  key={program.id}
                  className="program-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } },
                  }}
                >
                  <div className="program-card__icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="program-card__title">{program.name}</h3>
                  <p className="program-card__subtitle">{program.subtitle}</p>
                  <p className="program-card__desc">{program.description.slice(0, 120)}...</p>
                  <Link to={`/programs#${program.id}`} className="program-card__link">
                    Learn More <ChevronRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Athletes */}
      <section className="section section--dark">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="section-title">Featured Athletes</h2>
            <p className="section-subtitle">
              Meet some of the wrestlers making Amped proud on the mat.
            </p>
          </motion.div>
          <div className="athletes-preview">
            {featuredAthletes.map((athlete, i) => (
              <motion.div
                key={athlete.name}
                className="athlete-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.15 } },
                }}
              >
                <div className="athlete-card__avatar">
                  {athlete.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="athlete-card__name">{athlete.name}</h3>
                <span className="athlete-card__division">{athlete.division} &bull; {athlete.weightClass}</span>
                <div className="athlete-card__achievement">
                  <Star size={14} />
                  <span>{athlete.achievements[0]}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/athletes" className="btn btn--outline">View All Athletes</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-section__inner">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="section-title">Ready to Step on the Mat?</h2>
            <p className="cta-section__text">
              Whether you're a first-time wrestler or a seasoned competitor, Amped has a place for you.
              Join our family and start training today.
            </p>
            <div className="cta-section__actions">
              <Link to="/register" className="btn btn--primary btn--lg">Get Started</Link>
              <Link to="/contact" className="btn btn--dark btn--lg">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

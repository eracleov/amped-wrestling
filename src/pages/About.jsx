import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';
import { clubInfo } from '../data/clubInfo';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const coaches = [
  {
    name: 'Keith Sutton',
    role: 'Head Coach & Manager',
    bio: 'Keith leads Amped Wrestling Club with passion and dedication. As both manager and head coach, he drives the club\'s mission of developing champions on and off the mat.',
  },
  {
    name: 'Coach Levi',
    role: 'Wrestling & Jiu Jitsu Coach',
    bio: 'Coach Levi brings expertise in both wrestling and grappling, helping athletes develop a well-rounded skill set. He leads Tuesday and Thursday sessions.',
  },
  {
    name: 'Coach Matt',
    role: 'Wrestling & Jiu Jitsu Coach',
    bio: 'Coach Matt works alongside Coach Levi to build strong fundamentals in wrestling and jiu jitsu. His technical approach helps wrestlers compete at the highest levels.',
  },
];

const values = [
  { icon: Target, title: 'Discipline', desc: 'We build mental toughness and discipline through rigorous training and competition preparation.' },
  { icon: Users, title: 'Family', desc: 'Amped is more than a club — it\'s a family. We support each other on and off the mat.' },
  { icon: Award, title: 'Excellence', desc: 'We push every athlete to reach their full potential, from first-timers to state champions.' },
  { icon: Heart, title: 'Community', desc: 'Rooted in Henrietta, TX, we\'re proud to represent our community at every level of competition.' },
];

export default function About() {
  return (
    <div className="about">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="page-hero__title">About Amped</h1>
            <p className="page-hero__subtitle">
              Building champions in Henrietta, TX since day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container about__mission">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="about__mission-text"
          >
            <h2 className="section-title">Our Mission</h2>
            <p>
              Amped Wrestling Club is dedicated to developing wrestlers and martial artists
              of all ages through expert coaching, competitive training, and a supportive
              family environment. Based in Henrietta, Texas, we serve the greater Wichita Falls
              area with programs in wrestling, Brazilian Jiu Jitsu, MMA, and more.
            </p>
            <p>
              As a USA Wrestling sanctioned club and Team Mohler affiliate, we give our
              athletes access to competitive opportunities at the local, regional, state,
              and national level. Our wrestlers have earned district championships, state duals
              appearances, and national tournament placements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--gray">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">Our Values</h2>
          </motion.div>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="value-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } },
                }}
              >
                <div className="value-card__icon">
                  <v.icon size={24} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Staff */}
      <section className="section section--dark">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">Coaching Staff</h2>
            <p className="section-subtitle">
              Our coaches bring years of competitive experience and a passion for developing athletes.
            </p>
          </motion.div>
          <div className="coaches-grid">
            {coaches.map((coach, i) => (
              <motion.div
                key={coach.name}
                className="coach-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.15 } },
                }}
              >
                <div className="coach-card__avatar">
                  {coach.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="coach-card__name">{coach.name}</h3>
                <span className="coach-card__role">{coach.role}</span>
                <p className="coach-card__bio">{coach.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="section">
        <div className="container affiliations">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">Affiliations</h2>
          </motion.div>
          <div className="affiliations-grid">
            <div className="affiliation-card">
              <Award size={32} />
              <h3>USA Wrestling</h3>
              <p>Sanctioned Club #{clubInfo.usaWrestlingId}</p>
            </div>
            <div className="affiliation-card">
              <Award size={32} />
              <h3>Team Mohler</h3>
              <p>BJJ Affiliation</p>
            </div>
            <div className="affiliation-card">
              <Award size={32} />
              <h3>BJJ Globetrotters</h3>
              <p>Listed Affiliate Gym</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

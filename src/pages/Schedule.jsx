import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { schedule } from '../data/schedule';
import './Schedule.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const filters = ['All', 'Wrestling', 'Jiu Jitsu', 'MMA', 'Open Mat'];

function getClassType(name) {
  const lower = name.toLowerCase();
  if (lower.includes('wrestling')) return 'Wrestling';
  if (lower.includes('jiu jitsu') || lower.includes('bjj')) return 'Jiu Jitsu';
  if (lower.includes('mma') || lower.includes('striking') || lower.includes('boxing')) return 'MMA';
  if (lower.includes('open')) return 'Open Mat';
  return 'Other';
}

function getTypeColor(type) {
  switch (type) {
    case 'Wrestling': return 'schedule-tag--wrestling';
    case 'Jiu Jitsu': return 'schedule-tag--bjj';
    case 'MMA': return 'schedule-tag--mma';
    case 'Open Mat': return 'schedule-tag--openmat';
    default: return '';
  }
}

export default function Schedule() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredSchedule = schedule.map((day) => ({
    ...day,
    classes: day.classes.filter((c) => {
      if (activeFilter === 'All') return true;
      return getClassType(c.name) === activeFilter;
    }),
  })).filter((day) => day.classes.length > 0);

  return (
    <div className="schedule-page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="page-hero__title">Class Schedule</h1>
            <p className="page-hero__subtitle">
              Find the right class for your schedule. Training 6 days a week.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="schedule-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`schedule-filter ${activeFilter === f ? 'schedule-filter--active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="schedule-grid">
            {filteredSchedule.map((day, i) => (
              <motion.div
                key={day.day}
                className="schedule-day"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } },
                }}
              >
                <div className="schedule-day__header">
                  <h3>{day.day}</h3>
                </div>
                <div className="schedule-day__classes">
                  {day.classes.map((cls, j) => {
                    const type = getClassType(cls.name);
                    return (
                      <div key={j} className="schedule-class">
                        <div className="schedule-class__time">
                          <Clock size={14} />
                          <span>{cls.time}</span>
                        </div>
                        <div className="schedule-class__info">
                          <span className="schedule-class__name">{cls.name}</span>
                          <span className={`schedule-tag ${getTypeColor(type)}`}>{type}</span>
                        </div>
                        {cls.coach && (
                          <div className="schedule-class__coach">
                            <User size={14} />
                            <span>{cls.coach}</span>
                          </div>
                        )}
                        <span className="schedule-class__level">{cls.level}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="schedule-note">
            <p>Schedule subject to change. Follow us on social media for updates.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

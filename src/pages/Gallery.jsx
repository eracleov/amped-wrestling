import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Image } from 'lucide-react';
import './Gallery.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const categories = ['All', 'Training', 'Competitions', 'Events', 'Team'];

const placeholders = [
  { id: 1, category: 'Training', label: 'Wrestling Practice' },
  { id: 2, category: 'Competitions', label: 'State Duals' },
  { id: 3, category: 'Training', label: 'Open Mat Saturday' },
  { id: 4, category: 'Events', label: 'Team Photo' },
  { id: 5, category: 'Competitions', label: 'District Tournament' },
  { id: 6, category: 'Training', label: 'Jiu Jitsu Class' },
  { id: 7, category: 'Team', label: 'Coaching Staff' },
  { id: 8, category: 'Competitions', label: 'Ring of Fire' },
  { id: 9, category: 'Events', label: 'Club Gathering' },
  { id: 10, category: 'Training', label: 'MMA Striking' },
  { id: 11, category: 'Team', label: 'Youth Wrestlers' },
  { id: 12, category: 'Competitions', label: 'Regionals' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? placeholders
    : placeholders.filter((p) => p.category === activeCategory);

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="page-hero__title">Gallery</h1>
            <p className="page-hero__subtitle">
              Moments from the mat — training, competitions, and the Amped community.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`schedule-filter ${activeCategory === cat ? 'schedule-filter--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                className="gallery-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: i * 0.05 } },
                }}
              >
                <div className="gallery-item__placeholder">
                  <Camera size={32} />
                  <span>{item.label}</span>
                </div>
                <div className="gallery-item__overlay">
                  <span className="gallery-item__label">{item.label}</span>
                  <span className="gallery-item__cat">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="gallery-note">
            <Image size={20} />
            <p>
              Add your photos! Replace the placeholders in <code>public/images/</code> and update
              the gallery data to showcase real Amped moments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

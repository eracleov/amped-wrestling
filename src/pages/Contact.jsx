import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { clubInfo } from '../data/clubInfo';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="page-hero__title">Contact Us</h1>
            <p className="page-hero__subtitle">
              Have questions? Ready to start training? Reach out to us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="section-title">Get in Touch</h2>

            <div className="contact-item">
              <div className="contact-item__icon"><MapPin size={20} /></div>
              <div>
                <h4>Location</h4>
                <p>{clubInfo.address.street}</p>
                <p>{clubInfo.address.city}, {clubInfo.address.state} {clubInfo.address.zip}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item__icon"><Phone size={20} /></div>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${clubInfo.phone}`}>{clubInfo.phone}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item__icon"><Mail size={20} /></div>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${clubInfo.email}`}>{clubInfo.email}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item__icon"><Clock size={20} /></div>
              <div>
                <h4>Training Hours</h4>
                <p>Mon - Thu: 5:00 PM - 9:00 PM</p>
                <p>Fri: 6:00 PM - 7:30 PM</p>
                <p>Sat: 9:00 AM - 11:00 AM</p>
              </div>
            </div>

            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="contact-social__links">
                <a href={clubInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} /> Facebook
                </a>
                <a href={clubInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} /> Instagram
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {submitted ? (
              <div className="contact-success">
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you soon.</p>
                <button className="btn btn--primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send Us a Message</h3>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="(940) 555-0000" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows="5" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="contact-map">
        <iframe
          title="Amped Wrestling Location"
          src={clubInfo.mapEmbedUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}

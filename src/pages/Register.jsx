import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { programs } from '../data/programs';
import './Register.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ageGroups = [
  'Youth (5-7)',
  'Youth (8-12)',
  'Teen (13-17)',
  'Adult (18+)',
];

export default function Register() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ageGroup: '',
    program: '',
    experience: '',
    message: '',
    waiver: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="register-page">
        <section className="page-hero">
          <div className="container">
            <h1 className="page-hero__title">Registration</h1>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <motion.div className="register-success" initial="hidden" animate="visible" variants={fadeUp}>
              <CheckCircle size={64} />
              <h2>Registration Submitted!</h2>
              <p>Thank you for your interest in Amped Wrestling. We'll be in touch soon to get you started.</p>
              <button className="btn btn--primary btn--lg" onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', phone: '', ageGroup: '', program: '', experience: '', message: '', waiver: false }); }}>
                Register Another
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="register-page">
      <section className="page-hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="page-hero__title">Join Amped Wrestling</h1>
            <p className="page-hero__subtitle">
              Fill out the form below and we'll get you on the mat.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container register-container">
          <motion.form
            className="register-form"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3>Registration Form</h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First name" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Last name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="(940) 555-0000" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ageGroup">Age Group</label>
                <select id="ageGroup" name="ageGroup" value={form.ageGroup} onChange={handleChange} required>
                  <option value="">Select age group</option>
                  {ageGroups.map((ag) => (
                    <option key={ag} value={ag}>{ag}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="program">Program Interest</label>
                <select id="program" name="program" value={form.program} onChange={handleChange} required>
                  <option value="">Select a program</option>
                  {programs.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="experience">Experience Level</label>
              <select id="experience" name="experience" value={form.experience} onChange={handleChange} required>
                <option value="">Select experience</option>
                <option value="none">No experience</option>
                <option value="beginner">Beginner (less than 1 year)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="advanced">Advanced (3+ years)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Info (optional)</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="3" placeholder="Anything else we should know?"></textarea>
            </div>

            <div className="form-group form-group--checkbox">
              <input type="checkbox" id="waiver" name="waiver" checked={form.waiver} onChange={handleChange} required />
              <label htmlFor="waiver">
                I acknowledge that participation in wrestling and martial arts involves physical contact and risk of injury.
                I agree to sign a full waiver at the gym before participating in any classes.
              </label>
            </div>

            <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center' }}>
              Submit Registration
            </button>
          </motion.form>

          <motion.div
            className="register-sidebar"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="register-info-card">
              <h4>What to Expect</h4>
              <ul>
                <li>We'll contact you within 24-48 hours</li>
                <li>Your first class is a free trial</li>
                <li>Wear athletic clothing</li>
                <li>Wrestling shoes optional for first visit</li>
                <li>Bring water and a positive attitude</li>
              </ul>
            </div>
            <div className="register-info-card">
              <h4>Questions?</h4>
              <p>Call us at <a href={`tel:${form.phone}`}>{form.phone || '(940) 782-0886'}</a> or message us on social media.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

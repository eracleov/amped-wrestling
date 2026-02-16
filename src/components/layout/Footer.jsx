import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, MapPin, Mail } from 'lucide-react';
import { clubInfo } from '../../data/clubInfo';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">A</span>
              <span>AMPED WRESTLING</span>
            </div>
            <p className="footer__tagline">{clubInfo.tagline}</p>
            <div className="footer__social">
              <a href={clubInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href={clubInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Quick Links</h4>
            <Link to="/programs">Programs</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/athletes">Athletes</Link>
            <Link to="/results">Results</Link>
            <Link to="/register">Join Now</Link>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Programs</h4>
            <Link to="/programs#wrestling">Wrestling</Link>
            <Link to="/programs#bjj">Jiu Jitsu</Link>
            <Link to="/programs#mma">MMA / Striking</Link>
            <Link to="/programs#openmat">Open Mat</Link>
          </div>

          <div className="footer__contact">
            <h4 className="footer__heading">Contact</h4>
            <div className="footer__contact-item">
              <MapPin size={16} />
              <span>{clubInfo.address.street}, {clubInfo.address.city}, {clubInfo.address.state} {clubInfo.address.zip}</span>
            </div>
            <div className="footer__contact-item">
              <Phone size={16} />
              <a href={`tel:${clubInfo.phone}`}>{clubInfo.phone}</a>
            </div>
            <div className="footer__contact-item">
              <Mail size={16} />
              <a href={`mailto:${clubInfo.email}`}>{clubInfo.email}</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Amped Wrestling Club. All rights reserved.</p>
          <p>USA Wrestling Club #{clubInfo.usaWrestlingId} &bull; {clubInfo.affiliation} Affiliate</p>
        </div>
      </div>
    </footer>
  );
}

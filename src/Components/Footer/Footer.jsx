// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3 className="footer-title">Galerie d'Art</h3>
                <p>Adresse : 123 Rue de l'Art, Paris</p>
                <p>Téléphone : +33 1 23 45 67 89</p>
                <p>
                    Email : <a href="mailto:contact@galeriedart.com">contact@galeriedart.com</a>
                </p>
                
                <div className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                </div>

                <div className="footer-links">
                    <a href="/about">À propos</a>
                    <a href="/privacy-policy">Politique de confidentialité</a>
                    <a href="/terms-of-use">Conditions d'utilisation</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Galerie d'Art. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;

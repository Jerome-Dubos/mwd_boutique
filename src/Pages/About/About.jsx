// src/pages/AboutPage.js
import React from 'react';
import './About.css';

const AboutPage = () => (
    <div className="about">
        <h2>À propos de nous</h2>
        <p>
            Bienvenue dans notre galerie d'art en ligne ! Nous proposons une collection
            unique d'œuvres d'art soigneusement sélectionnées pour sublimer votre espace
            et inspirer votre créativité.
        </p>
        
        <div className="contact-info">
            <h3>Informations de Contact</h3>
            <p>Adresse : 123 Rue de l'Art, Paris</p>
            <p>Téléphone : +33 1 23 45 67 89</p>
            <p>Email : contact@galeriedart.com</p>
        </div>

        {/* Section de Contact */}
        <div className="contact-section">
            <h3>Nous Contacter</h3>
            <form className="contact-form">
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Votre nom" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Votre adresse email" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Votre message"></textarea>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    </div>
);

export default AboutPage;

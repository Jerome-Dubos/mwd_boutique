// src/components/About.js
import React from 'react';
import artworksData from '../../data/Artworks.json'; // Changer le nom du fichier
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h1>À Propos de Notre Galerie</h1>
            <p>Bienvenue dans notre galerie d'art. Nous sommes dédiés à la promotion des artistes talentueux.</p>

            <h2>Galerie des Précédents Projets</h2>
            <div className="gallery">
                {artworksData.map((work) => (
                    <div key={work.id} className="gallery-item">
                        <img src={work.imageUrl} alt={work.title} className="gallery-image" />
                        <h3 className="gallery-title">{work.title}</h3>
                        <p className="gallery-artist">Artiste : {work.artist}</p>
                        <p className="gallery-status">{work.available ? "Disponible" : "Vendu"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;

// src/pages/Home.js
import React from 'react';
import PaintingList from '../../Components/PaintingList/PaintingList';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Bienvenue dans notre galerie d'art</h1>
            <PaintingList />
        </div>
    );
};

export default Home;

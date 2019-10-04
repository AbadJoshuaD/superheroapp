import React from 'react';
import './hero-image.styles.scss'

export const HeroImage = props => (
    <div className="image-container">
        <img src={props.hero.images.lg} alt="hero" className="hero-image"/>
        <h2 className="hero-name">{props.hero.name}</h2>
    </div>

)
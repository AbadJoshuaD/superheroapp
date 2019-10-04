import React from 'react';
import '../hero-info/hero-info.styles.scss'
import {HeroImage} from '../hero-image/hero-image.component'
import {HeroStats} from '../hero-stats/hero-stats.component'

export const HeroInfo = props => (
    <div className="hero-info-container">
    <div className="hero-info">
    {props.heroes.map(hero => (
        <HeroImage key={hero.id} hero={hero}
        />
      ))}
            <HeroStats></HeroStats>
    </div>

    </div>
)
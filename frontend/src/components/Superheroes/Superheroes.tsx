import "./Superheroes.css";
import React from "react";
import { ISuperheroModel } from "../../models/Superhero.model";
import { convertSuperpowerToString } from "../../utils/utils";

interface SuperheroesProps {
  superheroes: ISuperheroModel[];
}

export function Superheroes({ superheroes }: SuperheroesProps) {
  return (
    <div className="superheroes">
      <h2>Superheroes by Humility</h2>
      <div className="superheroes-grid">
        {superheroes.map((hero, index) => (
          <div key={index} className="superhero-card">
            <h3>{hero.name}</h3>
            <p>Superpower: {convertSuperpowerToString(hero.superpower)}</p>
            <p>Humility Score: {hero.humilityScore}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 
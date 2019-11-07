import React from "react";
import "./style.css";
import { typeColors } from "./pokemonTypes";

export default function Card({ pokemon }) {
  return (
    <div className="Card">
      <div className="Card__img">
        <img src={pokemon.sprites.front_default} alt="pokemon" />
      </div>
      <div className="Card__name">{pokemon.name}</div>
      <div className="Card__types">
        {pokemon.types.map(type => (
          <div
            className="Card__type"
            style={{ backgroundColor: typeColors[type.type.name] }}
          >
            {type.type.name}
          </div>
        ))}
      </div>
      <div className="Card__info">
        <div className="Card__data Card__weight--data">
          <p className="title">Weight</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="Card__data Card__height--data">
          <p className="title">Height</p>
          <p>{pokemon.height}</p>
        </div>
        <div className="Card__data Card__data--ability">
          <p className="title">Ability</p>
          <p>
            {pokemon.abilities.map(abilities => (
              <p>{abilities.ability.name}</p>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

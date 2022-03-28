import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({pokemonUrl}) => {
    const [pokeApi,setPokeApi]=useState({})
    useEffect(()=>{
        axios.get(pokemonUrl)
        .then((res)=>{
            setPokeApi(res.data)
                })

    },[pokemonUrl])
    return (
      <Link to={`/pokedesk/${pokeApi.id}`}>
        <div className="container_pokedesk_card">
          <div className="pokedesk_img">
            <img
              src={pokeApi.sprites?.other["official-artwork"].front_default}
              alt="pokemon"
            />
          </div>
          <div className="pokedesk_info">
            <h2>{pokeApi.name}</h2>
            <ul>
              <li>
                <b>type: </b>
                {pokeApi.types?.[0].type.name}
              </li>
              <li>
                <b>hp: </b>
                {pokeApi.height}
              </li>
              <li>
                <b>defense: </b>
                {pokeApi.stats?.[2].base_stat}
              </li>
              <li>
                <b>attack: </b>
                {pokeApi.stats?.[1].base_stat}
              </li>
              <li>
                <b>speed: </b>
                {pokeApi.stats?.[0].base_stat}
              </li>
            </ul>
          </div>
        </div>
      </Link>
    );
};

export default PokemonCard;
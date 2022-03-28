import "../styles/card.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";

const Pokedesk = () => {
  const userName = useSelector((state) => state.userName);
  const [pokeName, setPokeName] = useState("");
  const [pokeTypes, setPokeTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();
  const [page,setPage]= useState(1)
  const itemPage =8;
  const endPage = page*itemPage;
  const firstPage =endPage-itemPage;
  const pokepagined = pokemons?.slice(firstPage,endPage)
  const pageTotal=Math.ceil(pokemons?.length/itemPage)
  const buttonPages =[]
  for(let i=1;i<= pageTotal;i++){
    buttonPages.push(i)
  }
  
  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1120/")
      .then((response) => {
        setPokemons(response.data.results);
      });
    axios.get(" https://pokeapi.co/api/v2/type/").then((res) => {
      setPokeTypes(res.data.results);
    });
  }, []);
  const submit = (e) => {
    e.preventDefault();

    navigate(`/pokedesk/${pokeName}`);
  };
  console.log(pokemons);
  const handleType = (e) => {
    axios.get(e.target.value).then((res) => {
      setPokemons(res.data.pokemon);
      console.log(res.data.pokemon);
    });
  };

  return (
    <div className="container_pokedesk">
      <h1>pokedesk</h1>
      <br />
      <p>Welcome  {userName}  ,what is your pokemon!!</p>
      <div className="container_select">
        <select className="select" onChange={handleType}>
          <option>select type pokemon..</option>
          {pokeTypes.map((pokeType) => (
            <option key={pokeType.url} value={pokeType.url}>
              {pokeType.name}
            </option>
          ))}
        </select>
      </div>

      <form className="form_search_pokemon" onSubmit={submit}>
        <input
          type="text"
          id="poke-name"
          placeholder="Search pokemon"
          value={pokeName}
          onChange={(e) => setPokeName(e.target.value)}
        />
        <button>
          <b>
            <i className="fas fa-search"></i>
          </b>
        </button>
      </form>
      <div className="button_bar">
        <button
          className="btn_btn_page"
          onClick={() => setPage(page - 1)}
          disabled={page <= 1}
        >
          <b>
            <i className="fas fa-angle-double-left"></i>
          </b>
        </button>
        {page}-- OF --{pageTotal}
        <button
          className="btn_btn_page"
          onClick={() => setPage(page + 1)}
          disabled={page >= pageTotal}
        >
          <b>
            <i className="fas fa-angle-double-right"></i>
          </b>
        </button>
      </div>
      <div className="data_pokemon">
        {pokepagined?.map((pokemon) => (
          <PokemonCard
            pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
            key={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedesk;

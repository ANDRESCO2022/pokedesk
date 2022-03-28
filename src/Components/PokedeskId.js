import '../styles/pokeinfo.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedeskId = () => {
    const {id} =useParams();
    const [selected,setSelected]=useState({})
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=>{setSelected(res.data)

            
        }
        )

    },[id])
    return (
      <div className="container_info">
        <div className="logo_pokemopn">
          <img
            src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png"
            alt="pokemon!"
          />
        </div>
        <div className="container_info_img">
          <img
            src={selected.sprites?.other["official-artwork"].front_default}
            alt="img_selected"
          />
        </div>
        <div className="container_infoStats">
          <div className="container_info_wh">
            <h2>
              {selected.weight}
              <br />
              <b>weight</b>
            </h2>
            <h2>
              {selected.height}
              <br />
              <b>height</b>
            </h2>
          </div>
          <div className="container_info_name">
            <h1>{selected.name}</h1>
            <p>
              <b>#</b>
              {selected.id}
            </p>
          </div>
        </div>
        <div className="container_descripter">
          <div className="container_info_types">
            <div className="container_info_nameType">
              <h1 className="title_type"> Type</h1>             
              <div> {selected.types?.[0].type.name}</div> 
            </div>
          </div>
          <div className="container_info_abilities">
            <div className="container_info_nameAbilities">
              <h1 className="title_abilities"> Abilities</h1>
              <div> {selected.abilities?.[0].ability.name}</div>
              <div> {selected.abilities?.[1].ability.name}</div>
            </div>
          </div>
          <div className="container_info_states">
            <div className="container_info_dateStates">
              <h1 className="title_states"> State Base </h1>
              <div className="container_info_bar">
                <div className="container_info_stat">hp</div>
                <div className="container_info_date">
                <div className="container_info_details" >{selected.stats?.[0].base_stat}/150</div> 
                </div>
              </div>
              <div className="container_info_bar">
                <div className="container_info_stat">attack</div>
                <div className="container_info_date">
                <div className="container_info_details" >{selected.stats?.[1].base_stat}/150</div> 
                </div>
              </div>
              <div className="container_info_bar">
                <div className="container_info_stat">defense</div>
                <div className="container_info_date">
                <div className="container_info_details" >{selected.stats?.[2].base_stat}/150</div> 
                </div>
              </div>
              <div className="container_info_bar">
                <div className="container_info_stat">speed</div>
                <div className="container_info_date">
                <div className="container_info_details" >{selected.stats?.[5].base_stat}/150</div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PokedeskId;
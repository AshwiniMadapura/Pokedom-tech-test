// import pokemon array

import{pokemonArray} from "./data/pokemon.js";
console.log(pokemonArray.length);

// select the main container
const container=document.querySelector(".card-container")
console.log("container"+container);

const toProper=(string)=>{
    return string[0].toUpperCase()+string.substring(1);
}

const generateImage=(pokemon)=>{
    return `<img src="${pokemon.sprite}" alt="${toProper(pokemon.name)}" class=".card__image" />`
}
const generateCardContent=(pokemon)=>{
    const heading=`<h2 class="card__heading">${toProper(pokemon.name)}</h2>`
    // let typeDescr= pokemon.types.map(type=>{
    //     return "&" +type;
    // }).join("");
    let typeDescr=pokemon.types.join(" & ")
    const text=`<p class="card__text">${pokemon.name} (#${pokemon.id}) is a ${typeDescr} type pokemon.</p>`;
    return `<div class="card__content">${heading} ${text}</div>`;
}

// for each pokemon in array
pokemonArray.forEach((pokemon)=>{
    console.log(pokemon.name)

    //  generating html for a card from pokemon object
    const card=`<article class="card">${generateImage(pokemon)} ${generateCardContent(pokemon)}</article>`;

    // add html to dom
     container.innerHTML+=card;
// end loop
})

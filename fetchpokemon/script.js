// --------------------firebase------------------//
firebase.initializeApp ({
  apiKey: "AIzaSyD00cRXFYl2i-1XMfWpUZ4tRYmSgh-ylxc",
  authDomain: "abfirebase-bf069.firebaseapp.com",
  projectId: "abfirebase-bf069",
  storageBucket: "abfirebase-bf069.appspot.com",
  messagingSenderId: "58221352827",
  appId: "1:58221352827:web:348703bda3cf187302cfde",
 
});




// ---------------------API-----------------------//


let tab = [];
let ul = document.getElementById("UL");
const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
let fitre = document.getElementById("filter")




async function load(url, callback) {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(url)
  callback(data);
  // console.log(data);

  //   tab = data;
}


load(url, display);

function display(data) {
 
  // console.log(data.results);
innerHTML = ""
tab = [];
  if (data.results) {
    tab = data.results
    for (pokemon of data.results) {
      load(pokemon.url, newFunction);
      
    }
  }
  
}

//---------------------DISPLAY-----------------------//

function newFunction(pokemon) {
  
  tab.push(pokemon);
  // console.log(pokemon)
  if (pokemon.types[1]) {

    ul.innerHTML += `<li>
        <p id="title"> ${pokemon.name} </p>
        <p id="genre">type : ${pokemon.types[1].type.name} & ${pokemon.types[0].type.name}</p>

        <img src="${pokemon.sprites.front_default}" alt="" id="pok"/>
        
      </li> `;
  }
}


// fitre.addEventListener("keyup", (e) => {
//   const search = e.target.value.toLowerCase()

//   const fil = tab.filter((pok) => {
//     return (
//       pok.name.toLowerCase().includes(search))

//   })
//   console.log(fil)
//   for(pokemon of fil){
//   newFunction (pokemon)
//   // console.log
//   }
  
// })




// simpleFetch(urlPokemons, display)

// function display(pokemons){

// for ( pokemon of pokemons.results){

// simpleFetch(pokemon.url, displayPokemon)

// }

// //    for(let i = 0; i < pokemons.length; i++){

// //        console.log(pokemons.length[i])

// //    }

// // pokemons.results.forEach(pokemon => console.log(pokemon));

// // pokemons.results.map(pokemon => console.log(pokemon));

// }

// function displayPokemon(pokemon) {

// //image =>  pokemon.sprites.front_default

// console.log(pokemon.sprites.front_default)

// document.querySelector('div').innerHTML += ` <h2>${pokemon.name}</h2>

// <img src="${pokemon.sprites.front_default}"> <br>`

// }






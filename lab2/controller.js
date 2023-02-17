async function fetchpokemon(URL) {
    try {
        let data= await fetch(URL);
        let res= await data.json();
        return res;
    } catch (error) {
        console.log(error);
    }
}

async function createCard1(){
let bulbasur= await fetchpokemon("https://pokeapi.co/api/v2/pokemon/1");

const h1=document.getElementById("Bname")
h1.innerHTML=`${bulbasur.name}`;

const gif = document.getElementById("Bgif");
gif.src=`${bulbasur.sprites.versions[`generation-v`][`black-white`].animated.front_default}`;

const stats=document.getElementById("Bstats");
stats.innerHTML=`Número en la pokedex: ${bulbasur.id}<br> 
EXP base: ${bulbasur.base_experience}<br>
Peso: ${bulbasur.weight} kg.
`;

gif.addEventListener("click",()=>{
    stats.classList.remove("off")
    stats.classList.add("on")
})

}

async function createCard2(){
let charmander= await fetchpokemon("https://pokeapi.co/api/v2/pokemon/4");

const h1=document.getElementById("Cname")
h1.innerHTML=`${charmander.name}`;

const gif = document.getElementById("Cgif");
gif.src=`${charmander.sprites.versions[`generation-v`][`black-white`].animated.front_default}`;

const stats=document.getElementById("Cstats");
stats.innerHTML=`Número en la pokedex: ${charmander.id}<br> 
EXP base: ${charmander.base_experience}<br>
Peso: ${charmander.weight} kg.
`;

gif.addEventListener("click",()=>{
    stats.classList.remove("off")
    stats.classList.add("on")
})

}

async function createCard3(){
let Squirtle= await fetchpokemon("https://pokeapi.co/api/v2/pokemon/7");

const h1=document.getElementById("Sname")
h1.innerHTML=`${Squirtle.name}`;

const gif = document.getElementById("Sgif");
gif.src=`${Squirtle.sprites.versions[`generation-v`][`black-white`].animated.front_default}`;

const stats=document.getElementById("Sstats");
stats.innerHTML=`Número en la pokedex: ${Squirtle.id}<br> 
EXP base: ${Squirtle.base_experience}<br>
Peso: ${Squirtle.weight} kg.
`;

gif.addEventListener("click",()=>{
    stats.classList.remove("off")
    stats.classList.add("on")
})

}
createCard1();
createCard2();
createCard3();
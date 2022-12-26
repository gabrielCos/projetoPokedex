var listaPokemons = document.querySelectorAll(".pokemons"); 


/*criando conteúdo ao clicar*/ 
/*listaPokemons.forEach(item => {
    item.addEventListener('click', event => {
        var child = document.createElement("div")
        var text = document.createTextNode("lore")
        child.appendChild(text)
        child.classList.add("descricaoPokemon")
        console.log(event.target.appendChild(child))
        //item.firstChild.style.display = 'block';
    })
  })*/

//mudando o background das divis

/*listaPokemons.forEach(e => {
    e.style.backgroundColor = "#0f0"
});*/

/*mudando cor do background com um*/ 

listaPokemons.forEach(item => {
    item.addEventListener('click', event => {
        if (item.classList.contains('pokemons')){ 
            item.classList.remove('pokemons')       
            item.classList.add('pokemonsVermelho')
        }else if(item.classList.contains('pokemonsVermelho')) {
            item.classList.remove('pokemonsVermelho')
            item.classList.add('pokemons')
        }
    })
})
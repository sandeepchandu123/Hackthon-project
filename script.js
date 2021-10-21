var pokemon = [];
const fetchPokemon = async () => {

  try{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`); 
   var results = await res.json(); 
  
  
  results.results.map((result) => {
    
    let obj = {
    name: result.name,
  
   };
  
  fetchInnerData(result.url,obj);
  
});
}
catch(err){
  console.error(err);
  // Handle errors here
}  
};
fetchPokemon();

var card = document.createElement("div");
card.className = "container-fluid row";  


const fetchInnerData = async (url, obj) => {
  const res =  await fetch(url); 
  var results = await res.json(); 
 
 
    obj['image'] =  results.sprites['front_default'];
    obj['type'] = results.types.map((type) => type.type.name).join(', ');
    obj['id'] = results.id;
    obj['weight'] = results.weight;
    //obj['moves'] = results.moves;

    obj['moves'] = results.moves.map((moves) => moves.move.name).join(', ');
    obj['abilities'] = results.abilities.map((abilities) => abilities.ability.name).join(', ');
   // obj['abilities'] = results.abilities;
    pokemon.push(obj);
    console.log('poke', results.types.map((type) => type.type.name).join(', '));
         

  
    
for (var i = 0; i < pokemon.length; i++) 
{

  var table  = `
  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xs-12">
  <div class="inner">
    <div class="row">
      <div class="col-md-12 pokemon">
           <div class="row">
                <div class="col-md-3 pokemon-image">

                  <div class="img-container">
                    <img src="${pokemon[i].image}" class="imgtag">
                  </div>
                </div>


                <div class="col-md-9">
                <div class="container">
                  <p><b>Name</b>:<span>${pokemon[i].name}</span></p>
                  <p><b>Abilities</b>: <span>${pokemon[i].abilities} </span></p>
                  <p><b>Weight</b>: <span>${pokemon[i].weight} </span></p>
                </div>  
                </div>
            </div>    

         
      </div>




    
      <div class="col-md-12">
        <div class="container">
      

          <p><b>Moves</b>:<span>
                            
          ${pokemon[i].moves} 
          </span>
          </p>
         
                    
         
        </div>
      </div>
    </div>
    </div>
</div>
`
          
}
card.innerHTML += table;  
document.body.append(card);  

}



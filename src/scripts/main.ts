//EVENTO SUBMIY QUE VA A TIRAR LA INFORMACION
    const boton = document.querySelector(".group"); //SELECCION DE LA class DEL form
    boton?.addEventListener('submit', (event) => {
        event.preventDefault() //NO SE RECARGA LA PAGE
        const valor = boton.querySelector('input[type="search"]') as HTMLInputElement; //VARIABLE QUE SELECCIONA EL INPUT y LO TIPA CON HTMLInputElement PARA USAR EL .value
        const input = valor.value;
        valor.value=''; //LIMPIA EL input;
        const buscarPokemonApp = buscarPokemon(input); 
    }) 

//FUNCION PARA BUSCAR EL POKEMON
function buscarPokemon(name:any) {
    const prom = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`); //URL de la API de Pokemon
    
    prom.then(function(res) {
       if (!res.ok) { //DEVOLVERA TRUE o FALSE SI EL name QUE PUSE EN EL input exite
        mostrarError(); 
        return;
        } 
    //SI LA RESPUES ES CORRECTA, LA CONVERTIMOS A json  
    const prom2 = res.json();

    prom2.then(function(json){ //CONVIERTO LA RESPUESTA EN Json 
    console.log(json)//LO MUESTRO EN LA CONSOLA PARA VER SI LLEGA LA INFO
    mostrarPokemon(json);
    });
});
     //ESTAS DOS LINEAS NO HACEN FALTA PORQUE EL VALOR YA ME LO PASO EL EVENTO CON EL ARGUMENTO (name)
    //const inputEl = document.querySelector('#query'); SELECCION EL id DEL input
    //console.log(inputEl);
}

//FUNCION QUE VA A MOSTRAR ESE POKEMON
function mostrarPokemon(data:any){
    const divEl = document.querySelector('#resultado'); 
    const nombre = data.name; 
    const img = data.sprites.front_default;
    const altura = data.height; 
    const peso = data.weight;  
    //EXTRAE LOS NOMBRES DE LOS TIPOS Y UNE EN UN STRING. SI USABA SOLO forEach() devolvia numero 
    const tiposNombres = data.types.map((element: any) => element.type.name);
    const tiposString = tiposNombres.join(", ");
    
    function render() { 
    divEl!.innerHTML = ''; //LIMPIO 
    //MUESTRO DE NUEVO
    divEl!.innerHTML = `  
        <h2> ${nombre} </h2>
        <img src="${img}"> 
        <h4> Tipo: ${tiposString} </h4>
        <h4> Altura: ${altura} m </h4>
        <h4> Peso: ${peso} kg </h4>

        <style> 
        h2 {
        font-family: "Press Start 2P", system-ui;
        font-weight: 700;
        font-size: 20px;
        font-style: normal;
        text-align: center;
        padding: 10px;
        color: #000000; 
        margin-right: 5px;
        }
        h4{
        font-family: "Press Start 2P", system-ui;
        font-size: 15px;
        font-style: normal;
        padding: 10px;
        color: #222222;
        }
        </style>
    `   
    
    }
    render()
}


//FUNCION QUE VA A MOSTRAR EL ERROR 
function mostrarError(){
    const errorEl = document.querySelector('#resultado'); 
    errorEl!.innerHTML = '';
    errorEl!.innerHTML = `
    <p class = "error_p">Ese Pokemon no existe ⚠️</p>
    <style> 
        .error_p {
        font-family: "Press Start 2P", system-ui;
        font-size: 15px;
        font-style: normal;
        padding-bottom: 50px;
        color: #222222;
        }
    </style>
    `
}
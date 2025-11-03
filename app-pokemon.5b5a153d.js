let e=document.querySelector(".group");e?.addEventListener("submit",t=>{var o;t.preventDefault();let n=e.querySelector('input[type="search"]'),r=n.value;n.value="",o=r,fetch(`https://pokeapi.co/api/v2/pokemon/${o}`).then(function(e){let t;e.ok?e.json().then(function(e){var t;let o,n,r,s,l,i;console.log(e),t=e,o=document.querySelector("#resultado"),n=t.name,r=t.sprites.front_default,s=t.height,l=t.weight,i=t.types.map(e=>e.type.name).join(", "),o.innerHTML="",o.innerHTML=`  
        <h2> ${n} </h2>
        <img src="${r}"> 
        <h4> Tipo: ${i} </h4>
        <h4> Altura: ${s} m </h4>
        <h4> Peso: ${l} kg </h4>

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
    `}):((t=document.querySelector("#resultado")).innerHTML="",t.innerHTML=`
    <p class = "error_p">Este Pokemon no existe</p>
    <style> 
        .error_p {
        font-family: "Press Start 2P", system-ui;
        font-size: 15px;
        font-style: normal;
        padding-bottom: 50px;
        color: #222222;
        }
    </style>
    `)})});
//# sourceMappingURL=app-pokemon.5b5a153d.js.map

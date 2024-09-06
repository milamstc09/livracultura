function pesquisar(){

let section = document.getElementById("resultado-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value;

if(!campoPesquisa){
    section.innerHTML = "nenhum resultado encontrado"
   return
};

campoPesquisa = campoPesquisa.toLowerCase();

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for (let info of dados){
    titulo = info.titulo.toLowerCase()
    descricao = info.descricao.toLowerCase()
    tags = info.tags.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank"> ${info.titulo} </a> 
            </h2>
            <p class="descricao-meta">${info.descricao}</p>
            <a href="${info.link}" target="_blank"> Mais Informações </a> 
        </div>
        `
    }
    
}

if (!resultados){
    resultados = "nenhum resultado encontrado"
}

section.innerHTML = resultados;
}
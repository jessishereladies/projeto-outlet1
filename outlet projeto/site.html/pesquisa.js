const produtos = [{nome: "produto1", link: "produto1.html"}, 
    {nome: "produto2", link: "produto2.html"}]

   // função de pesquisa
    function pesquisar() {
const termo = document.getElementByClass("search").ariaValueMax.toLocaleLowerCase();
const resultados = dados.filter(item => item.toLocaleLowerCase().includes(termo))

// mostrar resultados na tela
const lista = document.getElementByClass("search-results");
lista.innerHTML = ""; //limpa os resultados anteriores

resultados.forEach(item => {
    const li =document.createElement("li")
    li.textContent = item;
    lista.appendChild(li);
});
    }
// adiciona o evento de escuta à digitação
document.getElementByClass("search").addEventListener("input", pesquisar);

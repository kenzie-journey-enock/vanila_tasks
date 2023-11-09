const vitrineCarrinho = document.querySelector(".carrinho ul");
const vitrinePrincipal = document.querySelector(".vitrineProdutos__vitrine");


//CARROCEL DESTAQUE
const arrayImagens = ["assets/img/1.png","assets/img/2.png","assets/img/3.png"]
const tagImg = document.querySelector(".carrosselDestaque>img")


//FUNÇÃO PARA DAR START NO CARROCEL
function carrocelStart(arrayImagens, tagImg, time){

    let contador = 0;

    setInterval(function(){

        if(contador < arrayImagens.length){
        tagImg.src = arrayImagens[contador] 
        contador++
        
        }else{
            contador = 0;
        }


    },time)
}

carrocelStart(arrayImagens,tagImg, 1000)

//1 FUNÇÃO PARA MONTAR TEMPLATE DO PRODUTO
    // VALIDAR PRODUTO EM PROMOÇÃO
    // PRODUTO EM ESTOQUE
    // TRATAR DO PREÇO
    
// 3 FUNÇÃO PARA LISTAR OS PRODUTOS
// A) PERCORRER O ARRAY DE OBJETOS, PASSANDO O CADA PRODUTO PARA FUNÇÃO TEMPLATE
// B) ADICIONAR NA VITRINE



//FUNÇÃO PARA CRIAR TEMPLATE DE PRODUTO => PRECISA RECEBER UM OBJETO
const templateProduto = (produto) => {
    //Desestruturação: = pegar as chaves do objeto.
    const {id,produtoNome,imageUrl,preco,precoPromocional,oferta,estoque,categoria} = produto
    
    
    //CRIANDO ELEMENTOS HTML:
    const li               = document.createElement("li");
    const img              = document.createElement("img");
    const h2               = document.createElement("h2");
    const precoProduto     = document.createElement("p");
    const precoPromo       = document.createElement("p");
    const button           = document.createElement("button");

    //ATRIBUINDO VALORES PARA OS ELEMENTOS:
    h2.innerText            = produtoNome;
    img.src                 = imageUrl;
    img.alt                 = produtoNome;
    precoProduto.innerText  = `R$ ${preco.replace(".",",")}`;
    precoPromo.innerText    = `R$ ${precoPromocional.replace(".",",")}`;
    button.innerText        = "Comprar";
    button.setAttribute("data-id", id);


    //ADICIONANDO ELEMENTOS NO TEMPLATE => LI:
    li.classList.add(".vitrineProdutos__vitrine__produto");//.className = add uma classe | .classList = add varias classes;
    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(precoProduto);
    li.appendChild(precoPromo);

if(oferta){
    li.appendChild(precoPromo);
    li.classList.add("promocao");
}

    li.appendChild(button);


    return li;
}


//FUNÇÃO PARA LISTAR PRODUTOS NA VITRINE:
//array de objetos
//listar template
//vitrine
const listarProdutos = (arrayProdutos, callTemplateProduto, vitrine) =>{

    //Limpar produtos repetindo
    vitrine.innerHTML= "";


    arrayProdutos.forEach(function(produto){
        const templateProduto = callTemplateProduto(produto);
        vitrine.appendChild(templateProduto);
        
    });

}
    listarProdutos(dataProdutos, templateProduto, vitrinePrincipal);







// vitrineCarrinho.addEventListener("click", limparProdutoCarrinho)

// function limparProdutoCarrinho(evt){
//     const buttonLimpar = evt.target
//     if(buttonLimpar.tagName === "BUTTON"){
//         array = ""; template = ""; limparVitrine="";
//         listarProdutos(array, template, limparVitrine);
//         console.log("oi")
//     }
// }

// FUNÇÃO PARA INTERCEPTAR EVENTO
vitrinePrincipal.addEventListener("click", interceptandoEvento)

function interceptandoEvento(evt){

    const buttonComprar = evt.target
    if(buttonComprar.tagName === "BUTTON"){

        const idProduto = buttonComprar.getAttribute("data-id")
        adicionarProdutoCarrinho(idProduto)
        atualizarQtdCarrino();
    }
}



// ADICIONAR PRODUTO CARRINHO
let carrinhoCompra = [];
function adicionarProdutoCarrinho(idProduto){
    // const produtoFiltrado = dataProdutos.find(function(produto){
    //     return produto.id == idProduto
    // })
    const produtoFiltrado = dataProdutos.find((produto)=>produto.id == idProduto)
    
    if(produtoFiltrado.estoque > 1){
        carrinhoCompra.push(produtoFiltrado);


        //REAPROVEITANDO A MESMA FUNÇÃO PARA LISTAR
        listarProdutos(carrinhoCompra, templateProduto, vitrineCarrinho)

        //console.log("Add Carrinho tem no estoque")
    }else{
       // console.log("Não tem no estoque")
    }
}




// FUNÇÃO PARA INTERCEPTAR CLIQUE CARRINHO


const interceptandoEventoCarrinho = (evt) =>{

    const buttonComprar = evt.target
    if(buttonComprar.tagName === "BUTTON"){

        const idProduto = buttonComprar.getAttribute("data-id")
       removerProdutoCarrinho(idProduto)
       atualizarQtdCarrino();
    }
}
vitrineCarrinho.addEventListener("click", interceptandoEventoCarrinho);
function removerProdutoCarrinho(idProduto){

    //PRIMEIRA FORMA DE REMOÇÃO
    const produtoFiltrado = carrinhoCompra.find((produto)=>produto.id == idProduto)
    const index = carrinhoCompra.indexOf(produtoFiltrado)
    carrinhoCompra.splice(index, 1)

    //SEGUNDA FORMA DE REMOÇÃO
   // carrinhoCompra = carrinhoCompra.filter((produto)=> produto.id !== Number(idProduto)) //Remove produtos replicados (SOLUÇÃO AVANÇADA)
    



    //REAPROVEITANDO A MESMA FUNÇÃO PARA LISTAR
    listarProdutos(carrinhoCompra, templateProduto, vitrineCarrinho)
    
}


//ATUALIZAR QUANTIDADE DO CARRINHO
function atualizarQtdCarrino(){
    const qtdProdutos = document.getElementById("qtdProdutos")
    const precoTotal = document.getElementById("precoTotal")

   qtdProdutos.innerText = `QTD Produtos: ${carrinhoCompra.length}`


   const total = carrinhoCompra.reduce(function(total, produto){
       if(produto.oferta === true){
        return total + Number(produto.precoPromocional);
       }else{
        return total + Number(produto.preco);
       }

    }, 0)

  precoTotal.innerText = `Total preço: R$${total},00`;

}

//console.log(dataProdutos) |=> Mostra o array de dataProtutos que esta no arquivo data_Produtos


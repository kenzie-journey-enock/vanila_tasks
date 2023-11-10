listIDs = []

function generatID(){
  let n = Math.random() * (100 - 0) + 0
  let verify = listIDs.filter((e)=> e === n)
  while (verify.lenght == 0){
    n = Math.random() * (100 - 0) + 0
    verify = listIDs.filter((e)=> e === n)
  }
  listIDs.push(parseInt(n))
}
for (let i = 0; i < 8; i++){
  generatID()
}

const dataProducts = [
  {
    id: listIDs[0],
    img: "./assets/img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["T-shirts"],
    stock: 10
  },
  {
    id: listIDs[1],
    img: "./assets/img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Accessories"],
    stock: 10
  },
  {
    id: listIDs[2],
    img: "./assets/img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Accessories"],
    stock: 10
  },
  {
    id: listIDs[3],
    img: "./assets/img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["T-shirts"],
    stock: 10
  },
  {
    id: listIDs[4],
    img: "./assets/img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["T-shirts"],
    stock: 10
  },
  {
    id: listIDs[5],
    img: "./assets/img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["T-shirts"],
    stock: 10
  },
  {
    id: listIDs[6],
    img: "./assets/img/um-par-de-treinadores.jpg",
    nameItem: "Champion Shoes",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Shoes"],
    stock: 10
  },
  {
    id: listIDs[7],
    img: "./assets/img/moda-sapatos-e-tenis.jpg",
    nameItem: "Champion Shoes 2",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Shoes"],
    stock: 10
  },
];

export const users = [
  {
    id: 1,
    user: "Enock",
    stack: "DJ",
    img: "./src/assets/img/enock.jpg",
  },
  {
    id: 2,
    user: "Samuel Persuhn",
    stack: "Front end Engineer",
    img: "./src/assets/img/user2.svg",
  },
  {
    id: 3,
    user: "Carlos Lima",
    stack: "UX e UI Designer",
    img: "./src/assets/img/user3.svg",
  },
  {
    id: 4,
    user: "Carla Maria",
    stack: "Back end Engineer",
    img: "./src/assets/img/user4.svg",
  },
  {
    id: 5,
    user: "Júlia Martins",
    stack: "Devop's",
    img: "./src/assets/img/user5.svg",
  },
  {
    id: 6,
    user: "Samuel Leão",
    stack: "Front end Engineer",
    img: "./src/assets/img/user1.svg",
  },
];

export const posts = [
  {
    id: 1,
    title:
      "A importancia de estudar a base da programação.",
    text: "Estudar a base da programação é de suma importância para qualquer pessoa que deseja se aventurar no mundo da tecnologia. Ter um conhecimento sólido sobre os fundamentos da programação permite compreender melhor como os códigos são construídos, as principais estruturas e algoritmos utilizados, além de desenvolver habilidades de resolução de problemas. Sem uma base sólida, os programadores correm o risco de se tornarem dependentes de bibliotecas e frameworks prontos, limitando suas possibilidades e dificultando o aprendizado de novas tecnologias.",
    user: users[0].user,
    stack: users[0].stack,
    img: users[0].img,
    likes: 42
  },
  {
    id: 2,
    title:
      "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
    text: "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força.",
    user: "Iris Silva",
    stack: "Front end Engineer",
    img: "./src/assets/img/user2.svg",
    likes: 25
  },
  {
    id: 3,
    title:
      "Programa de estágio abre vagas em Segurança da Informação com regime remoto",
    text: "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025.",
    user: "Carla Maria",
    stack: "Back end Engineer",
    img: "./src/assets/img/user4.svg",
    likes: 19
  },
  {
    id: 4,
    title: "O que é programação orientada a objetos e programação funcional",
    text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
    user: "Júlia Martins",
    stack: "Devop's",
    img: "./src/assets/img/user5.svg",
    likes: 8
  },
];

export const suggestUsers = [
  {
    id: 1,
    user: "Carlos Lima",
    stack: "UX e UI Designer",
    img: "./src/assets/img/user3.svg",
  },
  {
    id: 2,
    user: "Júlia Martins",
    stack: "Devop's",
    img: "./src/assets/img/user5.svg",
  },
  {
    id: 3,
    user: "Rafael Bertoldo",
    stack: "Fullstack Engineer",
    img: "./src/assets/img/user7.svg",
  },
  {
    id: 4,
    user: "Samuel Leão",
    stack: "Front end Engineer",
    img: "./src/assets/img/user1.svg",
  },
];

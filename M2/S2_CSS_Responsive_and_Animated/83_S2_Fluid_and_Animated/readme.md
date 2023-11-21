# S2 Fluid and Animated

## Como criar layouts fluidos em CSS?
Existem várias maneiras de criar layouts fluidos em CSS, incluindo o uso de unidades de medida flexíveis e o uso de recursos avançados, como o CSS Grid e o Flexbox.

- **Usando porcentagens:** Definir a largura de um elemento em porcentagem, em relação à largura do contêiner pai, é uma maneira simples e eficaz de criar um layout fluido em CSS.

- **Usando unidades de medida flexíveis:** As unidades de medida flexíveis, como em e rem, são calculadas com base no tamanho da fonte do elemento pai, o que significa que elas se ajustarão automaticamente à largura da tela. Isso é útil ao criar layouts fluidos para elementos de texto, como títulos e parágrafos.

-** Usando CSS Grid:** O CSS Grid é uma técnica de layout avançada que permite criar layouts complexos e responsivos com facilidade. Com o CSS Grid, você pode criar uma grade flexível de linhas e colunas, definir a largura e a altura de cada célula e ajustar automaticamente o layout em diferentes tamanhos de tela.

- **Usando Flexbox:** O Flexbox é outra técnica de layout avançada que permite criar layouts responsivos, especialmente para itens em uma linha ou coluna. Com o Flexbox, você pode criar um contêiner flexível que pode ser dimensionado, encolhido ou esticado para se ajustar à largura da tela do dispositivo.

Para criar um layout fluido usando o Flexbox, você pode definir o contêiner pai como um elemento de display flex e, em seguida, ajustar as propriedades flex, como flex-grow, flex-shrink e flex-basis, para definir como o layout será ajustado para diferentes tamanhos de tela.

## Exemplos de layouts fluidos em uso
A melhor maneira de entender como criar um layout fluido em CSS é ver exemplos reais em ação. Aqui estão alguns exemplos de layouts fluidos em uso:

- **Site de notícias:** Um site de notícias pode ter um layout fluido que se ajusta automaticamente à largura da tela do dispositivo do usuário. O cabeçalho do site pode ter uma largura fixa, mas o restante do conteúdo, incluindo as notícias, pode ser exibido em uma grade flexível usando o CSS Grid. Washington Post.
- **Blog pessoal:** Um blog pessoal pode ter um layout fluido que se adapta à largura da tela do dispositivo do usuário. O conteúdo do blog pode ser exibido em colunas flexíveis, que se ajustam automaticamente para caber na tela do dispositivo. Blog.
- **Loja virtual:** Uma loja virtual pode ter um layout fluido que se ajusta automaticamente à largura da tela do dispositivo do usuário. Os produtos podem ser exibidos em uma grade flexível usando o CSS Grid, com imagens e descrições ajustando-se para caber na tela do dispositivo. Amazon

## Max-width

Usar a largura máxima em seu site é uma técnica importante para garantir que os elementos não fiquem muito grandes em telas maiores. Usando a propriedade max-width em CSS, você pode definir a largura máxima para qualquer elemento em seu site, garantindo que o layout seja consistente e legível em qualquer dispositivo. Lembre-se sempre de usar a largura máxima em conjunto com técnicas de layout fluido, como unidades de medida flexíveis e técnicas de layout avançadas, como o CSS Grid e o Flexbox, para criar um site responsivo e adaptável que funcione em qualquer dispositivo. Combinar essas técnicas ajuda a garantir que seu site seja fácil de usar e acessível, independentemente do tamanho da tela do dispositivo do usuário. Lembre-se sempre de testar seu site em diferentes dispositivos para garantir que ele esteja funcionando corretamente em cada um deles.

## Layouts fluidos usando CSS Grid

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

## Layouts fluidos usando Flexbox

```css
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex-basis: calc(33.33% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
}
```

## Animações

### Criar

Para criar animações CSS, você deve primeiro definir uma animação usando a propriedade animation-name, definindo o nome da animação com um conjunto de keyframes.
```css
@keyframes animacao-exemplo {
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
```
Após definir a animação, você pode aplicá-la a um elemento usando a propriedade animation.
```css
.exemplo {
  animation-name: animacao-exemplo;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
``` 
Este código aplicará a animação chamada animacao-exemplo a todos os elementos com a classe exemplo, com uma duração de 2 segundos, uma velocidade de animação de ease-in-out e repetições infinitas.

Usando animações CSS para melhorar a experiência do usuário
As animações CSS podem ser usadas de várias maneiras para melhorar a experiência do usuário em um site. Alguns exemplos incluem:

- Adicionar efeitos de hover a botões e links, para indicar que eles são clicáveis.
- Animações de carregamento e transições, para tornar a navegação no site mais suave e atraente.
- Animações de rolagem, para guiar o usuário para diferentes partes do conteúdo da página.
- Adicionar feedback visual aos formulários, como indicar se um campo foi preenchido corretamente ou não.

[Usando animações CSS - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
[Animation - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/animation)
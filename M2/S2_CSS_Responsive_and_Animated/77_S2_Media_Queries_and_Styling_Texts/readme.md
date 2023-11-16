# S2 Media Queries and Styling Texts

## Conceito de breakpoints com media query

- Altere o código para que a cor de fundo do body e dos textos mude à medida que a tela seja redimensionada. Depois redimensione a tela para observar na prática.
- Altere a cor de fundo do body para salmão(#AF5A5A) e a cor dos textos para branco(#FFFFFF) a partir da resolução 768px;
- Altere novamente a cor de fundo do body para azul-claro(#5A73AF);
- Altere novamente a cor do body, agora para verde água(#5AAF9C);
- A partir de 480px mude a cor de fundo do body para #8A2BE2, mude a cor da fonte para #fff e aumente a fonte
- A partir de 767px mude a cor de fundo do body para #FF7F50 e a cor da fonte para #A9A9A9
- Entre 768px e 979px mude a cor de fundo do body para #000 e a cor da fonte para #7FFF00
- Defina o título com tamanho Grande.(30px).
- Para desktop grande com mínimo de 1200px atribua a cor #E0FFFF de fundo para body e #000 para a cor de fonte

## Bônus

- Adicione mais breakpoints e mude as cores mais algumas vezes
- Utilize os breakpoints para alterar o tamanho da fonte também.

## Notes

```css
/* MEDIA QUERY */
@media (orientation: landscape) {
  /* estilos para dispositivos em modo paisagem aqui */
}
@media (min-resolution: 300dpi) {
  /* estilos para dispositivos de alta resolução aqui */
}
/* Estilos para dispositivos com largura menor que 320px */
@media (max-width: 320px) {
  /* regras de estilo aqui */
}

/* Estilos para dispositivos com largura entre 321px e 480px */
@media (min-width: 321px) and (max-width: 480px) {
  /* regras de estilo aqui */
}

/* Estilos para dispositivos com largura entre 481px e 768px */
@media (min-width: 481px) and (max-width: 768px) {
  /* regras de estilo aqui */
}

/* Estilos para dispositivos com largura entre 769px e 1024px */
@media (min-width: 769px) and (max-width: 1024px) {
  /* regras de estilo aqui */
}
```
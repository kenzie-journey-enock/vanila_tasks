function procuraSobremesa(sobremesas, valorDoInput) {
  const resultados = sobremesas.filter((sobremesa) =>
    sobremesa.nome.toLowerCase().includes(valorDoInput.toLowerCase())
  );

  return resultados;
}

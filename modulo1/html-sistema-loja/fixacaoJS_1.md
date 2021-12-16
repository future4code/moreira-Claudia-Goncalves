```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let salarioFixo = 2000
  let comissao = ((100 * qtdeCarrosVendidos) + (valorTotalVendas * 0.05))
  let salarioTotal = salarioFixo + comissao
  return salarioTotal
}
```


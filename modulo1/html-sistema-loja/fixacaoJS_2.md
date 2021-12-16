````function calculaPrecoTotal(quantidade) {
  if (quantidade < 12){
    valorTotal = quantidade *1.3
  }else if(quantidade >= 12){
    valorTotal = quantidade * 1
  }
  return valorTotal
}
import { isEven, performPurchase } from "../src";

describe("Sequencia de testes", () => {
  test("testando par", () => {
    const resultado = isEven(20)
    expect(resultado).toBe(true)
  })
})


describe("Sequencia de testes para a função performPurchase", () => {
  test("deve retornar com saldo maior do que valor da compra", () => {
    const user: User = {
      name: "Claudia",
      balance: 5000,
    }
    const resultadoBalancoMaior = performPurchase(user, 1000)
    expect(resultadoBalancoMaior).toEqual({
      name: "Claudia",
      balance: 4000
    })
  })

  test("deve retornar com saldo igual valor da compra", () => {
    const user: User = {
      name: "Claudia",
      balance: 3000,
    }
    const resultadoBalancoMaior = performPurchase(user, 3000)
    expect(resultadoBalancoMaior).toEqual({
      name: "Claudia",
      balance: 0
    })
  })
  test("deve retornar com saldo menor que o valor da compra", () => {
    const user: User = {
      name: "Claudia",
      balance: 2000,
    }
    const resultadoBalancoMaior = performPurchase(user, 3000)
    expect(resultadoBalancoMaior).toEqual(undefined)
  })

})

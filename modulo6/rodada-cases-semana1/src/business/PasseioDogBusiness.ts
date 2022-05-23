import { PasseioDogData } from "../data/PasseioDogData";
import { CriarPasseioDogInputDTO } from "../model/CriarPasseioDogInputDTO";
import { PasseioDog } from "../model/PasseioDog";

export class PasseioDogBusiness {
  constructor(
    private passeioDogData: PasseioDogData
  ) { }

  criarPasseio = async (input: CriarPasseioDogInputDTO): Promise<void> => {
    const { status_passeio, data_agendamento, preco, duracao, latitude, longitude, nome_pet, quantidade_pet, hora_inicio, hora_fim } = input

    if (!status_passeio || !data_agendamento || !preco || !duracao || !latitude || !longitude || !nome_pet || !quantidade_pet || !hora_inicio || !hora_fim) {
      throw new Error("Todos os campos são de preenchimento obrigatório")
    }

    if (status_passeio !== "CONCLUIDO" && status_passeio !== "EM ANDAMENTO" && status_passeio !== "A REALIZAR") {
      throw new Error("Informe um status válido para o cadastro do passseio")
    }

    const dadosPasseio = new PasseioDog(
      status_passeio, data_agendamento, preco, duracao, latitude, longitude, nome_pet, quantidade_pet, hora_inicio, hora_fim)

    await this.passeioDogData.insertPasseio(dadosPasseio)
  }

  getTodosPasseios = async () => {
    const todosPasseios = await this.passeioDogData.getTodosPasseios()
    return todosPasseios
  }

  getPasseiosPorPeriodo = async () => {
    const passeioPorPeriodo = await this.passeioDogData.getPasseiosPorPeriodo()
    return passeioPorPeriodo
  }

  getDuracaoPasseio = async () => {
    const duracaoPasseio = await this.passeioDogData.getDuracaoPasseio()
    return duracaoPasseio
  }

}

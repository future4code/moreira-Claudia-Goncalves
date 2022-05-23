import { PasseioDogData } from "../data/PasseioDogData";
import { CriarPasseioDogInputDTO } from "../model/CriarPasseioDogInputDTO";
import { PasseioDog } from "../model/PasseioDog";

export class PasseioDogBusiness {
  constructor(
    private passeioDogData: PasseioDogData
  ) { }

  criarPasseio = async (input: CriarPasseioDogInputDTO): Promise<void> => {
    const { status_caminhada, data_agendamento, preco, duracao, latitude, longitude, nome_pet, quantidade_pet, hora_inicio, hora_fim } = input

    if (!data_agendamento || !preco || !duracao || !latitude || !longitude || !nome_pet || !quantidade_pet || !hora_inicio || !hora_fim) {
      throw new Error("Todos os campos são de preenchimento obrigatório")
    }

    const dadosPasseio = new PasseioDog(
      status_caminhada, data_agendamento, preco, duracao, latitude, longitude, nome_pet, quantidade_pet, hora_inicio, hora_fim)

    await this.passeioDogData.insertPasseio(dadosPasseio)
  }

}

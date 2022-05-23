import { PasseioDog } from "../model/PasseioDog";
import { BaseDatabase } from "./BaseDatabase";

export class PasseioDogData extends BaseDatabase {
  protected TABLE_NAME = "DogWalking";
  insertPasseio = async (dadosPasseio: PasseioDog): Promise<void> => {

    try {
      await this.connection(this.TABLE_NAME).insert({
        status_caminhada: dadosPasseio.getStatus_passeio(),
        data_agendamento: dadosPasseio.getData_agendamento(),
        preco: dadosPasseio.getPreco(),
        duracao: dadosPasseio.getDuracao(),
        latitude: dadosPasseio.getLatitude(),
        longitude: dadosPasseio.getLongitude(),
        nome_pet: dadosPasseio.getNome_pet(),
        quantidade_pet: dadosPasseio.getQuantidade_pet(),
        hora_inicio: dadosPasseio.getHora_inicio(),
        hora_fim: dadosPasseio.getHora_fim(),

      });

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro no banco de dados.");
      }
    }
  }

}
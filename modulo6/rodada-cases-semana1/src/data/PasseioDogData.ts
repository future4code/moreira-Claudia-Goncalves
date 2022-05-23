import { PasseioDog } from "../model/PasseioDog";
import { BaseDatabase } from "./BaseDatabase";

export class PasseioDogData extends BaseDatabase {
  protected TABLE_NAME = "DogWalking";
  insertPasseio = async (dadosPasseio: PasseioDog): Promise<void> => {

    try {
      await this.connection(this.TABLE_NAME).insert({
        status_passeio: dadosPasseio.getStatus_passeio(),
        data_agendamento: dadosPasseio.getData_agendamento(),
        preco: dadosPasseio.getPreco(),
        duracao: dadosPasseio.getDuracao(),
        latitude: dadosPasseio.getLatitude(),
        longitude: dadosPasseio.getLongitude(),
        nome_pet: dadosPasseio.getNome_pet(),
        quantidade_pet: dadosPasseio.getQuantidade_pet(),
        hora_inicio: dadosPasseio.getHora_inicio(),
        hora_fim: dadosPasseio.getHora_fim()

      });

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro no banco de dados.");
      }
    }
  }

  getTodosPasseios = async () => {
    try {
      const todosPasseios = await this.connection.raw(`
      SELECT * FROM DogWalking;
      `)
      return todosPasseios[0]

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro no banco de dados.");
      }
    }
  }

  getPasseiosPorPeriodo = async () => {
    try {
      const todosPasseios = await this.connection.raw(`
      SELECT MAX(data_agendamento) as 'Data dos próximos passeios'
      FROM DogWalking 
      WHERE data_agendamento < '2099-01-01' AND data_agendamento > NOW() 
      GROUP BY data_agendamento;
    `)
      return todosPasseios[0]

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro no banco de dados.");
      }
    }
  }

  getDuracaoPasseio = async () => {
    try {
      const duracaoPasseio = await this.connection.raw(`
      SELECT *, TIMEDIFF(hora_fim, hora_inicio) as "Duração Passeio"
      FROM DogWalking ;
    `)
      return duracaoPasseio[0]

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro no banco de dados.");
      }
    }
  }
}
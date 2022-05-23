import { DURACAO, STATUS } from "./PasseioDog";


export interface CriarPasseioDogInputDTO {
  status_caminhada: STATUS,
  data_agendamento: string,
  preco: number,
  duracao: DURACAO,
  latitude: number,
  longitude: number,
  nome_pet: string,
  quantidade_pet: number,
  hora_inicio: number,
  hora_fim: number
};
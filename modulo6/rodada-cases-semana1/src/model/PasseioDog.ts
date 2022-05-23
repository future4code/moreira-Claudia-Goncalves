export enum STATUS {
  CONCLUIDO = "CONCLUIDO",
  EM_ANDAMENTO = "EM ANDAMENTO",
  A_REALIZAR = "A REALIZAR"
}

export enum DURACAO {
  TRINTA = 30,
  SESSENTA = 60
}

export class PasseioDog {
  constructor(
    private status_passeio: STATUS,
    private data_agendamento: string,
    private preco: number,
    private duracao: DURACAO,
    private latitude: number,
    private longitude: number,
    private nome_pet: string,
    private quantidade_pet: number,
    private hora_inicio: number,
    private hora_fim: number

  ) { }

  public getStatus_passeio = (): STATUS => this.status_passeio;
  public getData_agendamento = (): string => this.data_agendamento;
  public getPreco = (): number => this.preco;
  public getDuracao = (): DURACAO => this.duracao;
  public getLatitude = (): number => this.latitude;
  public getLongitude = (): number => this.longitude;
  public getNome_pet = (): string => this.nome_pet;
  public getQuantidade_pet = (): number => this.quantidade_pet;
  public getHora_inicio = (): number => this.hora_inicio;
  public getHora_fim = (): number => this.hora_fim;

}
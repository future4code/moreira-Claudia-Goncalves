import { Request, Response } from "express";
import { PasseioDogBusiness } from "../business/PasseioDogBusiness";
import { CriarPasseioDogInputDTO } from "../model/CriarPasseioDogInputDTO";
import { PasseioDog } from "../model/PasseioDog";

export class PasseioDogController {
  constructor(
    private passeioDogBusiness: PasseioDogBusiness
  ) { }

  criarPasseio = async (req: Request, res: Response) => {
    const { status_passeio, data_agendamento, preco, duracao, latitude, longitude, nome_pet, quantidade_pet, hora_inicio, hora_fim } = req.body

    const input: CriarPasseioDogInputDTO = {
      status_passeio,
      data_agendamento,
      preco,
      duracao,
      latitude,
      longitude,
      nome_pet,
      quantidade_pet,
      hora_inicio,
      hora_fim
    }

    try {
      await this.passeioDogBusiness.criarPasseio(input)
      res.status(201).send({ message: "Caminhada cadastrada com sucesso!" })

    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message)
      }
      res.status(500).send("Erro no cadastro")
    }
  }

  getTodosPasseios = async (req: Request, res: Response) => {
    try {
      const todosPasseios = await this.passeioDogBusiness.getTodosPasseios()
      res.status(201).send(todosPasseios)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message)
      }
      res.status(500).send("Erro na consulta")
    }
  }

  getPasseiosPorPeriodo = async (req: Request, res: Response) => {
    try {
      const passeioPorPeriodo = await this.passeioDogBusiness.getPasseiosPorPeriodo()

      res.status(201).send(passeioPorPeriodo)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message)
      }
      res.status(500).send("Erro na consulta")
    }
  }

  getDuracaoPasseio = async (req: Request, res: Response) => {
    try {
      const duracaoPasseio = await this.passeioDogBusiness.getDuracaoPasseio()

      res.status(201).send(duracaoPasseio)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message)
      }
      res.status(500).send("Erro na consulta")
    }
  }
}

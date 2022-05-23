import { Request, Response } from "express";
import { PasseioDogBusiness } from "../business/PasseioDogBusiness";
import { CriarPasseioDogInputDTO } from "../model/CriarPasseioDogInputDTO";

export class PasseioDogController {
  constructor(
    private passeioDogBusiness: PasseioDogBusiness
  ) { }

  criarPasseio = async (req: Request, res: Response) => {
    const { status_caminhada, data_agendamento, preco, duracao, latitude, longitude, nome_pet, quantidade_pet, hora_inicio, hora_fim } = req.body

    const input: CriarPasseioDogInputDTO = {
      status_caminhada,
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
      res.status(500).send("Error in registration")
    }
  }

}

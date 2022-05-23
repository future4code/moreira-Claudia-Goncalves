import { PasseioDogBusiness } from "./business/PasseioDogBusiness";
import { app } from "./controller/app";
import { PasseioDogController } from "./controller/PasseioDogController";
import { PasseioDogData } from "./data/PasseioDogData";

const passeioDogController = new PasseioDogController(
  new PasseioDogBusiness(
    new PasseioDogData()
  )
)

app.post("/", passeioDogController.criarPasseio);
app.get("/passeios", passeioDogController.getTodosPasseios)
app.get("/passeios/data", passeioDogController.getPasseiosPorPeriodo)
app.get("/passeios/duracao", passeioDogController.getDuracaoPasseio)
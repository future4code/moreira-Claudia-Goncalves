import { BaseDatabase } from "./BaseDatabase";

export class Migrations extends BaseDatabase {
  public printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
  };

  public createTables = () =>
    this.connection
      .raw(`
        CREATE TABLE DogWalking (
          status_passeio enum ('CONCLUIDO', 'EM ANDAMENTO','A REALIZAR') default 'A REALIZAR', 
          data_agendamento DATE NOT NULL, 
          preco DECIMAL NOT NULL, 
          duracao ENUM ('30', '60') NOT NULL, 
          latitude DOUBLE NOT NULL, 
          longitude DOUBLE NOT NULL, 
          nome_pet VARCHAR(255) NOT NULL, 
          quantidade_pet INT NOT NULL, 
          hora_inicio TIME NOT NULL, 
          hora_fim TIME NOT NULL
      )
      `)
      .then(() => {
        console.log("Tabelas criadas");
      })
      .catch(this.printError);

  public closeConnection = () => {
    this.connection.destroy();
  };
}

const myMigrations = new Migrations();

myMigrations.createTables().finally(myMigrations.closeConnection);
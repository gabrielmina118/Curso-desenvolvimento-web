import { knex } from "knex";

export const connectionDb = knex({
    client:"mysql",
    connection:{
        host:"127.0.0.1",
        port:3306,
        user:"root",
        password:"password",
        database:"mercado"
    }
})
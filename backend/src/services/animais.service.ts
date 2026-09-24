import { pool } from "../database/connection.js";

export interface AnimalProps{
    nome:string;
    especie: string;
    raca: string;
    idade: number;
    cliente_id: number;

}

export class AnimalService{

    async criar(data: AnimalProps){
        const query = `
        INSERT INTO animais (nome,especie,raca,idade,cliente_id
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *;
        `;
        const values = [data.nome,data.especie,data.raca,data.idade,data.cliente_id];

        const result = await pool.query(query, values);
        return result.rows[0];
        
    }


    async listar(){
        const query = "SELECT * FROM animais WHERE deleted_at IS NULL";
        const result = await pool.query(query);
        return result.rows;
        
    }

    async inativar (id:number){
        const query = `
        UPDATE animais
        SET deleted_at = NOW()
        WHERE   id= $1
        RETURNING *;`

        const result = await pool.query(query,[id]);
        return result.rows[0];
    }

}
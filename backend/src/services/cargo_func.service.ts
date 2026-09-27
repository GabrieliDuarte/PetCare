import { pool } from '../database/connection.js';

export interface CargoFuncProps {
  nome: string;
  descricao: string;
}

export class CargoFuncService {
  
  async criar(data: CargoFuncProps) {
    const query = `
      INSERT INTO cargo_func (nome, descricao)
      VALUES ($1, $2) 
      RETURNING *;
    `;
    const values = [data.nome, data.descricao];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM cargo_func WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE cargo_func 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}
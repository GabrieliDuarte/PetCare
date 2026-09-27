import { pool } from '../database/connection.js';

export interface FrotaProps {
  veiculo: string;
  placa: string;
  capacidade: number;
}

export class FrotaService {
  
  async criar(data: FrotaProps) {
    const query = `
      INSERT INTO frotas (veiculo, placa, capacidade)
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;
    const values = [data.veiculo, data.placa, data.capacidade];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM frotas WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE frotas 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}
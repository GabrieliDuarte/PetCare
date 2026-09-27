import { pool } from '../database/connection.js';

export interface ColetaProps {
  animal_id: number;
  funcionario_id: number;
  material: string;
  data_coleta: string;
}

export class ColetaService {
  
  async criar(data: ColetaProps) {
    const query = `
      INSERT INTO coletas (animal_id, funcionario_id, material, data_coleta)
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;
    const values = [data.animal_id, data.funcionario_id, data.material, data.data_coleta];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM coletas WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE coletas 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}
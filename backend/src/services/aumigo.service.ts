import { pool } from '../database/connection.js';


export interface AumigoProps {
  cliente_id: number;
  animal_id: number;
  tipo_plano: string;
  valor_contribuicao: number;
}

export class AumigoService {
  
  async criar(data: AumigoProps) {
    const query = `
      INSERT INTO aumigo (cliente_id, animal_id, tipo_plano, valor_contribuicao)
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;
    const values = [data.cliente_id, data.animal_id, data.tipo_plano, data.valor_contribuicao];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM aumigo WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE aumigo 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}
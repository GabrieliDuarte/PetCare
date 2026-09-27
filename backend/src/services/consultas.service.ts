import { pool } from '../database/connection.js';

export interface ConsultaProps {
  animal_id: number;
  funcionario_id: number;
  data_consulta: string;
  motivo: string;
}

export class ConsultaService {
  
  async criar(data: ConsultaProps) {
    const query = `
      INSERT INTO consultas (animal_id, funcionario_id, data_consulta, motivo)
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;
    const values = [data.animal_id, data.funcionario_id, data.data_consulta, data.motivo];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM consultas WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE consultas 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}
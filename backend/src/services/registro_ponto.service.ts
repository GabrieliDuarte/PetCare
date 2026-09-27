import { pool } from '../database/connection.js';

export interface RegistroPontoProps {
  funcionario_id: number;
  data_registro: string;
  hora_entrada: string;
  hora_saida?: string;
}

export class RegistroPontoService {
  
  async criar(data: RegistroPontoProps) {
    const query = `
      INSERT INTO registro_ponto (funcionario_id, data_registro, hora_entrada, hora_saida)
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;
    const values = [data.funcionario_id, data.data_registro, data.hora_entrada, data.hora_saida || null];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM registro_ponto WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE registro_ponto 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}
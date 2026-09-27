import { pool } from '../database/connection.js';

export interface LogSistemaProps {
  funcionario_id: number;
  acao: string;
  descricao: string;
}

export class LogSistemaService {
  
  async criar(data: LogSistemaProps) {
    const query = `
      INSERT INTO logs_sistema (funcionario_id, acao, descricao)
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;
    const values = [data.funcionario_id, data.acao, data.descricao];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM logs_sistema WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE logs_sistema 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}
import { pool } from '../database/connection.js';

export interface VendaProps {
  cliente_id: number;
  funcionario_id: number;
  valor_total: number;
}

export class VendaService {
  
  async criar(data: VendaProps) {
    const query = `
      INSERT INTO vendas (cliente_id, funcionario_id, valor_total)
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;
    const values = [data.cliente_id, data.funcionario_id, data.valor_total];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM vendas WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE vendas 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}
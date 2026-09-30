import { pool } from '../database/connection.js';
import { FuncionarioProps } from '../types/funcionarios.js';
import bcrypt from 'bcrypt'
 

export class FuncionarioService {
  
  async criar(data: FuncionarioProps) {

    const senhaHash = await bcrypt.hash(data.senha,10);

    const query = `
      INSERT INTO funcionarios (nome, email, telefone, cargo_id,senha)
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *;
    `;
    const values = [data.nome, data.email, data.telefone, data.cargo_id,senhaHash];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM funcionarios WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE funcionarios 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}
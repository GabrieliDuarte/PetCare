import { pool } from '../database/connection.js';

export interface PetDonoProps {
  animal_id: number;
  cliente_id: number;
}

export class PetDonoService {
  
  async criar(data: PetDonoProps) {
    const query = `
      INSERT INTO pet_dono (animal_id, cliente_id)
      VALUES ($1, $2) 
      RETURNING *;
    `;
    const values = [data.animal_id, data.cliente_id];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async listar() {
    const query = "SELECT * FROM pet_dono WHERE deleted_at IS NULL";
    const result = await pool.query(query);
    return result.rows;
  }

  async inativar(id: number) {
    const query = `
      UPDATE pet_dono 
      SET deleted_at = NOW() 
      WHERE id = $1 
      RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}
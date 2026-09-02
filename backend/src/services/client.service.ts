 import { pool } from "../database/connection.js";

class ClienteService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM clientes");
            return res.rows; 
        } catch (error) {
            console.error("Erro ao buscar clientes:", error);
            throw new Error("Erro no banco de dados");
        }
    }
}


export const clienteService = new ClienteService();
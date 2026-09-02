import { Router, type Request, type Response } from "express";
import { clienteService } from "../services/client.service.js"; 

export const clienteRouter = Router();

clienteRouter.get("/", async (_request: Request, response: Response) => {
    try {
        const clientes = await clienteService.getAll();
        
        return response.json(clientes);
    } catch (error) {
        return response.status(500).json({ error: "Erro interno do servidor" });
    }
});
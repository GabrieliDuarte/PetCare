import { Router, Request, Response } from 'express';
import { LogSistemaService } from '../services/logs_sistema.service.js';

const logsSistemaRoutes = Router();
const logSistemaService = new LogSistemaService();

logsSistemaRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const log = await logSistemaService.criar(req.body);
    return res.status(201).json(log);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao registar o log." });
  }
});

logsSistemaRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const logs = await logSistemaService.listar();
    return res.status(200).json(logs);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar os logs." });
  }
});

logsSistemaRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await logSistemaService.inativar(id);
    return res.status(200).json({ message: "Log inativado com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao inativar o log." });
  }
});

export { logsSistemaRoutes };
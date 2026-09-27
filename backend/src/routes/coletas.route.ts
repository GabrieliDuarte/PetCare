import { Router, Request, Response } from 'express';
import { ColetaService } from '../services/coletas.service.js';

const coletasRoutes = Router();
const coletaService = new ColetaService();

coletasRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const coleta = await coletaService.criar(req.body);
    return res.status(201).json(coleta);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao registar a coleta." });
  }
});

coletasRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const coletas = await coletaService.listar();
    return res.status(200).json(coletas);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar as coletas." });
  }
});

coletasRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await coletaService.inativar(id);
    return res.status(200).json({ message: "Coleta inativada com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao inativar a coleta." });
  }
});

export { coletasRoutes };
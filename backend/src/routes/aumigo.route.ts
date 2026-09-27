import { Router, Request, Response } from 'express';
import { AumigoService } from '../services/aumigo.service.js';

const aumigoRoutes = Router();
const aumigoService = new AumigoService();

aumigoRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const plano = await aumigoService.criar(req.body);
    return res.status(201).json(plano);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao registar o plano Aumigo." });
  }
});

aumigoRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const planos = await aumigoService.listar();
    return res.status(200).json(planos);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar os planos Aumigo." });
  }
});

aumigoRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await aumigoService.inativar(id);
    return res.status(200).json({ message: "Plano Aumigo inativado com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao inativar o plano." });
  }
});

export { aumigoRoutes };
import { Router, Request, Response } from 'express';
import { PetDonoService } from '../services/pet_dono.service.js';

const petDonoRoutes = Router();
const petDonoService = new PetDonoService();

petDonoRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const vinculo = await petDonoService.criar(req.body);
    return res.status(201).json(vinculo);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao vincular o pet ao dono." });
  }
});

petDonoRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const vinculos = await petDonoService.listar();
    return res.status(200).json(vinculos);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar os vínculos." });
  }
});

petDonoRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await petDonoService.inativar(id);
    return res.status(200).json({ message: "Vínculo inativado com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao inativar o vínculo." });
  }
});

export { petDonoRoutes };
import { Router, Request, Response } from 'express';
import { AnimalService } from '../services/animais.service.js';

const animaisRoutes = Router();
const animaisService = new AnimalService();

animaisRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const animal = await animaisService.criar(req.body);
    return res.status(201).json(animal);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao cadastrar o animal." });
  }
});

animaisRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const animais = await animaisService.listar();
    return res.status(200).json(animais);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar animais." });
  }
});

animaisRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await animaisService.inativar(id);
    return res.status(200).json({ message: "Animal inativado com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao excluir o animal." });
  }
});

export { animaisRoutes };
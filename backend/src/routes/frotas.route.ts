import { Router, Request, Response } from 'express';
import { FrotaService } from '../services/frotas.service.js';

const frotasRoutes = Router();
const frotaService = new FrotaService();

frotasRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const veiculo = await frotaService.criar(req.body);
    return res.status(201).json(veiculo);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao cadastrar o veículo na frota." });
  }
});

frotasRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const veiculos = await frotaService.listar();
    return res.status(200).json(veiculos);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar a frota." });
  }
});

frotasRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await frotaService.inativar(id);
    return res.status(200).json({ message: "Veículo inativado com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao inativar o veículo." });
  }
});

export { frotasRoutes };
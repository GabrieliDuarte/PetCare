import { Router, Request, Response } from 'express';
import { ConsultaService } from '../services/consultas.service.js';

const consultasRoutes = Router();
const consultaService = new ConsultaService();

consultasRoutes.post('/', async (req: Request, res: Response) => {
  try {
    const consulta = await consultaService.criar(req.body);
    return res.status(201).json(consulta);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao agendar a consulta." });
  }
});

consultasRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const consultas = await consultaService.listar();
    return res.status(200).json(consultas);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar as consultas." });
  }
});

consultasRoutes.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await consultaService.inativar(id);
    return res.status(200).json({ message: "Consulta cancelada/inativada com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao cancelar a consulta." });
  }
});

export { consultasRoutes };
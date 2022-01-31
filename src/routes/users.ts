import express, {Request, Response} from 'express'

const router = express.Router()

router.get('/', (request: Request, response: Response) => {

  response.send('Rota de Usuários')

})

router.post('/', (req: Request, res: Response) => {
  
  res.send(req.body)

})

router.put('/:id',(req: Request, res: Response) => {
  
  res.send({
      params: req.params,
      body: req.body
  })

})

router.delete('/:id',(req: Request, res: Response) => {

  res.send({
      message: `Excluindo o usuário com o id ${req.params.id}`,
      method: req.method
  })
  //Lembrando que 'id' passado em '/:id' se torna um params da req

})

export default router
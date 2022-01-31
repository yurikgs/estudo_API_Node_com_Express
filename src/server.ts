import bodyParser from "body-parser"
import express, { Request, Response } from "express"
import routesUsers from "./routes/users"

const app = express() // express() --> é onde irá todo o código do servidor. Declaramos ele como uma variável para ficar mais fácil de editá-lo depois e reutilizado depois.

app.use('/users', routesUsers)

app.use(bodyParser.urlencoded({extended: false})) //Sempre que for preciso usar alguma biblioteca externa dentro do express, usaremos o método .use()

app.get('/', (request: Request, response: Response) => {

    response.send('API em Express com Typescript')

})

app.listen(3000, () => console.log('servidor rodando na porta 3000'))
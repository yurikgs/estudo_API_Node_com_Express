"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)(); // express() --> é onde irá todo o código do servidor. Declaramos ele como uma variável para ficar mais fácil de editá-lo depois e reutilizado depois.
app.get('/', (request, response) => {
    response.send('API');
});
app.get('/users', (request, response) => {
    response.send('Rota de usuários');
});
app.listen(3000, () => console.log('servidor rodando na porta 3000'));

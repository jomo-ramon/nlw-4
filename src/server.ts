import express from 'express';

const app = express();

/**
 * GET => busca
 * POST => salvar
 * PUT => alterar
 * DELETE => deletar
 * PACTH => alteração expecifica
 */

app.get("/", (request, response) => {
    return response.json({ message: 'Hellow Word' });
});

app.post('/', (request, response) => {
    return response.json({ message: "Os dados foram salvos com sucessos" });
});

app.listen(3333, () => console.log("Server is running"));

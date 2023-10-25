const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para processar corpo de requisição JSON
app.use(express.json());




app.get('/softruck/ativar', async (req, res) => {
    const result = await axios.post("https://jsonplaceholder.typicode.com/posts/20")
    res.json(result.data);
})





app.use((req, res, next) => {
  res.status(404).send('Página não encontrada');
});
app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});

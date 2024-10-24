import { json } from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connect } from 'mongoose';

import userRoutes from './routes/userRoutes.js'; // Note o '.js' no final

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

// Conectar ao MongoDB
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB conectado'))
  .catch((err) => console.log(err));

// Usando as rotas
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

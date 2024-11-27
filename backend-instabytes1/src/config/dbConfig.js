import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(stringConexao) {
  // Cria um cliente MongoDB para conectar ao banco de dados
  let mongoClient;

  try {
    mongoClient = new MongoClient(stringConexao);
    console.log('Conectando ao cluster do banco de dados...');

    // Tenta estabelecer a conexão com o banco de dados
    await mongoClient.connect();

    console.log('Conectado ao MongoDB Atlas com sucesso!');

    // Retorna o cliente MongoDB para realizar outras operações
    return mongoClient;
  } catch (erro) {
    // Captura qualquer erro durante a conexão
    console.error('Falha na conexão com o banco!', erro);

    // Encerra a aplicação em caso de falha na conexão
    process.exit();
  }
}
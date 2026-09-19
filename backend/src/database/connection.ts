//comunicação entre a aplicação (o backend) e o  banco de dados. 
//cria um gerenciador inteligente de conexões que os serviços vão usar para ler ou gravar informações.


import "dotenv/config"  //Lê automaticamente um arquivo chamado .env no projeto e joga todas as configurações de lá para dentro da memória do Node.js. O arquivo .env guarda essas senhas localmente e não vai para o GitHub, evitando vazamentos.
import pg from 'pg' //Traz a biblioteca pg (node-postgres), que é a ferramenta oficial para conectar o Node.js ao PostgreSQL. Em seguida, extrai a ferramenta Pool de dentro dela. Como se fosse um tradutor

const {Pool} = pg

export const pool = new Pool()

pool.on("error", (error: Error) => {    //É um vigilante (event listener)
    console.error(                      //Se alguma conexão que estava parada (idle) der um erro crítico (por exemplo, se o servidor do banco reiniciar do nada), essa função é disparada.
        "Conexão idle encontrada", error //Caso não tivess, iria ficar carregando infinitamente
    );
    process.exit(1);
});
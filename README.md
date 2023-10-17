Aluno: Pedro Henrique de Avila Tonin 
#### Para executar o programa execute os seguinte passos após clonar o repositório:
1. Primeiro é necessário criar um arquivo .env, na mesma pasta do "docker-compose.yaml" contendo os seguintes valores:
``` bash
MYSQL_ROOT_PASSWORD=senha
MYSQL_DATABASE=db_server
```
**Esses valores são os padrões do servidor e devem ser os mesmos das variáveis de ambiente**

2.  Depois, dentro da pasta que contém o aquivo "docker-compose.yaml", para subir o container do banco de dados use:
``` bash
docker compose --profile db up -d
```
3. Em seguida, para subir o container com o servidor backend:
``` bash
docker compose --profile server up -d
```
4. Por fim, o container do cliente:
``` bash
docker compose --profile client up -d
```
5. Agora é só acessar <http://localhost:3000> para acessar o programa :)

**É necessário aguardar um tempo até que todos os containers iniciem corretamente**


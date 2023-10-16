Aluno: Pedro Henrique de Avila Tonin 
#### Para executar o programa execute os seguinte passos após clonar o repositório:
1. Primeiro deve subir o container com o banco de dados
``` bash
docker compose --profile db up -d
```
2. Em seguida, subir o container com o servidor backend
``` bash
docker compose --profile server up -d
```
3. Por fim, o container do cliente
``` bash
docker compose --profile client up -d
```


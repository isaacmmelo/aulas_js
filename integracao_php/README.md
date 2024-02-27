# Uma introdução a JavaScript
Para as aulas de TADW do Instituto Federal Goiano

## Subindo o docker

`sudo docker-compose up -d` <br />
`sudo docker exec tadw_tarefas docker-php-ext-install mysqli`

## Acesso
Utilize a pasta de código para criar seu site <br />
Utilize o endereço http://127.0.0.1:812/ para administrar o banco de dados <br />
Utilize o endereço http://127.0.0.1:83/ para acessar o site

##SQL para Tarefas

Criar banco de dados: db_tarefas
```sql
CREATE TABLE tb_usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE tb_tarefa (
    id_tarefa INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    data_inicio DATE NOT NULL,
    data_conclusao DATE NOT NULL,
    prioridade INT,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario) ON DELETE CASCADE
);
```

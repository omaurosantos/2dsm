-- criar bd_aula04

--tabelas para o exercicios
create domain chk_categoria text check (value='DRAMA' or value='COMEDIA');
create domain chk_status text check (value='DISPONIVEL' or value='ALUGADO');
create table tbl_cliente (codigo_cliente integer PRIMARY KEY, nome text not null, cidade text, endereco text);
create table tbl_titulo (codigo_titulo integer primary key, titulo text not null, descricao text, categoria chk_categoria);
create table tbl_livros (cod_livro integer PRIMARY KEY, codigo_titulo integer REFERENCES tbl_titulo(codigo_titulo), status chk_status DEFAULT 'DISPONIVEL');
create table tbl_emprestimo (numero_emprestimo integer PRIMARY KEY, codigo_cliente integer REFERENCES tbl_cliente(codigo_cliente), codigo_livro integer REFERENCES tbl_livros(cod_livro));
-- Inserir dados na tabela tbl_cliente
insert into tbl_cliente (codigo_cliente,nome,cidade,endereco) VALUES (1,'João Silva','São Paulo','Rua A, 123'),(2,'Maria Santos','Rio de Janeiro','Av. B, 456'),
(3,'Pedro Almeida','Belo Horizonte','Rua C, 789'),(4,'Ana Oliveira','Salvador','Av. D, 1011'),(5,'Carlos Lima','Brasília','Rua E, 1213');

-- Inserir dados na tabela tbl_titulo
insert into tbl_titulo (codigo_titulo,titulo,descricao,categoria) VALUES (1,'Aventuras Urbanas','Uma história emocionante','DRAMA'),
(2,'Mistérios Antigos','Enigmas por resolver', 'COMEDIA'),(3,'Amor nas Estrelas','Um romance intergaláctico', 'DRAMA'),
(4,'Código Enigmático','Segredos Ocultos', 'COMEDIA'),(5,'Histórias Perdidas','Contos esquecidos', 'DRAMA');

-- Inserir dados na tabela tbl_livros
insert into tbl_livros (cod_livro,codigo_titulo,status) VALUES (1,1,'DISPONIVEL'),(2,1,'ALUGADO'),(3,2,'DISPONIVEL'),(4,3,'ALUGADO'),(5,4,'DISPONIVEL');

-- Inserir dados na tabela tbl_emprestimo
insert into tbl_emprestimo (numero_emprestimo,codigo_cliente,codigo_livro) VALUES (1,1,2),(2,2,4),(3,3,1),(4,4,5),(5,5,3);

--selecionar todos os clientes
SELECT codigo_cliente, nome FROM tbl_cliente;

--Selecionar os clientes que moram em São Paulo
SELECT codigo_cliente, nome, cidade, endereco FROM tbl_cliente WHERE cidade = 'São Paulo';

--Selecionar os clientes onde o código é maior que 3
SELECT codigo_cliente, nome, cidade, endereco FROM tbl_cliente WHERE codigo_cliente >3;

--Selecionar todos os títulos
SELECT codigo_titulo, titulo FROM tbl_titulo;

--crie uma tabela chamada tbl_cliente2 com uma coluna integer chamada código
CREATE TABLE tbl_cliente2 (codigo integer);

--Copie todos dos códigos da tbl_cliente para essa nova tabela usando o SQL Insert.
insert into tbl_cliente2 (codigo) SELECT codigo_cliente FROM tbl_cliente; 

--Atualize todos os livros alugados para disponivel
UPDATE tbl_livros SET status = 'DISPONIVEL' WHERE status = 'ALUGADO';

--Delete todos as linhas da tabela tbl_cliente2 onde o código for maior que 3
DELETE FROM tbl_cliente2 WHERE codigo >3;



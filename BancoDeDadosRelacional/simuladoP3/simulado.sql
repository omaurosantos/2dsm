-- Criar tabelas

CREATE TABLE tbl_funcionarios (
  id_funcionario SERIAL PRIMARY KEY,
  primeiro_nome TEXT,
  sobrenome TEXT,
  salario NUMERIC
);

CREATE TABLE tbl_departamentos (
  id_departamento SERIAL PRIMARY KEY,
  nome_departamento TEXT
);

CREATE TABLE tbl_funcionario_departamento (
  id_funcionario INTEGER,
  id_departamento INTEGER,
  PRIMARY KEY (id_funcionario, id_departamento),
  FOREIGN KEY (id_funcionario) REFERENCES tbl_funcionarios (id_funcionario) ON DELETE CASCADE,
  FOREIGN KEY (id_departamento) REFERENCES tbl_departamentos (id_departamento) ON DELETE CASCADE
);

CREATE TABLE tbl_tarefas (
  id_tarefa SERIAL PRIMARY KEY,
  nome_tarefa TEXT,
  prazo DATE,
  id_funcionario INTEGER REFERENCES tbl_funcionarios (id_funcionario) ON DELETE SET NULL
);


-- Inserir dados

INSERT INTO tbl_departamentos (id_departamento, nome_departamento) VALUES
(1, 'Ti'),
(2, 'RH'),
(3, 'Finanças'),
(4, 'Marketing'),
(5, 'Vendas');


INSERT INTO tbl_funcionarios (id_funcionario, primeiro_nome, sobrenome, salario) VALUES
(1, 'Clara', 'Ribeiro', 65000),
(2, 'Rodrigo', 'Costa', 80000),
(3, 'Juliana', 'Almeida', 90000),
(4, 'Marcio', 'Cunha', 72000),
(5, 'Helena', 'Lima', 68000);

INSERT INTO tbl_funcionario_departamento (id_funcionario, id_departamento) VALUES
(1,1),
(2,1),
(3,2),
(4,2),
(5,5);

INSERT INTO tbl_tarefas (id_tarefa, nome_tarefa, prazo, id_funcionario) VALUES
(1, 'Tarefa 1', '2023-12-01', 1),
(2, 'Tarefa 2', '2023-12-15', 2),
(3, 'Tarefa 3', '2023-12-10', 3),
(4, 'Tarefa 4', '2023-12-05', 4),
(5, 'Tarefa 5', '2023-11-30', 5);

-- 1 
SELECT * FROM tbl_funcionarios;
SELECT * FROM tbl_departamentos
SELECT * FROM tbl_funcionario_departamento
SELECT * FROM tbl_tarefas

-- 2) Crie uma view chamada v_funcionarios_salario_alto que mostre somente o primeiro nome, 
-- em maiusculo, dos funcionarios com salario maior que 70.000

CREATE VIEW v_funcionarios_salario_alto AS
SELECT UPPER(primeiro_nome) AS primeiro_nome
FROM tbl_funcionarios
WHERE salario > 70000;

SELECT * FROM v_funcionarios_salario_alto

-- 3) crie uma store procedure chamada sp_atribuir_tarefa_funcionario que recebe o id da tarefa 
-- e o id do funcionario e assinala aquela tarefa aquele funcionario

CREATE OR REPLACE PROCEDURE sp_atribuir_tarefa_funcionario(p_id_tarefa INTEGER, p_id_funcionario INTEGER)
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE tbl_tarefas
  SET id_funcionario = p_id_funcionario
  WHERE id_tarefa = p_id_tarefa;
END;
$$;

CALL sp_atribuir_tarefa_funcionario(2, 3);

SELECT * FROM tbl_tarefas order by 1;

-- 4) crie uma trigger chamada tr_log_mudancas_salario para auditoria da alteracao de salario dos funcionarios, 
-- que registrem todas as mudancas de salario dos funcionarios em uma tabela de log chamada tbl_log_salario. 
-- A função deve ser capaz de capturar o ID do funcionário, o salario anterior e o novo salario

CREATE TABLE tbl_log_salario (
  id_log SERIAL PRIMARY KEY,
  id_funcionario INTEGER NOT NULL,
  salario_anterior NUMERIC NOT NULL,
  novo_salario NUMERIC NOT NULL,
  data_mudanca TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION fn_log_mudancas_salario()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO tbl_log_salario(id_funcionario, salario_anterior, novo_salario)
  VALUES (OLD.id_funcionario, OLD.salario, NEW.salario);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_log_mudancas_salario
AFTER UPDATE OF salario ON tbl_funcionarios
FOR EACH ROW
WHEN (OLD.salario IS DISTINCT FROM NEW.salario)
EXECUTE FUNCTION fn_log_mudancas_salario();

UPDATE tbl_funcionarios set salario=10000 where id_funcionario=1;

SELECT * FROM tbl_funcionarios;

SELECT * FROM tbl_log_salario;





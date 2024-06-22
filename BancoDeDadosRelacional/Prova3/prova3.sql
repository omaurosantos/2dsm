-- Criar tabelas

CREATE TABLE tbl_alunos (
  id_aluno INTEGER PRIMARY KEY,
  primeiro_nome TEXT,
  sobrenome TEXT,
  idade INTEGER
);

CREATE TABLE tbl_cursos (
  id_curso INTEGER PRIMARY KEY,
  nome_curso TEXT,
  instrutor TEXT
);

CREATE TABLE tbl_alunos_cursos (
  id_aluno INTEGER,
  id_curso INTEGER,
  PRIMARY KEY (id_aluno, id_curso),
  FOREIGN KEY (id_aluno) REFERENCES tbl_alunos (id_aluno),
  FOREIGN KEY (id_curso) REFERENCES tbl_cursos (id_curso)
);

CREATE TABLE tbl_atividades (
  id_atividade INTEGER PRIMARY KEY,
  nome_atividade TEXT,
  data_entrega DATE,
  id_aluno INTEGER REFERENCES tbl_alunos (id_aluno)
);

-- Inserir dados

INSERT INTO tbl_alunos (id_aluno, primeiro_nome, sobrenome, idade) VALUES
(1, 'Alice', 'Silva', 20),
(2, 'Bob', 'Johnson', 22),
(3, 'Charlie', 'Brown', 21),
(4, 'David', 'Miller', 23),
(5, 'Eva', 'Davis', 22);

INSERT INTO tbl_cursos (id_curso, nome_curso, instrutor) VALUES
(1, 'Matematica', 'Dr. Johnson'),
(2, 'Ciencia da Computacao', 'Prof. Silva'),
(3, 'Historia', 'Dr. Davis'),
(4, 'Fisica', 'Prof. Miller'),
(5, 'Ingles', 'Dr. Wilson');

INSERT INTO tbl_alunos_cursos (id_aluno, id_curso) VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5);

INSERT INTO tbl_atividades (id_atividade, nome_atividade, data_entrega, id_aluno) VALUES
(1, 'Atividade 1', '2023-12-01', 1),
(2, 'Atividade 2', '2023-12-15', 2),
(3, 'Atividade 3', '2023-12-10', 3),
(4, 'Atividade 4', '2023-12-05', 4),
(5, 'Atividade 5', '2023-11-30', 5);

-- 1 SELECT * FROM tbl_alunos;
-- 2 SELECT * FROM tbl_cursos;
-- 3 SELECT * FROM tbl_alunos_cursos;
-- 4 SELECT * FROM tbl_atividades;

-- View

CREATE VIEW v_alunos_ciencia_computacao AS
SELECT a.primeiro_nome, a.sobrenome
FROM tbl_alunos a
JOIN tbl_alunos_cursos ac ON a.id_aluno = ac.id_aluno
JOIN tbl_cursos c ON ac.id_curso = c.id_curso
WHERE c.nome_curso = 'Ciencia da Computacao';

-- 1 SELECT * FROM v_alunos_ciencia_computacao;

-- Store Procedure

CREATE OR REPLACE PROCEDURE sp_atribuir_atividade_aluno(p_id_atividade INTEGER, p_id_aluno INTEGER)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE tbl_atividades
    SET id_aluno = p_id_aluno
    WHERE id_atividade = p_id_atividade;
END;
$$;

-- 1 CALL sp_atribuir_atividade_aluno(3,5);
-- 2 SELECT * FROM tbl_atividades;

-- Trigger

CREATE TABLE tbl_log_atividades (
  id_aluno INTEGER PRIMARY KEY,
  id_atividade INTEGER,
  nome_atividade TEXT
);

CREATE OR REPLACE FUNCTION fn_log_mudancas_atividades()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO tbl_log_atividades(id_aluno, id_atividade, nome_atividade)
  VALUES (NEW.id_aluno, NEW.id_atividade, NEW.nome_atividade);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_log_mudancas_atividades
AFTER INSERT OR UPDATE ON tbl_atividades
FOR EACH ROW
EXECUTE FUNCTION fn_log_mudancas_atividades();


-- 1 UPDATE tbl_atividades set nome_atividade='Nova' where id_atividade=3;
-- 2 SELECT * FROM tbl_log_atividades;
-- 3 SELECT * FROM tbl_atividades;
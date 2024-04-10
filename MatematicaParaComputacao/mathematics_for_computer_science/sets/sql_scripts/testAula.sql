-- create database bd_mat2;
-- \c bd_mat2;
create table usuario(nome varchar(100), cidade varchar(100));
create table cidade(nome varchar(100), estado varchar(100));

insert into usuario(nome,cidade) values('isaac','jac');
insert into usuario(nome,cidade) values('andré','pinda');
insert into usuario(nome,cidade) values('edlaine','jac');
insert into usuario(nome,cidade) values('gruilherme','sp');

insert into cidade(nome,estado) values ('jac','sp');
insert into cidade(nome,estado) values ('pinda','sp');
insert into cidade(nome,estado) values ('sp','sp');
insert into cidade(nome,estado) values ('brasilia','df');
insert into cidade(nome,estado) values ('palmas','to');

select * from usuario except select * from usuario where nome = 'isaac';

select * from usuario as u join cidade as c on u.cidade = c.nome;

select * from usuario where nome = 'andré' union select * from usuario where nome = 'edlaine';
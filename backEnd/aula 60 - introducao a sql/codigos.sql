use mercado;
-- criar uma tabela
create table produto(
	id varchar(100) primary key,
    nome varchar(100),
    preco float,
    descricao varchar(100),
    promocao boolean
);
-- Adicionar produto
insert into produto (id,nome,preco,descricao,promocao)
values ("4","Mousepad",50.6,"descrição de um mousepad", false);

insert into produto (id,nome,preco,descricao,promocao)
values ("2","PC gamer",5000.6,"descrição de pc gamer", false);

insert into produto (id,nome,preco,descricao,promocao)
values ("3","Alexa",250,"descrição de uma alexa", false);

select * from produto;

-- select * from produto where id = "2";

update produto
set nome = "Alexa , a inteligencia artificial"
where id = "3";

delete from produto where id = "1";  





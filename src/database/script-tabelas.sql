-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE SLD;

USE SLD;

CREATE TABLE Usuario (
	idUsuario INT AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(256),
	senha VARCHAR(50),
);

CREATE TABLE Quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    Pontuação INT,
    dtQuiz DATE,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);
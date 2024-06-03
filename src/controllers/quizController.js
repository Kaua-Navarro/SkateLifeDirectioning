var quizModel = require("../models/quizModel");

function cadastrarResultado(req, res) {
    // Crie uma variável que và recuperar os valores do arquivo cadastro.html
    var pontos = req.body.pontosServer;
    var idUser = req.body.idUserServer;

        // Passe os valores como parâmetro e và para o arquivo quizModel.js
        quizModel.cadastrar(pontos, idUser)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao armazenar os pontos! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
            }
        );
    }

module.exports = {
cadastrarResultado
}
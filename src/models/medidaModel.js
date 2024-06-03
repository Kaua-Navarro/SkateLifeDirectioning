var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT 
    SUM(CASE WHEN Pontuacao >= 50 THEN 1 ELSE 0 END) AS Acima,
    SUM(CASE WHEN Pontuacao < 50 THEN 1 ELSE 0 END) AS Abaixo
FROM 
    Quiz`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
}
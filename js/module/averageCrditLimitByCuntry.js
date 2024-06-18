import {connection} from "../../db/connection.js";

//22.Obtener el promedio del límite de crédito de los clientes por país:

export const getAllAverageCreditByCountry = async()=>{
    let [result] = await connection.query(`SELECT country, AVG(creditLimit) AS PorcentajelimiteCredito FROM customers GROUP BY country  `);
    return result;
}
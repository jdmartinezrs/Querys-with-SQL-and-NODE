import {connection} from "../../db/connection.js";

//11.Obtener el promedio del límite de crédito de todos los clientes:

export const getAllAveragesCreditLimitOfClients = async()=>{
    let [result] = await connection.query(`SELECT  AVG (creditLimit) AS promedio  FROM customers`);
    return result;
}
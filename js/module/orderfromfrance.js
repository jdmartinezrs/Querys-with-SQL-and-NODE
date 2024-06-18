import {connection} from "../../db/connection.js";
//8.Encontrar todas las órdenes realizadas por clientes de 'Francia'

export const getAllOrdersMadeFromFrance = async()=>{
    let [result] = await connection.query(`SELECT o.orderNumber, c.country FROM orders o INNER JOIN customers c ON o.customerNumber = c.customerNumber WHERE c.country ='france'and status='shipped'`);
    return result;
}

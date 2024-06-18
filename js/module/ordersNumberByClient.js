import {connection} from "../../db/connection.js";

//23.Calcular el total de órdenes realizadas por cada cliente

export const getAllOrdersMadeByEachClient = async()=>{
    let [result] = await connection.query(`SELECT CONCAT(c.customerName,' ',c.contactLastName) AS nombreDelCliente, COUNT(o.orderNumber) AS cantidadPedidos FROM customers c INNER JOIN orders o ON c.customerNumber=o.customerNumber GROUP BY nombreDelCliente`);
    return result;
}
import {connection} from "../../db/connection.js";

//24.Encontrar la cantidad total de productos pedidos por cada cliente

export const getAllProductsOrderedByEachClient = async()=>{
    let [result] = await connection.query(`SELECT  c.customerName AS nombreCliente,  COUNT(od.quantityOrdered) AS productosPedidos  FROM   orders o  INNER JOIN  orderdetails od   ON o.orderNumber = od.orderNumber  INNER JOIN  customers c  ON c.customerNumber = o.customerNumber  GROUP BY nombreCliente`);
    return result;
}


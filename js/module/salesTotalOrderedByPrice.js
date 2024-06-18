import {connection} from "../../db/connection.js";

//25. Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente

export const getAllSalesSortedByPrice = async()=>{
    let [result] = await connection.query(`SELECT o.customerNumber,SUM(ol.quantityOrdered * ol.priceEach) AS totalVentas  FROM orders o INNER JOIN orderdetails ol ON o.orderNumber = ol.orderNumber WHERE o.status= 'shipped' GROUP BY o.customerNumber  ORDER BY totalVentas `);
    return result;
}
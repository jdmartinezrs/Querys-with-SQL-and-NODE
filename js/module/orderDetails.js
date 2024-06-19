import {connection} from "../../db/connection.js";

//10.Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101:

export const getAllOrderDetailsProductNamesyClient101 = async()=>{
    let [result] = await connection.query(`SELECT orderdetails.*, products.productName FROM orderdetails INNER JOIN products ON orderdetails.productCode=orderdetails.productCode INNER JOIN orders ON orderdetails.orderNumber=orders.orderNumber WHERE customerNumber = 101 and status='shipped'`);
    return result;
}

//17.Calcular la cantidad media de productos pedidos en las órdenes

export const getAllOrdersAverage = async()=>{
    let [result] = await connection.query(`SELECT AVG(quantityOrdered) AS promedioProductosOrdenados FROM orderdetails`);
    return result;
}

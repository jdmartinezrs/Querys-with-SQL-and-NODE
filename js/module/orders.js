import {connection} from "../../db/connection.js";

//3.Listar todas las órdenes que tienen un estado de 'Enviado'

export const getAllOrdersShipped = async()=>{
    let [result] = await connection.query(`SELECT * FROM orders WHERE status = 'shipped'`);
    return result;
}

//8.Encontrar todas las órdenes realizadas por clientes de 'Francia'

export const getAllOrdersMadeFromFrance = async()=>{
    let [result] = await connection.query(`SELECT o.orderNumber, c.country FROM orders o INNER JOIN customers c ON o.customerNumber = c.customerNumber WHERE c.country ='france'and status='shipped'`);
    return result;
}

//23.Calcular el total de órdenes realizadas por cada cliente

export const getAllOrdersMadeByEachClient = async()=>{
    let [result] = await connection.query(`SELECT CONCAT(c.customerName,' ',c.contactLastName) AS nombreDelCliente, COUNT(o.orderNumber) AS cantidadPedidos FROM customers c INNER JOIN orders o ON c.customerNumber=o.customerNumber GROUP BY nombreDelCliente`);
    return result;
}

//32.Calcular el total de ventas realizadas en cada país

export const getAllSalesTotalForEachCountry = async()=>{
    let [result] = await connection.query(`SELECT cs.country, SUM(ls.quantityOrdered*ls.priceEach)AS totalDeVentas FROM customers cs INNER JOIN orders od ON cs.customerNumber=od.customerNumber INNER JOIN orderdetails ls ON od.orderNumber=ls.orderNumber WHERE od.status ='shipped' GROUP BY cs.country`);
    return result;
}
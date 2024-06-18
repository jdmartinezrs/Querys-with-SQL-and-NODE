import {connection} from "../../db/connection.js";

//32.Calcular el total de ventas realizadas en cada país

export const getAllSalesTotalForEachCountry = async()=>{
    let [result] = await connection.query(`SELECT cs.country, SUM(ls.quantityOrdered*ls.priceEach)AS totalDeVentas FROM customers cs INNER JOIN orders od ON cs.customerNumber=od.customerNumber INNER JOIN orderdetails ls ON od.orderNumber=ls.orderNumber WHERE od.status ='shipped' GROUP BY cs.country`);
    return result;
}
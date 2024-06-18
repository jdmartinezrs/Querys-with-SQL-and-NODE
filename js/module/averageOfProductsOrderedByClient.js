import {connection} from "../../db/connection.js";

//31.Encontrar el promedio de la cantidad de productos ordenados por cada cliente


export const getAllProductsAverageOrderedByClients = async()=>{
    let [result] = await connection.query(`SELECT ct.customerNumber, AVG(ts.quantityOrdered) AS promedioProductosOrdenados FROM customers ct INNER JOIN orders j ON ct.customerNumber=j.customerNumber INNER JOIN orderdetails ts ON ts.orderNumber=j.orderNumber GROUP BY ct.customerNumber`);
    return result;
}
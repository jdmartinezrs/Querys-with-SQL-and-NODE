import {connection} from "../../db/connection.js";

//4.Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:

export const getAllPaymentDetailsClient103 = async()=>{
    let [result] = await connection.query(`SELECT * FROM payments WHERE customerNumber = 103`);
    return result;
}

//5.Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:

export const getAllUsaClientsCreditLimitGreaterThan500 = async()=>{
    let [result] = await connection.query(`SELECT customerName, creditLimit, country FROM customers WHERE country = 'USA' AND creditLimit > 50000`);
    return result;
}

//11.Obtener el promedio del límite de crédito de todos los clientes:

export const getAllAveragesCreditLimitOfClients = async()=>{
    let [result] = await connection.query(`SELECT  AVG (creditLimit) AS promedio  FROM customers`);
    return result;
}

//22.Obtener el promedio del límite de crédito de los clientes por país:

export const getAllAverageCreditByCountry = async()=>{
    let [result] = await connection.query(`SELECT country, AVG(creditLimit) AS PorcentajelimiteCredito FROM customers GROUP BY country  `);
    return result;
}

//25. Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente

export const getAllSalesSortedByPrice = async()=>{
    let [result] = await connection.query(`SELECT o.customerNumber,SUM(ol.quantityOrdered * ol.priceEach) AS totalVentas  FROM orders o INNER JOIN orderdetails ol ON o.orderNumber = ol.orderNumber WHERE o.status= 'shipped' GROUP BY o.customerNumber  ORDER BY totalVentas `);
    return result;
}

//31.Encontrar el promedio de la cantidad de productos ordenados por cada cliente


export const getAllProductsAverageOrderedByClients = async()=>{
    let [result] = await connection.query(`SELECT ct.customerNumber,AVG(ts.quantityOrdered) AS promedioProductosOrdenados FROM customers ct INNER JOIN orders j ON ct.customerNumber = j.customerNumber INNER JOIN orderdetails ts ON ts.orderNumber = j.orderNumber GROUP BY ct.customerNumber;`);
    return result;
}

//36.Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor

export const getAllAverageCreditLimit = async()=>{
    let [result] = await connection.query(`SELECT e.employeeNumber,  e.firstName,  e.lastName,  AVG(c.creditLimit) AS promedioLimiteCredito FROM  customers c INNER JOIN  employees e ON c.salesRepEmployeeNumber = e.employeeNumber GROUP BY  e.employeeNumber, e.firstName, e.lastName`);
    return result;
}

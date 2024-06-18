import {connection} from "../../db/connection.js";

//28.Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado

export const getAllSalesAverageSortedByPriceForEachEmployee = async()=>{
    let [result] = await connection.query(`SELECT e.employeeNumber, e.firstName,  e.lastName,  AVG(od.quantityOrdered * od.priceEach) AS promedioVentas  FROM  employees e  INNER JOIN  customers c ON
   e.employeeNumber = c.salesRepEmployeeNumber  INNER JOIN  orders o ON c.customerNumber = o.customerNumber  INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber WHERE o.status = 'shipped' GROUP BY e.employeeNumber, e.firstName, e.lastName ORDER BY promedioVentas `);
    return result;
}
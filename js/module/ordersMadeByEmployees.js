import {connection} from "../../db/connection.js";

//29.Calcular el total de órdenes gestionadas por cada empleado

export const getAllOrdersMadeForEachEmployee = async()=>{
    let [result] = await connection.query(` SELECT  em.employeeNumber,     COUNT(ordl.quantityOrdered) AS cantidadOrdenes FROM      employees em INNER JOIN  customers cus ON em.employeeNumber = cus.salesRepEmployeeNumber INNER JOIN      orders ord ON cus.customerNumber = ord.customerNumber INNER JOIN  orderdetails ordl ON ord.orderNumber = ordl.orderNumber GROUP BY  em.employeeNumber `);
    return result;
}
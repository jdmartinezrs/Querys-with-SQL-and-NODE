import {connection} from "../../db/connection.js";

//34.Encontrar la cantidad total de productos vendidos por cada vendedor

export const getAllTotalProductsSoldByEachSeller= async()=>{
    let [result] = await connection.query(`SELECT cus.salesRepEmployeeNumber, COUNT(p.productCode) cantidadProductos From customers cus
    INNER JOIN orders s ON cus.customerNumber=s.customerNumber INNER JOIN orderdetails ils ON s.orderNumber=ils.orderNumber INNER JOIN products p ON p.productCode=ils.productCode 
    INNER JOIN employees em ON cus.salesRepEmployeeNumber=em.employeeNumber WHERE  em.jobTitle NOT IN ('President', 'VP Marketing') GROUP BY cus.salesRepEmployeeNumber`);
    return result;
}
import {connection} from "../../db/connection.js";

//35. Calcular el total de pagos recibidos por cada vendedor

export const getAllPaymentsRecievedByEachSeller = async()=>{
    let [result] = await connection.query(` SELECT cus.salesRepEmployeeNumber,SUM(ils.quantityOrdered*p.buyPrice) AS total   From customers cus INNER JOIN orders s ON cus.customerNumber=s.customerNumber INNER JOIN orderdetails ils ON s.orderNumber=ils.orderNumber INNER JOIN products p ON p.productCode=ils.productCode
    INNER JOIN employees em ON cus.salesRepEmployeeNumber=em.employeeNumber WHERE  em.jobTitle NOT IN ('President', 'VP Marketing') GROUP BY cus.salesRepEmployeeNumber;`);
    return result;
}



import {connection} from "../../db/connection.js";

//2.Encontrar todos los empleados que trabajan en la oficina de 'San Francisco'

export const getAllSanFranciscoEmployees = async()=>{
    let [result] = await connection.query(`SELECT * FROM employees WHERE officeCode = 1`);
    return result;
}

//7.Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143

export const getAllNamesAddresEmailsEmployees = async()=>{
    let [result] = await connection.query(`SELECT CONCAT ( e.firstName,' ',e.LastName) AS 'fullname',e.email,e.reportsTo AS employeesReport  FROM employees e  INNER JOIN offices o ON o.officeCode = e.officeCode WHERE e.reportsTO = 1143`);
    return result;
}

//16.Obtener la cantidad total de empleados

export const getAllEmployeeQuantity = async()=>{
    let [result] = await connection.query(` SELECT COUNT(employeeNumber) AS cantidadEmpleados FROM employees`);
    return result;
}

//20.Contar la cantidad de empleados por título de trabajo

export const getAllEmployeesTitleJob = async()=>{
    let [result] = await connection.query(`SELECT jobTitle, COUNT(employeeNumber) AS cantidadDeEmpleados FROM employees GROUP BY jobTitle`);
    return result;
}

//28.Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado

export const getAllSalesAverageSortedByPriceForEachEmployee = async()=>{
    let [result] = await connection.query(`SELECT e.employeeNumber, e.firstName,  e.lastName,  AVG(od.quantityOrdered * od.priceEach) AS promedioVentas  FROM  employees e  INNER JOIN  customers c ON
   e.employeeNumber = c.salesRepEmployeeNumber  INNER JOIN  orders o ON c.customerNumber = o.customerNumber  INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber WHERE o.status = 'shipped' GROUP BY e.employeeNumber, e.firstName, e.lastName ORDER BY promedioVentas `);
    return result;
}
//29.Calcular el total de órdenes gestionadas por cada empleado

export const getAllOrdersMadeForEachEmployee = async()=>{
    let [result] = await connection.query(` SELECT  em.employeeNumber,     COUNT(ordl.quantityOrdered) AS cantidadOrdenes FROM      employees em INNER JOIN  customers cus ON em.employeeNumber = cus.salesRepEmployeeNumber INNER JOIN      orders ord ON cus.customerNumber = ord.customerNumber INNER JOIN  orderdetails ordl ON ord.orderNumber = ordl.orderNumber GROUP BY  em.employeeNumber `);
    return result;
}

//30.Obtener la cantidad total de productos vendidos por cada línea de productos

export const getAllProductsSoldAndProductLine = async()=>{
    let [result] = await connection.query(` SELECT ps.productLine, SUM(dt.quantityOrdered) AS cantidadVendidos FROM  products ps INNER JOIN orderdetails dt ON ps.productCode=dt.productCode  GROUP BY ps.productLine`);
    return result;
}

//34.Encontrar la cantidad total de productos vendidos por cada vendedor

export const getAllTotalProductsSoldByEachSeller= async()=>{
    let [result] = await connection.query(`SELECT cus.salesRepEmployeeNumber, COUNT(p.productCode) cantidadProductos From customers cus
    INNER JOIN orders s ON cus.customerNumber=s.customerNumber INNER JOIN orderdetails ils ON s.orderNumber=ils.orderNumber INNER JOIN products p ON p.productCode=ils.productCode 
    INNER JOIN employees em ON cus.salesRepEmployeeNumber=em.employeeNumber WHERE  em.jobTitle NOT IN ('President', 'VP Marketing') GROUP BY cus.salesRepEmployeeNumber`);
    return result;
}

//35. Calcular el total de pagos recibidos por cada vendedor

export const getAllPaymentsRecievedByEachSeller = async()=>{
    let [result] = await connection.query(` SELECT cus.salesRepEmployeeNumber,SUM(ils.quantityOrdered*p.buyPrice) AS total   From customers cus INNER JOIN orders s ON cus.customerNumber=s.customerNumber INNER JOIN orderdetails ils ON s.orderNumber=ils.orderNumber INNER JOIN products p ON p.productCode=ils.productCode
    INNER JOIN employees em ON cus.salesRepEmployeeNumber=em.employeeNumber WHERE  em.jobTitle NOT IN ('President', 'VP Marketing') GROUP BY cus.salesRepEmployeeNumber;`);
    return result;
}

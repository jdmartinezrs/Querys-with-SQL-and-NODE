import {connection} from "../../db/connection.js";

//14.Contar la cantidad de oficinas en cada país

export const getAllOfficesQuantityByCountry = async()=>{
    let [result] = await connection.query(`SELECT country, COUNT(officeCode) AS cantidadOficinas FROM offices GROUP BY country`);
    return result;
}

//37.Encontrar el total de ventas realizadas por cada oficina

export const getAllSoldsByOfficine = async()=>{
    let [result] = await connection.query(`SELECT o.officeCode, SUM(od.quantityOrdered * od.priceEach) AS totalVentas FROM  offices o INNER JOIN  employees e ON o.officeCode = e.officeCode INNER JOIN  customers c ON e.employeeNumber = c.salesRepEmployeeNumber INNER JOIN  orders ord ON c.customerNumber = ord.customerNumber INNER JOIN orderdetails od ON ord.orderNumber = od.orderNumber GROUP BY o.officeCode`);
    return result;
}


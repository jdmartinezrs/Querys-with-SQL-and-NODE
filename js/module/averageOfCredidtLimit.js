import {connection} from "../../db/connection.js";
//36.Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor

export const getAllAverageCreditLimit = async()=>{
    let [result] = await connection.query(`SELECT e.employeeNumber,  e.firstName,  e.lastName,  AVG(c.creditLimit) AS promedioLimiteCredito FROM  customers c INNER JOIN  employees e ON c.salesRepEmployeeNumber = e.employeeNumber GROUP BY  e.employeeNumber, e.firstName, e.lastName`);
    return result;
}
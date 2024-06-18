import {connection} from "../../db/connection.js";
//20.Contar la cantidad de empleados por título de trabajo
export const getAllEmployeesTitleJob = async()=>{
    let [result] = await connection.query(`SELECT jobTitle, COUNT(employeeNumber) AS cantidadDeEmpleados FROM employees GROUP BY jobTitle`);
    return result;
}
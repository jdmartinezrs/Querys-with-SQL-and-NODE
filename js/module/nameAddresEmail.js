import {connection} from "../../db/connection.js";
//7.Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143

export const getAllNamesAddresEmailsEmployees = async()=>{
    let [result] = await connection.query(`SELECT CONCAT ( e.firstName,' ',e.LastName) AS 'fullname',e.email,e.reportsTo AS employeesReport  FROM employees e  INNER JOIN offices o ON o.officeCode = e.officeCode WHERE e.reportsTO = 1143`);
    return result;
}
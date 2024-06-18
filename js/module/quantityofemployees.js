import {connection} from "../../db/connection.js";
//16.Obtener la cantidad total de empleados
export const getAllEmployeeQuantity = async()=>{
    let [result] = await connection.query(` SELECT COUNT(employeeNumber) AS cantidadEmpleados FROM employees`);
    return result;
}

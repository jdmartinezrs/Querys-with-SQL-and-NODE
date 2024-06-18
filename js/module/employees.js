import {connection} from "../../db/connection.js";

//2.Encontrar todos los empleados que trabajan en la oficina de 'San Francisco'

export const getAllSanFranciscoEmployees = async()=>{
    let [result] = await connection.query(`SELECT * FROM employees WHERE officeCode = 1`);
    return result;
}


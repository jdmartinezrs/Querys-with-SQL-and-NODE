import {connection} from "../../db/connection.js";


export const getAllSanFranciscoEmployees = async()=>{
    let [result] = await connection.query(`SELECT * FROM employees WHERE officeCode = 1`);
    return result;
}



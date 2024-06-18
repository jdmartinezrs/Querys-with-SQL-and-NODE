import {connection} from "../../db/connection.js";

//5.Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:

export const getAllUsaClientsCreditLimitGreaterThan500 = async()=>{
    let [result] = await connection.query(`SELECT customerName, creditLimit, country FROM customers WHERE country = 'USA' AND creditLimit > 50000`);
    return result;
}

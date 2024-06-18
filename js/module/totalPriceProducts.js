import {connection} from "../../db/connection.js";
//18.Encontrar el precio total de todos los productos

export const getAllProductsPriece = async()=>{
    let [result] = await connection.query(`SELECT SUM(buyPrice) AS precioTotal FROM products`);
    return result;
}
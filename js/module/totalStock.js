import {connection} from "../../db/connection.js";
//12.Calcular el total de productos en stock

export const getAllQuantityInStock = async()=>{
    let [result] = await connection.query(`SELECT SUM(quantityInStock) AS cantidadEnStock FROM products;`);
    return result;
}

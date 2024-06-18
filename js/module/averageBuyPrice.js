import {connection} from "../../db/connection.js";

//13.Encontrar el precio medio de compra de todos los productos:

export const getAllProductsAverage = async()=>{
    let [result] = await connection.query(`SELECT AVG (buyPrice) AS promedioPreciodeCompra FROM products`);
    return result;
}


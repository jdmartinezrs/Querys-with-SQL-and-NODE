import {connection} from "../../db/connection.js";

//6.Listar todos los productos junto con las descripciones de sus líneas de productos

export const getAllProductsNextToDescriptions = async()=>{
    let [result] = await connection.query(`SELECT p.productName, pl.productLine AS productLineDescription FROM products p INNER JOIN productlines pl ON p.productLine = pl.productLine LIMIT 10`);
    return result;
}
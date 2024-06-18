//Products

import {connection} from "../../db/connection.js";

//1.Recuperar todas las líneas de productos con sus descripciones:

export const getAllProductsDescriptions = async()=>{
    let [result] = await connection.query(` SELECT productLine, productDescription FROM products`);
    return result;
}


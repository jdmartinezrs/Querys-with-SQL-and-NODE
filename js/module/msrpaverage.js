import {connection} from "../../db/connection.js";
//19.Calcular el promedio del precio sugerido (MSRP) de los productos
export const getAllMSRPAverage = async()=>{
    let [result] = await connection.query(`SELECT AVG(MSRP) AS promedioPrecioSugerido FROM products`);
    return result;
}
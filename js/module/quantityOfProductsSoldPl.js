import {connection} from "../../db/connection.js";

//30.Obtener la cantidad total de productos vendidos por cada línea de productos

export const getAllProductsSoldAndProductLine = async()=>{
    let [result] = await connection.query(` SELECT ps.productLine, SUM(dt.quantityOrdered) AS cantidadVendidos FROM  products ps INNER JOIN orderdetails dt ON ps.productCode=dt.productCode  GROUP BY ps.productLine`);
    return result;
}
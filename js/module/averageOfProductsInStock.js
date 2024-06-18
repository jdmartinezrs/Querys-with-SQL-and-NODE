import {connection} from "../../db/connection.js";

//26.Obtener el promedio de la cantidad de productos en stock por línea de productos

export const getAllProductInStockAverage = async()=>{
    let [result] = await connection.query(` SELECT pd.productLine , AVG(p.quantityInStock)AS porcentajeStock FROM products p INNER JOIN productlines pd ON pd.productLine=p.productLine GROUP BY pd.productLine `);
    return result;
}
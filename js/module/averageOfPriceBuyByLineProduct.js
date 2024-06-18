import {connection} from "../../db/connection.js";

//33.Obtener el promedio del precio de compra de los productos por línea de productos:

export const getAllLineProductsAverageByBuyPrice = async()=>{
    let [result] = await connection.query(`SELECT pl.productLine, AVG(pr.buyPrice) AS
    porcentaPrecioProducto FROM productlines pl INNER JOIN products pr ON pl.productLine=pr.productLine GROUP BY pl.productLine`);
    return result;
}
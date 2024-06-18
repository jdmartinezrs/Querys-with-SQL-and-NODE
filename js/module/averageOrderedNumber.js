import {connection} from "../../db/connection.js";

//17.Calcular la cantidad media de productos pedidos en las órdenes

export const getAllOrdersAverage = async()=>{
    let [result] = await connection.query(`SELECT AVG(quantityOrdered) AS promedioProductosOrdenados FROM orderdetails`);
    return result;
}
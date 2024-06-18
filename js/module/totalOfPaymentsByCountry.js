import {connection} from "../../db/connection.js";

//27.Calcular el total de pagos recibidos por cada país

export const getAllPaymentsMadeByCountry = async()=>{
    let [result] = await connection.query(`SELECT cu.country, SUM(pa.amount) AS totalPagos FROM customers cu INNER JOIN payments pa ON cu.customerNumber=pa.customerNumber GROUP BY cu.country `);
    return result;
}
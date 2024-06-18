import {connection} from "../../db/connection.js";
//21.Calcular el total de pagos recibidos por cada cliente

export const getAllPaymentsRecievedByEachClient = async()=>{
    let [result] = await connection.query(` SELECT CONCAT (c.customerName,' ',c.contactLastName)AS nombre ,SUM( p.amount) AS pagosRecibidos FROM customers c INNER JOIN payments p
   ON c.customerNumber=p.customerNumber GROUP BY nombre`);
    return result;
}


import {connection} from "../../db/connection.js";
//9.Listar el monto total de los pagos recibidos de cada cliente:

export const getAllPaymentsReceivedOfEachClient = async()=>{
    let [result] = await connection.query(`SELECT c.customerNumber,SUM(p.amount) AS total_amount_received FROM     customers c INNER JOIN payments p ON c.customerNumber = p.customerNumber GROUP BY c.customerNumber, p.amount`);
    return result;
}
import {connection} from "../../db/connection.js";
//15.Calcular el total de pagos recibidos

export const getAllPaymentsRecieved = async()=>{
    let [result] = await connection.query(`SELECT SUM(amount) AS totalPagosRecibidos FROM payments`);
    return result;
}


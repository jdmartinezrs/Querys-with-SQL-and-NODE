import {connection} from "../../db/connection.js";

//4.Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:

export const getAllPaymentDetailsClient103 = async()=>{
    let [result] = await connection.query(`SELECT * FROM payments WHERE customerNumber = 103`);
    return result;
}


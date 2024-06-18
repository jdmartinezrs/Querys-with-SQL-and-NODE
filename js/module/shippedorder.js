import {connection} from "../../db/connection.js";

//3.Listar todas las órdenes que tienen un estado de 'Enviado'

export const getAllOrdersShipped = async()=>{
    let [result] = await connection.query(`SELECT * FROM orders WHERE status = 'shipped'`);
    return result;
}

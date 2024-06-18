import {connection} from "../../db/connection.js";

export const getAllmultitabliña = async()=>{
    let [result] = await connection.query(`  SELECT c.customerNumber,SUM(p.amount) AS total_amount_received FROM     customers c INNER JOIN payments p ON c.customerNumber = p.customerNumber GROUP BY c.customerNumber, p.amount`);
    return result;
}

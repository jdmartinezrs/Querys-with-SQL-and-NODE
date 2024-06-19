import {connection} from "../../db/connection.js";

//9.Listar el monto total de los pagos recibidos de cada cliente:

export const getAllPaymentsReceivedOfEachClient = async()=>{
    let [result] = await connection.query(`SELECT c.customerNumber,SUM(p.amount) AS total_amount_received FROM     customers c INNER JOIN payments p ON c.customerNumber = p.customerNumber GROUP BY c.customerNumber, p.amount`);
    return result;
}

//15.Calcular el total de pagos recibidos

export const getAllPaymentsRecieved = async()=>{
    let [result] = await connection.query(`SELECT SUM(amount) AS totalPagosRecibidos FROM payments`);
    return result;
}

//21.Calcular el total de pagos recibidos por cada cliente

export const getAllPaymentsRecievedByEachClient = async()=>{
    let [result] = await connection.query(` SELECT CONCAT (c.customerName,' ',c.contactLastName)AS nombre ,SUM( p.amount) AS pagosRecibidos FROM customers c INNER JOIN payments p
   ON c.customerNumber=p.customerNumber GROUP BY nombre`);
    return result;
}

//27.Calcular el total de pagos recibidos por cada país

export const getAllPaymentsMadeByCountry = async()=>{
    let [result] = await connection.query(`SELECT cu.country, SUM(pa.amount) AS totalPagos FROM customers cu INNER JOIN payments pa ON cu.customerNumber=pa.customerNumber GROUP BY cu.country `);
    return result;
}


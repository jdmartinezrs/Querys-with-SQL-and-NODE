import {connection} from "../../db/connection.js";

//14.Contar la cantidad de oficinas en cada país

export const getAllOfficesQuantityByCountry = async()=>{
    let [result] = await connection.query(`SELECT country, COUNT(officeCode) AS cantidadOficinas FROM offices GROUP BY country;`);
    return result;
}


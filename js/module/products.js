//Products

import {connection} from "../../db/connection.js";

//1.Recuperar todas las líneas de productos con sus descripciones:

export const getAllProductsDescriptions = async()=>{
    let [result] = await connection.query(` SELECT productLine, productDescription FROM products`);
    return result;
}

//6.Listar todos los productos junto con las descripciones de sus líneas de productos

export const getAllProductsNextToDescriptions = async()=>{
    let [result] = await connection.query(`SELECT p.productName, pl.productLine AS productLineDescription FROM products p INNER JOIN productlines pl ON p.productLine = pl.productLine LIMIT 10`);
    return result;
}

//12.Calcular el total de productos en stock

export const getAllQuantityInStock = async()=>{
    let [result] = await connection.query(`SELECT SUM(quantityInStock) AS cantidadEnStock FROM products;`);
    return result;
}

//13.Encontrar el precio medio de compra de todos los productos:

export const getAllProductsAverage = async()=>{
    let [result] = await connection.query(`SELECT AVG (buyPrice) AS promedioPreciodeCompra FROM products`);
    return result;
}

//18.Encontrar el precio total de todos los productos

export const getAllProductsPriece = async()=>{
    let [result] = await connection.query(`SELECT SUM(buyPrice) AS precioTotal FROM products`);
    return result;
}

//19.Calcular el promedio del precio sugerido (MSRP) de los productos

export const getAllMSRPAverage = async()=>{
    let [result] = await connection.query(`SELECT AVG(MSRP) AS promedioPrecioSugerido FROM products`);
    return result;
}

//24.Encontrar la cantidad total de productos pedidos por cada cliente

export const getAllProductsOrderedByEachClient = async()=>{
    let [result] = await connection.query(`SELECT  c.customerName AS nombreCliente,  COUNT(od.quantityOrdered) AS productosPedidos  FROM   orders o  INNER JOIN  orderdetails od   ON o.orderNumber = od.orderNumber  INNER JOIN  customers c  ON c.customerNumber = o.customerNumber  GROUP BY nombreCliente`);
    return result;
}
//30.Obtener la cantidad total de productos vendidos por cada línea de productos

export const getAllProductsSoldAndProductLine = async()=>{
    let [result] = await connection.query(` SELECT ps.productLine, SUM(dt.quantityOrdered) AS cantidadVendidos FROM  products ps INNER JOIN orderdetails dt ON ps.productCode=dt.productCode  GROUP BY ps.productLine`);
    return result;
}
//26.Obtener el promedio de la cantidad de productos en stock por línea de productos

export const getAllProductInStockAverage = async()=>{
    let [result] = await connection.query(` SELECT pd.productLine , AVG(p.quantityInStock)AS porcentajeStock FROM products p INNER JOIN productlines pd ON pd.productLine=p.productLine GROUP BY pd.productLine `);
    return result;
}

//33.Obtener el promedio del precio de compra de los productos por línea de productos:

export const getAllLineProductsAverageByBuyPrice = async()=>{
    let [result] = await connection.query(`SELECT pl.productLine, AVG(pr.buyPrice) AS
    porcentaPrecioProducto FROM productlines pl INNER JOIN products pr ON pl.productLine=pr.productLine GROUP BY pl.productLine`);
    return result;
}

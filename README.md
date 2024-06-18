1. **Recuperar todas las líneas de productos con sus descripciones:**

   ```sql
   SELECT productLine, productDescription FROM products;
   ```

2. **Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':**

   ```sql
   SELECT * FROM employees WHERE officeCode = 1;
   ```

3. **Listar todas las órdenes que tienen un estado de 'Enviado':**

   ```sql
   SELECT * FROM orders WHERE status = 'shipped';
   ```

4. **Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:**

   ```sql
   SELECT *  FROM payments WHERE customerNumber = 103;
   ```

5. **Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:**

   ```sql
   SELECT * FROM customer WHERE country = 'USA' AND creditLimit > 50000;
   ```

### Consultas de múltiples tablas

1. **Listar todos los productos junto con las descripciones de sus líneas de productos:**

   ```sql
   SELECT p.productName, pl.textDescription AS productDescription FROM products p INNER JOIN productlines pl ON p.productLine = pl.productLine;
   ```

2. **Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:**

   ```sql
   SELECT CONCAT ( e.firstName,' ',e.LastName) AS 'fullname',e.email,e.reportsTo AS employeesReport  FROM employees e  INNER JOIN offices o ON o.officeCode = e.officeCode WHERE e.reportsTO = 1143;
   ```

3. **Encontrar todas las órdenes realizadas por clientes de 'Francia':**

   ```sql
   SELECT o.orderNumber, c.country FROM orders o INNER JOIN customers c ON o.customerNumber = c.customerNumber WHERE c.country ='france';
   ```

4. **Listar el monto total de los pagos recibidos de cada cliente:**

   ```sql
   SELECT c.customerNumber,SUM(p.amount) AS total_amount_received FROM     customers c INNER JOIN payments p ON c.customerNumber = p.customerNumber GROUP BY c.customerNumber, p.amount;
   ```

5. **Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101:**

   ```sql
   SELECT * FROM orderdetails INNER JOIN products ON orderdetails.productCode=orderdetails.productCode INNER JOIN orders ON orderdetails.orderNumber=orders.orderNumber WHERE customerNumber = 101 ;
   ```



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



## Parte 2/2

### Consultas de una sola tabla

1. **Obtener el promedio del límite de crédito de todos los clientes:**

   ```
   SELECT  AVG (creditLimit) AS promedio  FROM customers;
   ```

2. **Calcular el total de productos en stock:**

   ```
   SELECT SUM(quantityInStock) AS  cantidadEnStock FROM products;
   ```

3. **Encontrar el precio medio de compra de todos los productos:**

   ```
   SELECT AVG (buyPrice) AS promedioPrecios FROM products;
   ```

4. **Contar la cantidad de oficinas en cada país:**

   ```
   SELECT country, COUNT(officeCode) AS cantidadOficinas FROM offices GROUP BY country;
   ```

5. **Calcular el total de pagos recibidos:**

   ```
   SELECT SUM(amount) AS totalPagosRecibidos FROM payments;
   ```

6. **Obtener la cantidad total de empleados:**

   ```
   SELECT COUNT(employeeNumber) AS cantidadEmpleados FROM employees;
   ```

7. **Calcular la cantidad media de productos pedidos en las órdenes:**

   ```
   SELECT AVG(quantityOrdered) AS promedioProductosOrdenados  FROM orderdetails;
   ```

8. **Encontrar el precio total de todos los productos:**

   ```
   SELECT SUM(buyPrice) AS precioTotal FROM products;
   ```

9. **Calcular el promedio del precio sugerido (MSRP) de los productos:**

   ```
   SELECT AVG(MSRP) AS promedioPrecioSugerido FROM products;
   ```

10. **Contar la cantidad de empleados por título de trabajo:**

```
SELECT jobTitle, COUNT(employeeNumber) AS cantidadDeEmpleados FROM employees GROUP BY jobTitle;
```

### Consultas de múltiples tablas

1. **Calcular el total de pagos recibidos por cada cliente:**

   ```
   SELECT CONCAT (c.customerName,' ',c.contactLastName)AS nombre ,SUM( p.amount) AS pagosRecibidos FROM customers c INNER JOIN payments p
   ON c.customerNumber = p.customerNumber GROUP BY nombre;
   ```

2. **Obtener el promedio del límite de crédito de los clientes por país:**

   ```
   SELECT country, AVG(creditLimit) AS PorcentajelimiteCredito FROM customers GROUP BY country;
   ```

3. **Calcular el total de órdenes realizadas por cada cliente:**

   ```
   SELECT CONCAT(c.customerName,' ',c.contactLastName) AS nombreDelCliente, COUNT(o.orderNumber) AS cantidadPedidos FROM customers c INNER JOIN orders o ON c.customerNumber=o.customerNumber GROUP BY nombreDelCliente;
   ```

4. **Encontrar la cantidad total de productos pedidos por cada cliente:**

   ```
   SELECT  c.customerName AS nombreCliente,  COUNT(od.quantityOrdered) AS productosPedidos  FROM   orders o  INNER JOIN  orderdetails od   ON o.orderNumber = od.orderNumber  INNER JOIN  customers c  ON c.customerNumber = o.customerNumber  GROUP BY nombreCliente;
   ```

5. **Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente:**

   ```
   SELECT o.customerNumber,SUM(ol.quantityOrdered * ol.priceEach) AS totalVentas  FROM orders o INNER JOIN orderdetails ol ON o.orderNumber = ol.orderNumber  GROUP BY o.customerNumber;
   ```

6. **Obtener el promedio de la cantidad de productos en stock por línea de productos:**

   ```
   SELECT pd.productLine , AVG(p.quantityInStock)AS porcentajeStock FROM products p INNER JOIN productlines pd ON pd.productLine=p.productLine GROUP BY pd.productLine;
   ```

7. **Calcular el total de pagos recibidos por cada país:**

   ```
   SELECT cu.country, SUM(pa.amount) AS totalPagos FROM customers cu INNER JOIN payments pa ON cu.customerNumber=pa.customerNumber GROUP BY cu.country;
   ```

8. **Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado:**

   ```
   e.employeeNumber, e.firstName,  e.lastName,  AVG(od.quantityOrdered * od.priceEach) AS promedioVentas  FROM  employees e  INNER JOIN  customers c ON
   e.employeeNumber = c.salesRepEmployeeNumber  INNER JOIN  orders o ON c.customerNumber = o.customerNumber  INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber GROUP BY e.employeeNumber, e.firstName, e.lastName;
   ```

9. **Calcular el total de órdenes gestionadas por cada empleado:**

   ```
   SELECT  em.employeeNumber,     COUNT(ordl.quantityOrdered) AS cantidadOrdenes FROM      employees em INNER JOIN  customers cus ON em.employeeNumber = cus.salesRepEmployeeNumber INNER JOIN      orders ord ON cus.customerNumber = ord.customerNumber INNER JOIN      orderdetails ordl ON ord.orderNumber = ordl.orderNumber GROUP BY      em.employeeNumber;
   ```

10. **Obtener la cantidad total de productos vendidos por cada línea de productos:**

    ```
    SELECT ps.productLine, SUM(dt.quantityOrdered) AS cantidadVendidos FROM  products ps INNER JOIN orderdetails dt ON ps.productCode=dt.productCode  GROUP BY ps.productLine;
    ```

11. **Encontrar el promedio de la cantidad de productos ordenados por cada cliente:**

    ```
    SELECT ct.customerNumber, AVG(ts.quantityOrdered) AS promedioProductos FROM customers ct INNER JOIN orders j ON ct.customerNumber=j.customerNumber INNER JOIN orderdetails ts ON ts.orderNumber=j.orderNumber GROUP BY ct.customerNumber;
    ```

12. **Calcular el total de ventas realizadas en cada país:**

    ```
    SELECT cs.country, SUM(ls.quantityOrdered*ls.priceEach)AS cantidadVentas FROM customers cs INNER JOIN orders od ON cs.customerNumber=od.customerNumber INNER JOIN orderdetails ls ON od.orderNumber=ls.orderNumber WHERE od.status ='shipped' GROUP BY cs.country;
    ```

13. **Obtener el promedio del precio de compra de los productos por línea de productos:**

    ```
    SELECT pl.productLine, AVG(pr.buyPrice) AS
    porcentajeLineProduct FROM productlines pl INNER JOIN products pr ON pl.productLine=pr.productLine GROUP BY pl.productLine;
    ```

14. **Encontrar la cantidad total de productos vendidos por cada vendedor:**

    ```
    SELECT cus.salesRepEmployeeNumber, COUNT(p.productCode) cantidadProductos From customers cus
    INNER JOIN orders s ON cus.customerNumber=s.customerNumber INNER JOIN orderdetails ils ON s.orderNumber=ils.orderNumber INNER JOIN products p ON p.productCode=ils.productCode GROUP BY cus.salesRepEmployeeNumber;
    ```

15. **Calcular el total de pagos recibidos por cada vendedor:**

    ```
    SELECT cus.salesRepEmployeeNumber,SUM(ils.quantityOrdered*p.buyPrice) AS total   From customers cus INNER JOIN orders s ON cus.customerNumber=s.customerNumber INNER JOIN orderdetails ils ON s.orderNumber=ils.orderNumber INNER JOIN products p ON p.productCode=ils.productCode
    GROUP BY cus.salesRepEmployeeNumber;
    ```

16. **Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor:**

    ```
    SELECT e.employeeNumber,  e.firstName,  e.lastName,  AVG(c.creditLimit) AS promedioLimiteCredito FROM  customers c INNER JOIN  employees e ON c.salesRepEmployeeNumber = e.employeeNumber GROUP BY   e.employeeNumber, e.firstName, e.lastName;
    ```

17. **Encontrar el total de ventas realizadas por cada oficina:**

    ```
    
    ```

18. **Calcular la cantidad media de productos pedidos por cada cliente:**

    ```
    
    ```

19. **Obtener el total de pagos realizados en cada año:**

    ```
    
    ```

20. 
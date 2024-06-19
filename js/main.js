//Products
import{getAllProductsDescriptions}from"./module/products.js";
import{getAllProductsNextToDescriptions}from"./module/products.js";
import{getAllQuantityInStock}from"./module/products.js";
import{getAllProductsAverage}from"./module/products.js";
import{getAllProductsPriece}from"./module/products.js";
import{getAllMSRPAverage}from"./module/products.js";
import{getAllProductsOrderedByEachClient}from"./module/products.js";
import{getAllProductInStockAverage}from"./module/products.js";
import{getAllProductsSoldAndProductLine}from"./module/products.js";
import{getAllLineProductsAverageByBuyPrice}from"./module/products.js";
import{getAllAverageProductLine}from"./module/products.js";


//Employees
import {getAllSanFranciscoEmployees}from"./module/employees.js";
import{getAllNamesAddresEmailsEmployees}from"./module/employees.js";
import{getAllEmployeeQuantity}from"./module/employees.js";
import{getAllEmployeesTitleJob}from"./module/employees.js";
import{getAllSalesAverageSortedByPriceForEachEmployee}from"./module/employees.js";
import{getAllOrdersMadeForEachEmployee}from"./module/employees.js";
import{getAllTotalProductsSoldByEachSeller}from"./module/employees.js";
import{getAllPaymentsRecievedByEachSeller}from"./module/employees.js";


//Orders
import {getAllOrdersShipped}from"./module/orders.js";
import{getAllOrdersMadeFromFrance}from"./module/orders.js";
import{getAllOrdersMadeByEachClient}from"./module/orders.js";
import{getAllSalesTotalForEachCountry}from"./module/orders.js";


//customers
import {getAllPaymentDetailsClient103}from"./module/customers.js";
import {getAllUsaClientsCreditLimitGreaterThan500}from"./module/customers.js";
import{getAllAveragesCreditLimitOfClients}from"./module/customers.js";
import{getAllAverageCreditByCountry}from"./module/customers.js";
import{getAllSalesSortedByPrice}from"./module/customers.js";
import{getAllProductsAverageOrderedByClients}from"./module/customers.js";
import{getAllAverageCreditLimit}from"./module/customers.js";
import{getAllAverageProductsOrderedByclient}from"./module/customers.js";



//payments
import{getAllPaymentsReceivedOfEachClient}from"./module/payments.js";
import{getAllPaymentsRecieved}from"./module/payments.js";
import{getAllPaymentsRecievedByEachClient}from"./module/payments.js";
import{getAllPaymentsMadeByCountry}from"./module/payments.js";
import{getAllpaymentsForYears}from"./module/payments.js";


//orderDetails
import{getAllOrderDetailsProductNamesyClient101}from"./module/orderDetails.js";
import{getAllOrdersAverage}from"./module/orderDetails.js";


//offices 
import{getAllOfficesQuantityByCountry}from"./module/offices.js";
import{getAllSoldsByOfficine }from"./module/offices.js";

console.log(await getAllAverageProductLine());













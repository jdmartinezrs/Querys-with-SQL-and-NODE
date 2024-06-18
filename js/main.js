import {getAllProductsDescriptions}from"./module/descriptionProduct.js";
import {getAllSanFranciscoEmployees}from"./module/employeessanfrancisco.js";
import {getAllOrdersShipped}from"./module/shippedorder.js";
import {getAllPaymentDetailsClient103}from"./module/paymentdetails.js";
import {getAllUsaClientsCreditLimitGreaterThan500}from"./module/clientsusa.js";
import{getAllProductsNextToDescriptions}from"./module/productslinedesc.js"

console.log(await getAllProductsNextToDescriptions());
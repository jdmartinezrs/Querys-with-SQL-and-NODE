import {getAllProductsDescriptions}from"./module/descriptionProduct.js";
import {getAllSanFranciscoEmployees}from"./module/employeessanfrancisco.js";
import {getAllOrdersShipped}from"./module/shippedorder.js";
import {getAllPaymentDetailsClient103}from"./module/paymentdetails.js";
import {getAllUsaClientsCreditLimitGreaterThan500}from"./module/clientsusa.js";
import{getAllProductsNextToDescriptions}from"./module/productslinedesc.js";
import{getAllNamesAddresEmailsEmployees}from"./module/nameaddresemail.js";
import{getAllOrdersMadeFromFrance}from"./module/orderfromfrance.js";
import{getAllPaymentsReceivedOfEachClient}from"./module/paymentsreceived.js";
import{getAllOrderDetailsProductNamesyClient101}from"./module/ordersproductnameclient.js";
import{getAllAveragesCreditLimitOfClients}from"./module/averagecreditlimit.js";
import{getAllQuantityInStock}from"./module/totalstock.js";
import{getAllProductsAverage}from"./module/averagebuypriece.js";
import{getAllOfficesQuantityByCountry}from"./module/officesquantitybycountry.js";
import{getAllPaymentsRecieved}from"./module/paymentstotal.js";
import{getAllEmployeeQuantity}from"./module/quantityofemployees.js";
import{getAllOrdersAverage}from"./module/avgorderednumber.js";
import{getAllProductsPriece}from"./module/totalprieceproducts.js";
import{getAllMSRPAverage}from"./module/msrpaverage.js";
import{getAllEmployeesTitleJob}from"./module/quantityemployeestitle.js";


console.log(await getAllEmployeesTitleJob());
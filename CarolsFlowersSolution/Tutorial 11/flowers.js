"use strict"
/*
Author: Richard Randell

   Function List:
   displayBanner(currentDate)
      Using the date, sets the banner image source
   calcDaysToSale(currentDate)
      Returns the days to sale message
*/


var currentDate = new Date();

function displayBanner(currentDate) {
  var getMon = currentDate.getMonth();
  var imageSrc = document.getElementById("myBanner").src = 'defaultLogo.gif';

   switch (getMon) {
      case 0:
      case 1:
      case 11:
         imageSrc = 'winterLogo.gif';
         break;
      case 2:
      case 3:
      case 4:
         imageSrc = 'springLogo.gif';
         break;
      case 5:
      case 6:
      case 7:
         imageSrc = 'summerLogo.gif';
         break;
      case 8:
      case 9:
      case 10:
         imageSrc = 'fallLogo.gif';
         break;
      default:
         imageSrc = 'defaultLogo.gif';
      }
  
      return imageSrc;

}

function calcDaysToSale(currentDate) {

   var saleMessage;
   var midMon = currentDate.getDate();

   if (midMon < 15) {
       var difference = (15 - midMon);
       saleMessage = difference;
   } else if (midMon == 15) {
       saleMessage = "Zero, it's Today!";
   } else {
       saleMessage = "The Sale for this month has ended.";
   }
   return saleMessage;

}



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

 paymentRequest : google.payments.api.PaymentDataRequest = {
   apiVersion: 2,
   apiVersionMinor: 0,
   allowedPaymentMethods: [
     {
       type: "CARD",
       parameters: {
         allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
         allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
       },
       tokenizationSpecification: {
         type: "PAYMENT_GATEWAY",
         parameters: {
           gateway: "example",
           gatewayMerchantId: "exampleGatewayMerchantId"
         }
       }
     }
   ],
   merchantInfo: {
     merchantId: "12345678901234567890",
     merchantName: "Demo Merchant"
   },
   transactionInfo: {
     totalPriceStatus: "FINAL",
     totalPriceLabel: "Total",
     totalPrice: "100.00",
     currencyCode: "USD",
     countryCode: "US"
   }
 };

  onLoadPaymentData(event:any) : void {
    console.log('load payment data', event.detail);
  }
}

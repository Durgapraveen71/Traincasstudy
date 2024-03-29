import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

//import { AuthService } from './_service/auth.service';
 

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {}   

   options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "70000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Railway Ticket  Booking",
    "description": " Transaction",
    //"image": "https://example.com/your_logo",
    "order_id": "",
    //"order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "Praveen",
        "email": "praveen@gmail.com",
        "contact": "7901259946"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};



rzp1:any;
pay(){

  this.options.amount="70000";

  this.rzp1 = new this.auth.nativeWindow.Razorpay(this.options);

  this.rzp1.open();

}




}

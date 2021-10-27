import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'google-pay-demo';
  
  onLoadPaymentData(event:any) {
    console.log("load payment data", event.detail);
  }
}

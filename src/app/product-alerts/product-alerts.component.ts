import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

//In the component class, define a property named notify with an @Output()
// decorator and an instance of EventEmitter(). Configuring ProductAlertsComponent
// with an @Output() allows the ProductAlertsComponent to emit an event when the
// value of the notify property changes.

//The @Input() decorator indicates that the property value passes in from the component's
//parent, ProductListComponent.

export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
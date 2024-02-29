import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent  implements OnInit {
  @Input() pedido: any;
  constructor() { }

  ngOnInit() {}

  getCuisine(cuisine){
    return cuisine.map(item => item.name);
  }
}
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-pedidos',
  templateUrl: './empty-pedidos.component.html',
  styleUrls: ['./empty-pedidos.component.scss'],
})
export class EmptyPedidosComponent  implements OnInit {

  @Input() model: any;
  constructor() { }

  ngOnInit() {}

}

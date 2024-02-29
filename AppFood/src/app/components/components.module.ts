import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { LoadingRetaurantComponent } from './loading-retaurant/loading-retaurant.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { EmptyPedidosComponent } from './empty-pedidos/empty-pedidos.component';
import { LoadingPedidosComponent } from './loading-pedidos/loading-pedidos.component';
import { PedidosComponent } from './pedidos/pedidos.component';



@NgModule({
  declarations: [RestaurantComponent, LoadingRetaurantComponent, EmptyScreenComponent, EmptyPedidosComponent, LoadingPedidosComponent, PedidosComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RestaurantComponent, LoadingRetaurantComponent, EmptyScreenComponent, LoadingPedidosComponent, EmptyPedidosComponent, PedidosComponent]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { LoadingRetaurantComponent } from './loading-retaurant/loading-retaurant.component';



@NgModule({
  declarations: [RestaurantComponent, LoadingRetaurantComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RestaurantComponent, LoadingRetaurantComponent]
})
export class ComponentsModule { }

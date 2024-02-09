import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-retaurant',
  templateUrl: './loading-retaurant.component.html',
  styleUrls: ['./loading-retaurant.component.scss'],
})
export class LoadingRetaurantComponent  implements OnInit {
  dummmy = Array(10);

  constructor() { }

  ngOnInit() {}

}

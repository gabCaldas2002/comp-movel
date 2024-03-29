import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  model: any = {};
  deliveryCharge = 20;

  constructor() { }

  ngOnInit() {
    this.getCartData();
  }

  getCart(){
    return Preferences.get({key: 'cart'});
  }

  async getCartData(){
    let data: any = await this.getCart();
    if(data?.value){
      this.model = await JSON.parse(data.value);
      console.log(this.model)
    }
    this.calculate();
  }

  async calculate(){
    let item = this.model.itens.filter(x => x.quantity > 0);
    this.model.itens = item;
    console.log(this.model.itens);
    this.model.totalPrice = 0;
    this.model.totalItem = 0;
    this.model.deliveryCharge = 0;
    this.model.grandTotal = 0;
    item.forEach(element => {
      this.model.totalItem += element.quantity;
      this.model.totalPrice += (parseFloat(element.price)) * (parseFloat(element.quantity));
    });
    this.model.deliveryCharge = this.deliveryCharge;
    this.model.totalPrice = parseFloat(this.model.totalPrice).toFixed(2);
    this.model.grandTotal = (parseFloat(this.model.totalPrice) + parseFloat(this.model.deliveryCharge)).toFixed(2);
    if(this.model.totalItem == 0){
      this.model.totalPrice = 0;
      this.model.totalItem = 0;
      this.model.grandTotal = 0;
      await this.clearCart();
      this.model = 0;
    }
  }

  clearCart(){
    return Preferences.remove({key: 'cart'})
  }

  quantityMinus(index){}
  quantityPlus(index){}
  addAdress(){}
  changeAdress(){}

}

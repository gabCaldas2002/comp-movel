import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  pedidos: any[] = [];
  isLoading: boolean = true;
  model: any = {
    title: 'Nenhum pedido realizado',
    icon: 'basket',
  }
  constructor() { }

  ngOnInit() {
    console.log(this.model)
    setTimeout(() => {
      this.pedidos = [
        {
          "restaurant": "Dom Henrique",
          "items": [
            {
              "name": "Bezerra da Silva",
              "price": 22.00
            },
            {
              "name": "Batata Frita",
              "price": 15.00
            },
            {
              "name": "Refrigerante",
              "price": 6.00
            }
          ],
          "total_price": 43.00,
          "delivery_address": "Rua Dr. Laranjeiras, 1732",
          "delivery_date": "2024-02-28T20:00:00"
        },
        {
          "restaurant": "Brooklyn",
          "items": [
            {
              "name": "Edy Rock",
              "price": 30
            },
            {
              "name": "Limonada suiça",
              "price": 10
            }
          ],
          "total_price": 40,
          "delivery_address": "Capitão Rocha, 2379",
          "delivery_date": "2024-02-29T20:30:00"
        }
      ];
    this.isLoading = false;
    }
    , 2000);
    console.log(this.pedidos)
  }

}
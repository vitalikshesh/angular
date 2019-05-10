import { Component} from '@angular/core';

class Item{
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {

        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
    selector: 'about-app',
    template: `<div class="page-header">
        <h1> Список покупок </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Назва" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Ціна" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, price)">Добавити</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Предмет</th>
                <th>Ціна</th>
                <th>Куплено</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let item of items">
                <td>{{item.purchase}}</td>
                <td>{{item.price}}</td>
                <td><input type="checkbox" [(ngModel)]="item.done" /></td>
            </tr>
            </tbody>
        </table>
    </div>`
})
export class AboutComponent {
    items: Item[] =
        [
            { purchase: "Хліб", done: false, price: 15.9 },
            { purchase: "Масло", done: false, price: 60 },
            { purchase: "Картопля", done: true, price: 22.6 },
            { purchase: "Сир", done: false, price:310 }
        ];
    addItem(text: string, price: number): void {

        if(text==null || text.trim()=="" || price==null)
            return;
        this.items.push(new Item(text, price));
    }
}
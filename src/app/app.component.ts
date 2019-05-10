import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
    styles:[` 
        .active {color:red;}
    `],
    templateUrl: './app.component.html'
})
export class AppComponent  {
    name= 'Віктор';
    count: number=0;
    increase() : void {
        this.count++;
    }
}
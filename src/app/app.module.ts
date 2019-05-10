import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { AppComponent }   from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent }   from './about.component';
import { HomeComponent }   from './home.component';
import { NotFoundComponent }   from './not-found.component';
import { FirstComponent }   from './first.component';

const appRoutes: Routes =[
    { path: '', component: FirstComponent},
    { path: 'users', component: HomeComponent},
    { path: 'shop', component: AboutComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, FirstComponent, HomeComponent, AboutComponent, NotFoundComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
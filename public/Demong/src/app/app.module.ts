import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { AppRoutingModule } from './/app-routing.module';
import {ApiclientService} from './services/apiclient.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    UsersComponent,
    ProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ApiclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

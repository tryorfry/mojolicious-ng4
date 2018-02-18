import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// routes imports
import {LoginComponent} from './components/login/login.component';
import {UsersComponent} from './components/users/users.component';
import {ProductsComponent} from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '',
   component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {path: 'products',
   component: ProductsComponent
  }

];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

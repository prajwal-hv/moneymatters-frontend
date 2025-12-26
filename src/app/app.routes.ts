import { Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ExpenseListComponent} from './expenses/expense-list/expense-list.component';
import {authGuard} from './core/guards/auth.guard';

export const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"expenses", component:ExpenseListComponent, canActivate: [authGuard]},
  {path:"", redirectTo:"login", pathMatch:"full"},
];

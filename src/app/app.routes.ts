import { Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ExpenseListComponent} from './expenses/expense-list/expense-list.component';
import {authGuard} from './core/guards/auth.guard';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {ExpenseFormComponent} from './expenses/expense-form/expense-form.component';

export const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"",
    component:MainLayoutComponent,
    canActivate: [authGuard],
    children:[
      {path:"expenses", component: ExpenseListComponent},
      {path:"expenses/new", component: ExpenseFormComponent},
      {path:"", redirectTo:"expenses" ,pathMatch:"full"}
    ]},
  {path:"**", redirectTo:"login", pathMatch:"full"},
];

import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {EXPENSE_CATEGORIES} from '../expense-category';
import {ExpenseService} from '../../core/services/expense.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})
export class ExpenseFormComponent {

  categories = EXPENSE_CATEGORIES;
  loading=false;

  expenseForm!: ReturnType<FormBuilder['group']>;



  constructor(private formBuilder: FormBuilder, private expenseService: ExpenseService, private router:Router) {
    this.expenseForm = this.formBuilder.group({
      title: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      date: ['', Validators.required],
    });
  }


  submit() {
    if(this.expenseForm.invalid || this.loading)return;

    this.loading=true;
    this.expenseService.createExpense(this.expenseForm.value).subscribe({
      next: () => this.router.navigate(['/expenses']),
      error:()  => this.loading=false,
    })
  }

  formatCategory(c:string):string{
    return c.toLowerCase().replace("_", ' ').replace(/\b\w/g, char=>char.toUpperCase());
  }
}

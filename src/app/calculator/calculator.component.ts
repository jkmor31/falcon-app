import { Component, OnInit } from '@angular/core';
import { Ira } from '../create-ira/create-ira.model';
import { IraService } from '../ira.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  iras: Ira[] | any = [];
  calcForm!: FormGroup;
  years: number = 0;
  total: number = 0;

  constructor(
    private iraService: IraService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.iraService.getIras().subscribe(payload =>{
      this.iras = payload.find((acc: { id: number; }) => acc.id == payload.length);
    })
    this.calcForm = this.formBuilder.group({
      balance: [null],
      annualContribution: [null],
      age: [null, Validators.required],
      returnRate: [null, Validators.required],
      taxRate: [null, Validators.required],
    });
  }

onSubmit() {
  const principal = this.calcForm.value.balance ? this.calcForm.value.balance : this.iras.balance;
  const rate = this.calcForm.value.returnRate;
  this.years = 65 - this.calcForm.value.age;
  const annual = this.calcForm.value.annualContribution ? this.calcForm.value.annualContribution : this.iras.annualContribution;
  const tax = this.calcForm.value.taxRate;
  this.total = (principal*(1+rate)**(this.years))+(annual*((1+rate)**(this.years)-1)*(1+rate))/rate
  this.total = this.total - (this.total * tax);
  console.log(principal, rate, this.years, annual)
  console.log(this.total)
}

}

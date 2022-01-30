import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from '../investments.service';
import { Investment } from './investment.model';
import { IraService } from '../ira.service';



@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent implements OnInit {
  funds: any[] = [];
  investments:Investment[] = [];
  sortedInvestments: any[] = [];
  newInvestment: Investment = {};
  newArr: any[] = [];
  key:any;
  

  constructor(
    private investmentsService: InvestmentsService,
    private iraService: IraService,
    ) { }
  
  ngOnInit(): void {
    this.getInvestments();
    this.getFunds();
  }

  getFunds(): void {
    this.investmentsService.getInvestments().subscribe(payload =>{
      this.funds = payload;
      for (let i = 0; i < this.investments.length; i++){
        for (let j = 0; j < this.funds.length; j++){
          if(this.funds[j].fundName == this.investments[i].name) {
            this.newArr[j] = true;
          }
        }
      }
    });
  }

  getInvestments(): void {
    this.iraService.getInvestments().subscribe(payload =>{
      this.investments = payload;
    });
  }

  addInvestment(index: number): void {
    this.reconstituteFund(index);
    console.log(this.newInvestment);
    this.iraService.createInvestment(this.newInvestment).subscribe(data => {
      if(data) {
        console.log(data);
      }
    })
  }
  
  
  reconstituteFund(index:number):void {
    const reconstitutedFund: Investment = {
      name: '', type: 'Mutual Fund', symbol: '', expenseRatio: 0, nAV: 0, inceptionDate: '', accountId: 1};

    for (let [key, value] of Object.entries(this.funds[index])) {
      switch (key){
        case 'fundName':
          reconstitutedFund.name = String(value);
          break;
        case 'symbol':
          reconstitutedFund.symbol = String(value);
          break;
        case 'expenseRatio':
          reconstitutedFund.expenseRatio = Number(value);
          break;
        case 'nAV':
          reconstitutedFund.nAV = Number(value);
          break;
        case 'inceptionDate':
          reconstitutedFund.inceptionDate = String(value);
          break;
      }
    }

    this.newInvestment = reconstitutedFund;
    this.makeUsed(index);
  }

  makeUsed(index:number): void {
    this.newArr[index] = true; 
  }

}



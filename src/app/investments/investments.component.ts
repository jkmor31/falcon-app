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
  investments:Investment[] = [];
  newInvestment: Investment = {};
  tempFundList: any[] = [];
  key:any;
  localArray: any[] = [false, false, false, false, false, false, false, false, false, false, false, false, false];
  used:boolean = false;

  constructor(
    private investmentsService: InvestmentsService,
    private iraService: IraService,

    ) { }
  


  ngOnInit(): void {
    this.investmentsService.getInvestments().subscribe(payload =>{
      this.investments = payload;
      this.tempFundList = this.investments
      console.log(this.localArray);
    })
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

    for (let [key, value] of Object.entries(this.tempFundList[index])) {
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
    this.localArray[index] = true;
    console.log(this.localArray);
  }

}



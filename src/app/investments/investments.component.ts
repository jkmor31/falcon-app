import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from '../investments.service';
import { Investment } from './investment.model';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent implements OnInit {

  constructor(private investmentsService: InvestmentsService) { }
  
  investments:Investment[] = [];

  ngOnInit(): void {
    this.investmentsService.getInvestments().subscribe(payload =>{
      this.investments = payload;
    })
  }

}

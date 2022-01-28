import { Component, OnInit } from '@angular/core';
import { IraService } from '../ira.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ira } from '../create-ira/create-ira.model';
import { Investment } from '../investments/investment.model';
import { User } from '../user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ira: Ira = {};
  iraArr: any[][] = [];
  investments: Investment[] = [];
  user: User[] = [];
  userArr: any[][] = [];

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private iraService: IraService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.iraService.getUser(myid).subscribe(payload => {
        this.user = payload;
        this.userArr = Object.entries(this.user);
        this.iraArr.pop();
        this.iraArr.pop();
        this.iraArr.pop();
        this.iraArr.pop();
      })
      this.iraService.getIra(myid).subscribe(payload =>{
        this.ira = payload;
        this.iraArr = Object.entries(this.ira);
        this.iraArr.pop();
        this.iraArr.pop();
        this.iraArr.splice(4,1);
        for (let i = 0; i < this.iraArr.length; i++) {
          let firstChar = this.iraArr[i][0].split('');
          firstChar[0] = firstChar[0].toUpperCase();
          firstChar = firstChar.join('');
          this.iraArr[i][0] = firstChar;
        }
        this.iraArr[3][0] = 'Annual Contribution';
        this.iraArr[4][0] = 'Account Date';
      })
    })
    this.getInvestments();
  }

getInvestments(): void {
  this.iraService.getInvestments().subscribe(payload =>{
    this.investments = payload;
  })
}

}

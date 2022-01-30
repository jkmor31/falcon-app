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
  iras: Ira[] = [];
  investments: Investment[] = [];
  users: User[] = [];

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private iraService: IraService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.iraService.getUsers().subscribe(payload => {
        this.users = payload;
      })})
    this.iraService.getIras().subscribe(payload =>{
      this.iras = payload;
    })

    this.getInvestments();
  }

getInvestments(): void {
  this.iraService.getInvestments().subscribe(payload =>{
    this.investments = payload;
  })
}

}

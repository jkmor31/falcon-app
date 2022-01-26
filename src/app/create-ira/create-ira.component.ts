import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ira } from './create-ira.model'; 
import { IraService } from '../ira.service';

@Component({
  selector: 'app-create-ira',
  templateUrl: './create-ira.component.html',
  styleUrls: ['./create-ira.component.scss']
})
export class CreateIraComponent implements OnInit {
  newIra: Ira = {
    // id: null,
    // label: '',
    // balance: 0,
    // annualContribution: 0,
    // userId: 0
  }


  constructor(private route:ActivatedRoute, 
    private iraService: IraService, 
    private router: Router) { }

  ngOnInit(): void {
  }

createIra(): void {
  this.iraService.createIra(this.newIra).subscribe(data => {
    if(data) {
      this.router.navigateByUrl("/dashboard/1");
    }
  })
}

}

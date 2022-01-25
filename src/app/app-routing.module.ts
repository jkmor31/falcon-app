import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IraComponent } from './ira/ira.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateIraComponent } from './create-ira/create-ira.component';
import { InvestmentsComponent } from './investments/investments.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "ira", component: IraComponent},
  {path: "dashboard/:id", component: DashboardComponent},
  {path: "investments", component: InvestmentsComponent},
  {path: "create-ira", component: CreateIraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

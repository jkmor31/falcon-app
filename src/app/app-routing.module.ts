import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IraComponent } from './ira/ira.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "ira", component: IraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

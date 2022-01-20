import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { IraComponent } from './ira/ira.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateIraComponent } from './create-ira/create-ira.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IraComponent,
    DashboardComponent,
    CreateIraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

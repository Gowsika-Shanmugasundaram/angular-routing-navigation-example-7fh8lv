import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialUiModule } from './shared/material-ui.module';
import { RouterModule, Routes } from '@angular/router';
import { BikeComponent } from './bikes/bikes.component';
import { BikeInfoComponent } from './bikesinfo/bikesinfo.component';
import { BikeService } from './bike.service';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports:[ BrowserModule,MaterialUiModule ,FormsModule,AppRoutingModule, ReactiveFormsModule],
  declarations: [ AppComponent ,BikeComponent,BikeInfoComponent, AddUserComponent],
  providers:[BikeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

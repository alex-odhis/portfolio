import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgwWowModule } from 'ngx-wow'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ClientsService } from 'src/app/clients/clients.service';
import { ClientsComponent } from 'src/app/clients/clients.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgwWowModule,
    BrowserAnimationsModule,
    RouterModule
    
  
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

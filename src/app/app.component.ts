import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'vinAlex';

  constructor(private wowService: NgwWowService){}

  ngOnInit(){
    this.wowService.init();
  }
}

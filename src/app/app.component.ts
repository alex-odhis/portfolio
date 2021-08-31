import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import Typewriter from 't-writer.js';


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
   
    const target = document.querySelector('.tw')

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'red'
    })

    writer
      .type(`Hi I'm Alex`)
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(11)
      .type(`I'm a Software Engineer`)
      .rest(500)
      .remove(23)
      .type(`Web Mobile Specialist`)
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(21)
      .type('I solve problems.')
      .rest(500)
      .clear()
      .start()

  }
}

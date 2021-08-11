import { Component, OnInit } from "@angular/core";
import { ClientsService } from "./clients.service";

@Component({
    selector: 'client',

    template: `
<section *ngIf ="clients.length > 0" id="work">
  <h2 class="text-center p-3 wow bounceInDown">Work</h2>
  <p class="tag-line text-center wow bounceInDown">Here are few of my former clients.</p>

 <div class="kazi">
    <div *ngFor = "let client of clients" class=" row work-row my-3">
        <div class="col-sm-6 columns wow fadeInRight">
        <img [src]="client.image" [alt]="client.name" class="img-fluid rounded">
        </div>
        <div class="col-sm-6 wow fadeInLeft">
            <div class="details details-ftm">
                <h3>{{client.name}}</h3>
                <p class="platform">{{client.platform}}</p>
                <p class="icons"><i class="fa fa-laptop"></i><i class="fa fa-tablet"></i><i class="fa fa-mobile"></i></p>
                <p>{{client.description}}</p>
                <a class="btn btn-outline-danger" target="_blank" [href]="client.link">Visit Website</a>
            </div>
        </div>
    </div>
 </div>
</section>
    `
 ,

    styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit{
    clients: any[]= []
    errorMessage

    constructor(private clientsService: ClientsService){}

    ngOnInit(): void {
        this.clientsService.getClients().subscribe({
            next: data => this.clients = data,
            error: err => this.errorMessage = err
        })
    }

}
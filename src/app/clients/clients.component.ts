import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { catchError } from "rxjs/operators";
import { ClientsService } from "./clients.service";

@Component({
    selector: 'client',

    template: `
<section *ngIf ="clients$ | async as clients" id="work">
  <h2 class="text-center p-3 wow bounceInDown">Work</h2>
  <p class="tag-line text-center wow bounceInDown">Here are few of my former clients.</p>

 <div class="kazi">
    <div *ngFor = "let client of clients" class=" row work-row pb-4">
        <div class="col-sm-6 columns wow fadeInRight">
        <img [src]="client.image" [alt]="client.name" class="img-fluid rounded">
        </div>
        <div class="col-sm-6 wow fadeInLeft">
            <div class="details details-ftm">
                <h3>{{client.name}}</h3>
                <p class="platform">{{client.platform}}</p>
                <p class="icons"><i class="fa fa-laptop"></i><i class="fa fa-tablet"></i><i class="fa fa-mobile"></i></p>
                <p>{{client.description}}</p>
                <a *ngIf="client.link" class="btn btn-outline-danger" target="_blank" [href]="client.link">Visit Website</a>
                <a *ngIf="!client.link" class="btn btn-outline-danger" target="_blank">{{client.sub}}</a>
            </div>
        </div>
    </div>
 </div>
</section>
    `
 ,

    styleUrls: ['./clients.component.css'],

    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ClientsComponent{
    errorMessage

    constructor(private clientsService: ClientsService){}

    clients$ = this.clientsService.getClients$.pipe(
        catchError( err=> {
            this.errorMessage = err;
            return of(null)
        })
    )

}
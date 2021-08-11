import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClientsService{

    clients = [
        {
            name: 'Hunter Cole',
            platform: 'Web',
            description: 'An internationally recognized Makeup Artist from Loyola University of Chicago.',
            image: 'assets/images/makeup.jpg',
            link: 'http://huntercole.org'
        },
        {
            name: 'FreshTechMaids',
            platform: 'Web',
            description: 'FreshTechMaids is a house maid service company.',
            image: 'assets/images/ftm-site.png',
            link: 'http://www.freshtechmaids.com'
        },
        {
            name: 'Sykora Kitchens',
            platform: 'Web',
            description: 'A European kitchens and cabinets manufacturer.',
            image: 'assets/images/sykora-kitchens.png',
            link: 'http://www.sykorakitchens.com'
        }
    ]

    getClients(): Observable<any[]>{
        return of (this.clients)
    }
}
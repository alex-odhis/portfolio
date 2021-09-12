import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Client } from "./client.interface";

@Injectable({
    providedIn: 'root'
})
export class ClientsService{

    clients = [
        {
            name: 'Flawless Makeup',
            platform: 'Web',
            description: 'A Makeup Artist Portfolio website.',
            image: './assets/images/makeup.png',
            link: 'https://alex-odhis.github.io/alex-flawless-makeup/home'
        },
        {
            name: 'Task Manager App',
            platform: 'Web',
            description: 'A Task Manager Application to help you Organize and Finish your tasks on time and efficiently.',
            image: './assets/images/task.png',
            link: 'https://odhis-manager-api.herokuapp.com/'
    
        },
        {
            name: 'Chapati Mistress',
            platform: 'Web',
            description: 'Chapati Mistress is an online kitchen store that has proven to be number one Nairobi darling.',
            image: './assets/images/chapati.png',
            sub: 'Link coming soon'

        }   
    ]



    clients$ = of<Client[]>(this.clients).pipe(
        catchError(this.handleError)
    )

    private handleError(err: any) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);

    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Planet, Deferred } from '../model';
import { Route } from '../model';
import { Observable } from 'rxjs';


@Injectable()
export class ApiService {
    //hack cause tried enabling in my server.js to no avail
    url: string = 'http://178.62.25.59:3000/';
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': 'true'
    };
    constructor(private http: HttpClient) { }

    public getPlanets(oncomplete: Deferred<Planet[]>) {
        let requestOptions = {
            headers: new HttpHeaders(this.headers)
        }
        return this.http.get(this.url + 'planets', requestOptions).toPromise().then(oncomplete);
    }

    public getRoutes() {
        return this.http.get(this.url + 'routes');
    }

    public getDestinationsById(destinationId: number) {
        return this.http.get(this.url + 'route/destination/' + destinationId);
    }

    public getDeparturesById(departureId: number) {
        return this.http.get(this.url + 'route/destination/' + departureId);
    }
}

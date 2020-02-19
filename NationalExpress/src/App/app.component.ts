import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from './api/api.service';
import { Planet, Route, Schedule } from './model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
    title = 'NationalExpress';
    planets: Planet[] = [];
    routes: Route[] = [];
    schedule: Schedule[] = [];
    planetToShowRoutesFor: Planet;
    showHomePage: boolean = true;
    showSchedule: boolean = false;
    showPlanetView: boolean = false;
    constructor(private api: ApiService) {
    }

    toggleHomePage() {
        this.showHomePage = true;
        this.showSchedule = false;
        this.showPlanetView = false;
    }

    togglePlanetView(planet: Planet) {
        this.planetToShowRoutesFor = planet;
        this.showPlanetView = true;
        this.showHomePage = false;
        this.showSchedule = false;
    }

    toggleScheduleView() {
        this.showHomePage = false;
        this.showSchedule = true;
        this.showPlanetView = false;
    }
    ngOnInit() {
        this.api.getPlanets(this.onGetPlanets);

        this.api.getRoutes().subscribe((data: Route[]) => { this.routes = data },
            (err) => console.error(err));
    }

    onGetPlanets = (planets: Planet[]) => {
        this.planets = planets;

        if (this.planets.length > 0) {
            for (let planet of this.planets) {
                planet.srcImg = "/assets/images/" + planet.planetName + ".jpg";
            }
        }
        this.ngOnChanges();
    }

    ngOnChanges() {
        if (this.planets.length > 0 && this.routes.length > 0 && this.schedule.length == 0) {
            for (let route of this.routes) {
                let currSchedule: Schedule = route;
                currSchedule = this.populateDestAndDepaNames(currSchedule);
                this.schedule.push(currSchedule);
            }
        }
    }

    populateDestAndDepaNames(currSchedule: Schedule): Schedule {
        currSchedule.destinationDisplayName = this.planets.find(x => currSchedule.destination == x.planetId).planetName;
        currSchedule.departureDisplayName = this.planets.find(x => currSchedule.departure == x.planetId).planetName;
        return currSchedule;
    }
}

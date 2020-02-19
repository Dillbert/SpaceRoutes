import { Component, OnInit, Input } from '@angular/core';
import { Schedule, Planet } from '../model';

@Component({
    selector: 'app-single-planet',
    templateUrl: './single-planet.component.html',
    styleUrls: ['./single-planet.component.css']
})
export class SinglePlanetComponent implements OnInit {

    @Input()
    planet: Planet;

    @Input()
    fullSchedule: Schedule[];

    departures: Schedule[] = [];
    destinations: Schedule[] = [];

    constructor() { }

    ngOnInit() {
        for (let schedule of this.fullSchedule) {
            if (schedule.destination == this.planet.planetId) {
                this.destinations.push(schedule);
            }
            if (schedule.departure == this.planet.planetId) {
                this.departures.push(schedule);
            }
        }
    }

}

import { Component, OnInit, Input } from '@angular/core';
import { Route, Planet, Schedule } from '../model';


@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

    @Input()
    displaySchedule: Schedule[] = [];

    constructor() { }

    ngOnInit() {
    }
}

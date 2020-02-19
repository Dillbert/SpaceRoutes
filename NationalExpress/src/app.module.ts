import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api/api.service';
import { ScheduleComponent } from './schedule/schedule.component';
import { SinglePlanetComponent } from './single-planet/single-planet.component';

@NgModule({
    declarations: [
        AppComponent,
        ScheduleComponent,
        SinglePlanetComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }

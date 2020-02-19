export interface Planet {
    planetId?: number;
    planetName?: string;
    srcImg?: string;
}

export interface Route {
    id?: number;
    routeName?: string;
    departingWeekDay?: string;
    departure?: number;
    destination?: number;
    legOne?: number;
    legTwo?: number;
    legThree?: number;
    legFour?: number;
}

export interface Schedule extends Route {
    destinationDisplayName?: string;
    departureDisplayName?: string;
}

export interface Deferred<T> {
    (t: T): void;
}

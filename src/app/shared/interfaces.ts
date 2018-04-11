export interface IHorse {
    id: number;
    name: string;
    color: string;
    dob: string;
    needTotal?: number;
    horseSince: any;
}

export interface INeeds {
    horseId: number;
    horseItems: INeedItem[];
}

export interface INeedItem {
    id: number;
    needName: string;
    needCost: number;
}
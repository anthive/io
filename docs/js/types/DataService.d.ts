import { IMap, IPlayer } from "./interfaces";
export declare class DataService {
    private _data;
    private _map;
    private _players;
    static getClientResourceKey(img: string, skin?: number): string;
    static getServerResourceKey(img: string, theme?: number): string;
    constructor(_data: any);
    loadAll(): Promise<any>;
    private loadImages;
    private loadData;
    private parseData;
    private parseDiff;
    private unzip;
    readonly map: IMap;
    readonly count: {
        tiles: number;
        rows: number;
    };
    readonly players: Array<IPlayer>;
}

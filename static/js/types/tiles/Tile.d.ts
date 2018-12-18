import * as PIXI from "pixi.js";
import { ITile, ITileParams } from "../interfaces";
export declare class Tile implements ITile {
    private _params;
    protected size: any;
    protected position: any;
    units: any;
    constructor(_params: ITileParams);
    render(): PIXI.Sprite;
}

import * as PIXI from "pixi.js";
import { Tile } from "./Tile";
import { ITileParams } from "../interfaces";
export declare class FoodTile extends Tile {
    constructor(params: ITileParams);
    render(): PIXI.Sprite;
}

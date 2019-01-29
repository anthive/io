import * as PIXI from "pixi.js";
import { IFrame, IPayload, ISkins } from "./interfaces";
export declare class Stage extends PIXI.Container {
    private _frame;
    private _skins;
    private _tilesFactory;
    constructor(_frame: IFrame, _skins: ISkins);
    private init;
    private loop;
    addChild<T extends PIXI.DisplayObject>(child: T): T;
    toDebug(size: {
        width: number;
        height: number;
    }, username: string): IPayload;
}

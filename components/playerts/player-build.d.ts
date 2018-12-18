/// <reference types="pixi.js" />
/// <reference types="node" />
declare module "interfaces/IControl" {
    export interface IControl {
        onClick(params?: any): void;
        disabled: boolean;
    }
}
declare module "enums/ClientEvents" {
    export enum ClientEvents {
        "noaction@2x.png" = 2,
        "slow@2x.png" = 3,
        "badmove@2x.png" = 4,
        "badload@2x.png" = 5,
        "badunload@2x.png" = 6,
        "badeat@2x.png" = 7,
        "collision@2x.png" = 8,
        "error@2x.png" = 9
    }
}
declare module "enums/ControlType" {
    export enum ControlType {
        PlayPause = 0,
        Prev = 1,
        Next = 2,
        Speed = 3,
        Debug = 4
    }
}
declare module "enums/TileType" {
    export enum TileType {
        Map = 0,
        Food = 1,
        Ant = 2
    }
}
declare module "enums/index" {
    export * from "enums/ClientEvents";
    export * from "enums/ControlType";
    export * from "enums/TileType";
}
declare module "controls/Control" {
    import { IControl } from "interfaces/index";
    import { Player } from "Player";
    export class Control implements IControl {
        protected readonly player: Player;
        onClick(params?: any): void;
        readonly disabled: boolean;
    }
}
declare module "interfaces/IControlsFactory" {
    import { ControlType } from "enums/index";
    import { Control } from "controls/Control";
    export interface IControlsFactory {
        createControl(type: ControlType): Control;
    }
}
declare module "interfaces/IFrame" {
    export interface IFrame extends Array<Array<number>> {
    }
}
declare module "interfaces/IDataV2" {
    import { IFrame } from "interfaces/IFrame";
    export interface IDataV2 {
        canvas: IFrame;
        frames: Array<Array<{
            l: number;
            v: number;
        }>>;
        game: any;
        players: any;
        version: number;
    }
}
declare module "interfaces/IMap" {
    import { IFrame } from "interfaces/IFrame";
    export interface IMap extends Array<IFrame> {
    }
}
declare module "interfaces/IPayload" {
    export interface IPayload {
        id: string;
        ants: Array<any>;
        map: {
            width: number;
            height: number;
            cells: Array<Array<{
                food: number;
                hive: string;
                ant: string;
            }>>;
        };
    }
}
declare module "interfaces/IPlayer" {
    export interface IPlayer {
        username: string;
        info: {
            city: string;
            country: string;
            lang: string;
            org: string;
            picture: string;
            repo: string;
            sha: string;
            skin: number;
        };
        stats: {
            avgRT: number;
            errors: number;
            maxAge: number;
            maxAnts: number;
            maxHive: number;
        };
    }
}
declare module "interfaces/ISkins" {
    export interface ISkins {
        [k: number]: string;
    }
}
declare module "interfaces/ITile" {
    export interface ITile {
        render(): void;
    }
}
declare module "interfaces/ITileParams" {
    export interface ITileParams {
        value: number;
        x: number;
        y: number;
    }
}
declare module "Config" {
    export const Config: {
        play: boolean;
        speed: number;
        speedList: number[];
        interval: number;
        size: {
            width: number;
            height: number;
        };
        colors: {
            black: number;
            green: number;
            brown: number;
        };
        resourcesURL: string;
        flagsURL: string;
    };
}
declare module "tiles/Tile" {
    import * as PIXI from "pixi.js";
    import { ITile, ITileParams } from "interfaces/index";
    export class Tile implements ITile {
        private _params;
        protected size: any;
        protected position: any;
        units: any;
        constructor(_params: ITileParams);
        render(): PIXI.Sprite;
    }
}
declare module "interfaces/ITilesFactory" {
    import { TileType } from "enums/index";
    import { ITileParams } from "interfaces/ITileParams";
    import { Tile } from "tiles/Tile";
    export interface ITilesFactory {
        createTile(params: ITileParams, type: TileType): Tile;
    }
}
declare module "interfaces/index" {
    export * from "interfaces/IControl";
    export * from "interfaces/IControlsFactory";
    export * from "interfaces/IDataV2";
    export * from "interfaces/IFrame";
    export * from "interfaces/IMap";
    export * from "interfaces/IPayload";
    export * from "interfaces/IPlayer";
    export * from "interfaces/ISkins";
    export * from "interfaces/ITile";
    export * from "interfaces/ITilesFactory";
    export * from "interfaces/ITileParams";
}
declare module "DataService" {
    import { IMap, IPlayer } from "interfaces/index";
    export class DataService {
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
}
declare module "tiles/MapTile" {
    import * as PIXI from "pixi.js";
    import { Tile } from "tiles/Tile";
    import { ITileParams } from "interfaces/index";
    export class MapTile extends Tile {
        constructor(params: ITileParams);
        render(): PIXI.Sprite;
    }
}
declare module "tiles/FoodTile" {
    import * as PIXI from "pixi.js";
    import { Tile } from "tiles/Tile";
    import { ITileParams } from "interfaces/index";
    export class FoodTile extends Tile {
        constructor(params: ITileParams);
        render(): PIXI.Sprite;
    }
}
declare module "tiles/AntTile" {
    import * as PIXI from "pixi.js";
    import { Tile } from "tiles/Tile";
    import { ITileParams } from "interfaces/index";
    export class AntTile extends Tile {
        constructor(params: ITileParams);
        render(): PIXI.Sprite;
    }
}
declare module "tiles/TilesFactory" {
    import { ITilesFactory, ITileParams } from "interfaces/index";
    import { TileType } from "enums/index";
    import { Tile } from "tiles/Tile";
    export class TilesFactory implements ITilesFactory {
        createTile(params: ITileParams, type: TileType): Tile;
    }
}
declare module "Stage" {
    import * as PIXI from "pixi.js";
    import { IFrame, IPayload, ISkins } from "interfaces/index";
    export class Stage extends PIXI.Container {
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
}
declare module "controls/PlayPauseControl" {
    import { Control } from "controls/Control";
    export class PlayPauseControl extends Control {
        constructor();
        onClick(): void;
    }
}
declare module "controls/PrevControl" {
    import { Control } from "controls/Control";
    export class PrevControl extends Control {
        constructor();
        onClick(): void;
        readonly disabled: boolean;
    }
}
declare module "controls/NextControl" {
    import { Control } from "controls/Control";
    export class NextControl extends Control {
        constructor();
        onClick(): void;
        readonly disabled: boolean;
    }
}
declare module "controls/SpeedControl" {
    import { Control } from "controls/Control";
    export class SpeedControl extends Control {
        constructor();
        onClick(speed: number): void;
    }
}
declare module "controls/DebugControl" {
    import { Control } from "controls/Control";
    export class DebugControl extends Control {
        constructor();
        onClick(): void;
        readonly disabled: boolean;
    }
}
declare module "controls/ControlsFactory" {
    import { IControlsFactory } from "interfaces/index";
    import { ControlType } from "enums/index";
    import { Control } from "controls/Control";
    export class ControlsFactory implements IControlsFactory {
        createControl(type: ControlType): Control;
    }
}
declare module "controls/Progress" {
    export class Progress {
        private _age;
        private _position;
        private _total;
        constructor();
        private update;
        readonly age: number;
        readonly position: number;
        readonly total: number;
    }
}
declare module "controls/Controls" {
    import { Progress } from "controls/Progress";
    import { PlayPauseControl } from "controls/PlayPauseControl";
    import { PrevControl } from "controls/PrevControl";
    import { NextControl } from "controls/NextControl";
    import { SpeedControl } from "controls/SpeedControl";
    import { DebugControl } from "controls/DebugControl";
    export class Controls {
        private _controlsFactory;
        progress: Progress;
        playPause: PlayPauseControl;
        prev: PrevControl;
        next: NextControl;
        speed: SpeedControl;
        debug: DebugControl;
        constructor();
        private addButtons;
    }
}
declare module "Player" {
    import { EventEmitter } from "events";
    import "./resources/styles.css";
    import { IPlayer, ISkins } from "interfaces/index";
    import { Stage } from "Stage";
    import { Controls } from "controls/Controls";
    class Player extends EventEmitter {
        private _data;
        private _target;
        private _play;
        private _speed;
        static onReady: string;
        static onFrameRendered: string;
        static onPaused: string;
        static onStarted: string;
        static instance: Player;
        private _playerContainer;
        private _app;
        private _dataService;
        private _stages;
        private _prevStage;
        private _currentStage;
        private _currentIndex;
        private _total;
        private _loaded;
        private _playing;
        private _interval;
        controls: Controls;
        constructor(_data: string | object, _target?: string, _play?: boolean, _speed?: number);
        private init;
        private createRenderer;
        private createStages;
        private render;
        private resize;
        private readonly intervalTime;
        play(): void;
        pause(): void;
        prev(): void;
        next(): void;
        speed: number;
        readonly currentIndex: number;
        readonly total: number;
        readonly isPlaying: boolean;
        readonly players: Array<IPlayer>;
        readonly skins: ISkins;
        readonly size: {
            width: number;
            height: number;
        };
        readonly stage: Stage;
        readonly currentUser: any;
    }
    export { Player };
    export { Player as AnthivePlayer };
}

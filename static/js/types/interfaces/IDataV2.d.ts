import { IFrame } from "./IFrame";
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

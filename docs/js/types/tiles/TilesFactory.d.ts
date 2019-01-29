import { ITilesFactory, ITileParams } from "../interfaces";
import { TileType } from "../enums";
import { Tile } from "./Tile";
export declare class TilesFactory implements ITilesFactory {
    createTile(params: ITileParams, type: TileType): Tile;
}

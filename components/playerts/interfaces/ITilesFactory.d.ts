import { TileType } from "../enums";
import { ITileParams } from "./ITileParams";
import { Tile } from "../tiles/Tile";
export interface ITilesFactory {
    createTile(params: ITileParams, type: TileType): Tile;
}

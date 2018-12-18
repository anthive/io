"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const MapTile_1 = require("./MapTile");
const FoodTile_1 = require("./FoodTile");
const AntTile_1 = require("./AntTile");
class TilesFactory {
    createTile(params, type) {
        switch (type) {
            case enums_1.TileType.Map:
                return new MapTile_1.MapTile(params);
            case enums_1.TileType.Food:
                return new FoodTile_1.FoodTile(params);
            case enums_1.TileType.Ant:
                return new AntTile_1.AntTile(params);
            default:
                return null;
        }
    }
}
exports.TilesFactory = TilesFactory;
//# sourceMappingURL=TilesFactory.js.map
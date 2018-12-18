"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = require("pixi.js");
const Tile_1 = require("./Tile");
const DataService_1 = require("../DataService");
const enums_1 = require("../enums");
class MapTile extends Tile_1.Tile {
    constructor(params) {
        super(params);
    }
    render() {
        if (this.units.m === 0) {
            return null;
        }
        let key = DataService_1.DataService.getClientResourceKey("hive@2x.png", this.units.m);
        if (this.units.m === 9) {
            key = DataService_1.DataService.getServerResourceKey("fog@2x.png");
        }
        if (this.units.e >= 2 && this.units.e <= 9) {
            key = DataService_1.DataService.getClientResourceKey(enums_1.ClientEvents[this.units.e]);
        }
        const sprite = new PIXI.Sprite(PIXI.loader.resources[key].texture);
        sprite.width = this.size.w;
        sprite.height = this.size.h;
        sprite.position.set(this.position.x, this.position.y);
        return sprite;
    }
}
exports.MapTile = MapTile;
//# sourceMappingURL=MapTile.js.map
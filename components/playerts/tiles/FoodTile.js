"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = require("pixi.js");
const Tile_1 = require("./Tile");
const DataService_1 = require("../DataService");
class FoodTile extends Tile_1.Tile {
    constructor(params) {
        super(params);
    }
    render() {
        if (this.units.f === 0) {
            return null;
        }
        let key;
        if (this.units.f >= 1 && this.units.f <= 3) {
            key = DataService_1.DataService.getServerResourceKey("foodsmall@2x.png");
        }
        else if (this.units.f >= 4 && this.units.f <= 6) {
            key = DataService_1.DataService.getServerResourceKey("foodmid@2x.png");
        }
        else if (this.units.f >= 7 && this.units.f <= 9) {
            key = DataService_1.DataService.getServerResourceKey("foodbig@2x.png");
        }
        const sprite = new PIXI.Sprite(PIXI.loader.resources[key].texture);
        sprite.width = this.size.w;
        sprite.height = this.size.h;
        sprite.position.set(this.position.x, this.position.y);
        return sprite;
    }
}
exports.FoodTile = FoodTile;
//# sourceMappingURL=FoodTile.js.map
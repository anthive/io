"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = require("pixi.js");
const request = require("request-promise-native");
const JSZip = require("jszip");
const lodash_1 = require("lodash");
const enums_1 = require("./enums");
const Config_1 = require("./Config");
class DataService {
    constructor(_data) {
        this._data = _data;
    }
    static getClientResourceKey(img, skin = 1) {
        return `${Config_1.Config.resourcesURL}/client/${skin}/${img}`;
    }
    static getServerResourceKey(img, theme = 1) {
        return `${Config_1.Config.resourcesURL}/server/${theme}/${img}`;
    }
    loadAll() {
        return this.loadData()
            .then((data) => this.loadImages());
    }
    loadImages(skin = 1) {
        let serverImages = ["background.png", "fog@2x.png", "foodsmall@2x.png", "foodmid@2x.png", "foodbig@2x.png"];
        const events = ["birth@2x.png", "death@2x.png", ...Array(8).fill(2).map((n, i) => enums_1.ClientEvents[n + i])];
        let clientImages = ["ant@2x.png", "hive@2x.png", ...events].map((img) => {
            if (!img.startsWith("ant") && !img.startsWith("hive")) {
                return DataService.getClientResourceKey(img, skin);
            }
            const urls = [];
            for (let i = 1; i <= 2; i++) {
                urls.push(DataService.getClientResourceKey(img, i));
            }
            return urls;
        });
        serverImages = serverImages.map((img) => DataService.getServerResourceKey(img));
        return new Promise((resolve) => {
            PIXI.loader
                .add([lodash_1.flatten(clientImages), ...serverImages])
                .load(resolve);
        });
    }
    loadData() {
        try {
            const url = new URL(this._data);
            if (url.href.endsWith(".zip")) {
                return request({
                    url: url.href,
                    encoding: null
                }).then(data => this.unzip(data, url.pathname));
            }
            return request(url.href).then(data => this.parseData(data));
        }
        catch (e) {
            return Promise.resolve(this.parseData());
        }
    }
    parseData(data = this._data) {
        let parsedData;
        try {
            parsedData = JSON.parse(data);
        }
        catch (e) {
            parsedData = data;
        }
        console.log(parsedData);
        this._map = parsedData.version === "2.3" ? this.parseDiff(parsedData) : parsedData.Map;
        this._players = parsedData.players;
        return parsedData;
    }
    parseDiff(data) {
        let lastFrame = JSON.parse(JSON.stringify(data.canvas));
        let map = [];
        map.push(lastFrame);
        for (const frameDiff of data.frames) {
            for (const tileDiff of frameDiff) {
                const x = tileDiff.l % 100;
                const y = Math.floor(tileDiff.l / 100);
                lastFrame[y][x] = tileDiff.v;
            }
            map.push(lastFrame);
            lastFrame = JSON.parse(JSON.stringify(lastFrame));
        }
        return map;
    }
    unzip(data, pathname) {
        const fileName = pathname.split("/").pop().replace(".zip", ".json");
        return JSZip.loadAsync(data)
            .then(zip => zip.file(fileName).async("string"))
            .then((result) => {
            return this.parseData(result);
        });
    }
    get map() {
        return this._map ? this._map.slice(0, 1500) : [];
    }
    get count() {
        return this._map ? { tiles: this._map[0][0].length, rows: this._map[0].length } : null;
    }
    get players() {
        return this._players;
    }
}
exports.DataService = DataService;
//# sourceMappingURL=DataService.js.map
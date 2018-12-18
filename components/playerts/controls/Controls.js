"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const ControlsFactory_1 = require("./ControlsFactory");
const Progress_1 = require("./Progress");
class Controls {
    constructor() {
        this._controlsFactory = null;
        this._controlsFactory = new ControlsFactory_1.ControlsFactory();
        this.progress = new Progress_1.Progress();
        this.addButtons();
    }
    addButtons() {
        this.playPause = this._controlsFactory.createControl(enums_1.ControlType.PlayPause);
        this.prev = this._controlsFactory.createControl(enums_1.ControlType.Prev);
        this.next = this._controlsFactory.createControl(enums_1.ControlType.Next);
        this.speed = this._controlsFactory.createControl(enums_1.ControlType.Speed);
        this.debug = this._controlsFactory.createControl(enums_1.ControlType.Debug);
    }
}
exports.Controls = Controls;
//# sourceMappingURL=Controls.js.map
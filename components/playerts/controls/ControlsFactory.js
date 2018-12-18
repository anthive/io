"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const PlayPauseControl_1 = require("./PlayPauseControl");
const PrevControl_1 = require("./PrevControl");
const NextControl_1 = require("./NextControl");
const SpeedControl_1 = require("./SpeedControl");
const DebugControl_1 = require("./DebugControl");
class ControlsFactory {
    createControl(type) {
        switch (type) {
            case enums_1.ControlType.PlayPause:
                return new PlayPauseControl_1.PlayPauseControl();
            case enums_1.ControlType.Prev:
                return new PrevControl_1.PrevControl();
            case enums_1.ControlType.Next:
                return new NextControl_1.NextControl();
            case enums_1.ControlType.Speed:
                return new SpeedControl_1.SpeedControl();
            case enums_1.ControlType.Debug:
                return new DebugControl_1.DebugControl();
            default:
                return null;
        }
    }
}
exports.ControlsFactory = ControlsFactory;
//# sourceMappingURL=ControlsFactory.js.map
import { IControlsFactory } from "../interfaces";
import { ControlType } from "../enums";
import { Control } from "./Control";
export declare class ControlsFactory implements IControlsFactory {
    createControl(type: ControlType): Control;
}

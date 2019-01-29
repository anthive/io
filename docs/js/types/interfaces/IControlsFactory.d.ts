import { ControlType } from "../enums";
import { Control } from "../controls/Control";
export interface IControlsFactory {
    createControl(type: ControlType): Control;
}

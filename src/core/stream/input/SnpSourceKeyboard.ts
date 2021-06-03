import {SnpComponent, SnpComponentOptions} from "../SnpComponent";
import {SnpPort} from "../SnpPort";
import SnpStreamElement from "../../../ui/SnpStreamElement";
import {StreamDataKeyboard} from "../../network/proto/snappyv1";
import xtscancodes from "./xtscancodes";

export interface SnpSourceOptions extends SnpComponentOptions {
  snpStreamElement : SnpStreamElement
}

export class SnpSourceKeyboard extends SnpComponent {
  snpStreamElement : SnpStreamElement;

  onKeyDownHandler : (e:KeyboardEvent)=>void;
  onKeyUpHandler : (e:KeyboardEvent)=>void;

  constructor(options: SnpSourceOptions) {
    super(options);
    this.snpStreamElement = options.snpStreamElement;
    this.addOutputPort(new SnpPort({}));

    this.onKeyDownHandler = this.onKeyDown.bind(this);
    this.onKeyUpHandler = this.onKeyUp.bind(this);


    this.snpStreamElement.addEventListener("keydown", this.onKeyDownHandler, true);
    this.snpStreamElement.addEventListener("keyup", this.onKeyUpHandler, true);
  }

  onKeyDown(e:KeyboardEvent) {
    const streamDataKeyboard:StreamDataKeyboard = {
      keycode : xtscancodes[e.code],
      keysym : 0, //TODO: omit/remove
      down : true
    }
    this.getOutputPort(0).onData(StreamDataKeyboard.encode(streamDataKeyboard).finish(), true);
  }

  onKeyUp(e:KeyboardEvent) {
    const streamDataKeyboard:StreamDataKeyboard = {
      keycode : xtscancodes[e.code],
      keysym : 0, //TODO: omit/remove
      down : false
    }
    this.getOutputPort(0).onData(StreamDataKeyboard.encode(streamDataKeyboard).finish(), true);
  }
}
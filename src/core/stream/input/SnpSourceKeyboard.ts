import {SnpComponent, SnpComponentOptions} from "../SnpComponent";
import {SnpPort} from "../SnpPort";
import SnpStreamElement from "../../../ui/SnpStreamElement";
import {StreamDataKeyboard, StreamDataPointer} from "../../network/proto/snappyv1";

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


    this.snpStreamElement.addEventListener("keydown", this.onKeyDownHandler);
    this.snpStreamElement.addEventListener("keyup", this.onKeyUpHandler);
  }

  onKeyDown(e:KeyboardEvent) {
    const streamDataKeyboard:StreamDataKeyboard = {
      keycode : e.charCode, //TODO: mapping
      keysym : e.charCode, //TODO: mapping
      down : true
    }
    this.getOutputPort(0).onData(StreamDataKeyboard.encode(streamDataKeyboard).finish(), true);
  }

  onKeyUp(e:KeyboardEvent) {
    const streamDataKeyboard:StreamDataKeyboard = {
      keycode : e.charCode, //TODO: mapping
      keysym : e.charCode, //TODO: mapping
      down : false
    }
    this.getOutputPort(0).onData(StreamDataKeyboard.encode(streamDataKeyboard).finish(), true);
  }
}
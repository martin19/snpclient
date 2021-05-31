import {SnpComponent, SnpComponentOptions} from "../SnpComponent";
import {SnpPort} from "../SnpPort";
import SnpStreamElement from "../../../ui/SnpStreamElement";
import {StreamDataPointer} from "../../network/proto/snappyv1";

export interface SnpSourceMouseOptions extends SnpComponentOptions {
  snpStreamElement : SnpStreamElement
}

export class SnpSourceMouse extends SnpComponent {

  private _currentMouseMask : number;
  snpStreamElement : SnpStreamElement;

  onMouseMoveHandler : (e:MouseEvent)=>void;
  onMouseDownHandler : (e:MouseEvent)=>void;
  onMouseUpHandler : (e:MouseEvent)=>void;

  constructor(options: SnpSourceMouseOptions) {
    super(options);
    this.snpStreamElement = options.snpStreamElement;
    this.addOutputPort(new SnpPort({}));

    this.onMouseMoveHandler = this.onMouseChange.bind(this);
    this.onMouseDownHandler = this.onMouseChange.bind(this);
    this.onMouseUpHandler = this.onMouseChange.bind(this);

    this.snpStreamElement.addEventListener("mousemove", this.onMouseChange.bind(this));
    this.snpStreamElement.addEventListener("mousedown", this.onMouseChange.bind(this));
    this.snpStreamElement.addEventListener("mouseup", this.onMouseChange.bind(this));
  }

  onMouseChange(e : MouseEvent) {
    const { x, y } = this.snpStreamElement.transformLocalToStream(e.offsetX, e.offsetY);
    const streamDataPointer:StreamDataPointer = {
      absx : x,
      absy : y,
      mask : e.buttons
    }
    this.getOutputPort(0).onData(StreamDataPointer.encode(streamDataPointer).finish(), true);
  }
}
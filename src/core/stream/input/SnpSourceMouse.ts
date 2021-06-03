import {SnpComponent, SnpComponentOptions} from "../SnpComponent";
import {SnpPort} from "../SnpPort";
import SnpStreamElement from "../../../ui/SnpStreamElement";
import {StreamDataPointer} from "../../network/proto/snappyv1";

export interface SnpSourceMouseOptions extends SnpComponentOptions {
  snpStreamElement : SnpStreamElement
}

const WHEEL_STEP = 50; // Pixels needed for one step
const WHEEL_LINE_HEIGHT = 19; // Assumed pixels for one line step

export class SnpSourceMouse extends SnpComponent {

  private _currentMouseMask : number;
  snpStreamElement : SnpStreamElement;
  _accumulatedWheelDeltaX : number;
  _accumulatedWheelDeltaY : number;

  onMouseMoveHandler : (e:MouseEvent)=>void;
  onMouseDownHandler : (e:MouseEvent)=>void;
  onMouseUpHandler : (e:MouseEvent)=>void;
  onMouseWheelHandler : (e:MouseWheelEvent)=>void;

  constructor(options: SnpSourceMouseOptions) {
    super(options);
    this.snpStreamElement = options.snpStreamElement;
    this._accumulatedWheelDeltaX = 0;
    this._accumulatedWheelDeltaY = 0;

    this.addOutputPort(new SnpPort({}));

    this.onMouseMoveHandler = this.onMouseChange.bind(this);
    this.onMouseDownHandler = this.onMouseChange.bind(this);
    this.onMouseUpHandler = this.onMouseChange.bind(this);
    this.onMouseWheelHandler = this.onMouseWheel.bind(this);

    this.snpStreamElement.addEventListener("mousemove", this.onMouseMoveHandler);
    this.snpStreamElement.addEventListener("mousedown", this.onMouseDownHandler);
    this.snpStreamElement.addEventListener("mouseup", this.onMouseUpHandler);
    this.snpStreamElement.addEventListener("wheel", this.onMouseWheelHandler)
  }

  sendMouseEvent(x : number, y : number, mask:number) {
    const streamDataPointer:StreamDataPointer = {
      absx : x,
      absy : y,
      mask : mask
    }
    this.getOutputPort(0).onData(StreamDataPointer.encode(streamDataPointer).finish(), true);
  }

  onMouseChange(e : MouseEvent) {
    const { x, y } = this.snpStreamElement.transformLocalToStream(e.offsetX, e.offsetY);
    this.sendMouseEvent(x, y, e.buttons);
  }

  onMouseWheel(e:MouseWheelEvent) {

    e.stopPropagation();
    e.preventDefault();

    const { x, y } = this.snpStreamElement.transformLocalToStream(e.offsetX, e.offsetY);

    let dX = e.deltaX;
    let dY = e.deltaY;

    // Pixel units unless it's non-zero.
    // Note that if deltamode is line or page won't matter since we aren't
    // sending the mouse wheel delta to the server anyway.
    // The difference between pixel and line can be important however since
    // we have a threshold that can be smaller than the line height.
    if (e.deltaMode !== 0) {
      dX *= WHEEL_LINE_HEIGHT;
      dY *= WHEEL_LINE_HEIGHT;
    }

    // Mouse wheel events are sent in steps over VNC. This means that the VNC
    // protocol can't handle a wheel event with specific distance or speed.
    // Therefor, if we get a lot of small mouse wheel events we combine them.
    this._accumulatedWheelDeltaX += dX;
    this._accumulatedWheelDeltaY += dY;

    // Generate a mouse wheel step event when the accumulated delta
    // for one of the axes is large enough.
    if (Math.abs(this._accumulatedWheelDeltaX) >= WHEEL_STEP) {
      if (this._accumulatedWheelDeltaX < 0) {
        this.sendMouseEvent(x, y,(1 << 5) | e.buttons);
        this.sendMouseEvent(x, y, e.buttons);
      } else if (this._accumulatedWheelDeltaX > 0) {
        this.sendMouseEvent(x, y,(1 << 6) | e.buttons);
        this.sendMouseEvent(x, y, e.buttons);
      }

      this._accumulatedWheelDeltaX = 0;
    }
    if (Math.abs(this._accumulatedWheelDeltaY) >= WHEEL_STEP) {
      if (this._accumulatedWheelDeltaY < 0) {
        this.sendMouseEvent(x, y,(1 << 3) | e.buttons);
        this.sendMouseEvent(x, y, e.buttons);
      } else if (this._accumulatedWheelDeltaY > 0) {
        this.sendMouseEvent(x, y,(1 << 4) | e.buttons);
        this.sendMouseEvent(x, y, e.buttons);
      }

      this._accumulatedWheelDeltaY = 0;
    }
  }
}
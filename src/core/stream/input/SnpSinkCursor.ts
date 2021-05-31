import {SnpComponent, SnpComponentOptions} from "../SnpComponent";
import SnpStreamElement from "../../../ui/SnpStreamElement";
import {SnpPort} from "../SnpPort";
import {StreamDataCursor} from "../../network/proto/snappyv1";

export interface SnpSinkCursorOptions extends SnpComponentOptions {
  snpStreamElement : SnpStreamElement
}

export class SnpSinkCursor extends SnpComponent {

  snpStreamElement : SnpStreamElement

  constructor(options: SnpSinkCursorOptions) {
    super(options);
    this.snpStreamElement = options.snpStreamElement;

    this.addInputPort(new SnpPort({}));
    this.getInputPort(0).onDataCb = this.onInputData.bind(this);
  }

  onInputData(data:Uint8Array, complete?:boolean) {
    const streamDataCursor : StreamDataCursor = StreamDataCursor.decode(data);
    const width = streamDataCursor.width;
    const height = streamDataCursor.height;
    const hotx = streamDataCursor.hotx;
    const hoty = streamDataCursor.hoty;
    const rgba = streamDataCursor.image;
    this.snpStreamElement.setCursor(rgba, width, height, hotx, hoty);
  }
}
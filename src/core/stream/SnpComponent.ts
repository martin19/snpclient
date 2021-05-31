import {SnpPort} from "./SnpPort";

export interface SnpComponentOptions {

}

export class SnpComponent {
  private _enabled:boolean;

  inputPorts:SnpPort[];
  outputPorts:SnpPort[];

  constructor(options:SnpComponentOptions) {
    this._enabled = false;
    this.inputPorts = [];
    this.outputPorts = [];
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(value: boolean) {
    this._enabled = value;
  }

  getInputPort(portNum : number) {
    return this.inputPorts[portNum];
  }

  getOutputPort(portNum : number) {
    return this.outputPorts[portNum];
  }

  addInputPort(port:SnpPort) {
    this.inputPorts.push(port);
  }

  addOutputPort(port:SnpPort) {
    this.outputPorts.push(port);
  }
}
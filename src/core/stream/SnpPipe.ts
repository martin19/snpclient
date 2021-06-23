import {SnpComponent} from "./SnpComponent";

export interface PipeState {
  self : "preinit"|"initialized"|"running",
  peer : "preinit"|"initialized"|"running",
}

export interface SnpPipeOptions {

}

export class SnpPipe {
  private _enabled : boolean;
  components : SnpComponent[];

  state : PipeState;

  constructor(options : SnpPipeOptions) {
    this.components = [];
    this.state = { self : "preinit", peer : "preinit" };
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(value: boolean) {
    this._enabled = value;
  }

  start() {
    this.components.forEach(component => {
      component.enabled = true;
    });
    this._enabled = true;
  }

  stop() {
    this.components.forEach(component => {
      component.enabled = false;
    });
    this._enabled = false;
  }

  addComponent(component : SnpComponent) {
    this.components.push(component);
  }
}
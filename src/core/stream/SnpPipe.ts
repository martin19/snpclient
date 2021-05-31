import {SnpComponent} from "./SnpComponent";

export interface SnpPipeOptions {

}

export class SnpPipe {
  private _enabled : boolean;
  components : SnpComponent[];

  constructor(options : SnpPipeOptions) {
    this.components = [];
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
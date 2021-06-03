import {SnpStreamCanvas} from "./SnpStreamCanvas";

export default class SnpStreamElement extends HTMLElement {

  shadow : ShadowRoot;
  wrapperElement : HTMLDivElement;
  canvasElement : HTMLCanvasElement;
  snpStreamCanvas : SnpStreamCanvas;
  toggleFullsceenEvent : CustomEvent;
  resizeObserver : ResizeObserver;

  streamWidth : number;
  streamHeight : number;
  localWidth : number;
  localHeight : number;

  cursorCanvas : HTMLCanvasElement;

  constructor() {
    super();
    const  template = document.createElement("template") as HTMLTemplateElement;
    template.innerHTML = `
            <style>
                #wrapper {
                    position: relative;
                    display: block;
                    width:100%;
                    height:100%;
                }           
                #overlay, #content {
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                } 
                
                #canvas, #input {
                    position:absolute;
                    top:0;
                    left:0;
                    width : 100%;
                    height : 100%;
                }              
                
                #coordinates {
                    position:absolute;
                    bottom:0;
                    right:0;
                    width:100px;
                    height:30px;
                }
                
                #toggle-fullscreen {
                    position:absolute;
                    top:0;
                    right:0;
                    width:100px;
                    height:30px;
                    background-color:lightblue;
                } 
            </style>
            <div id="wrapper" tabindex="0">                                
                <div id="content">
                    <canvas id="canvas"></canvas>                                                          
                </div>
                <div id="overlay">
                    <div id="coordinates"></div>
                    <div id="toggle-fullscreen">Fullscreen</div>
                </div>                
            </div>`;

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));

    //stream image plane
    this.canvasElement = this.shadow.getElementById("canvas") as HTMLCanvasElement;

    //wrapper element
    this.wrapperElement = this.shadow.getElementById("wrapper") as HTMLDivElement;

    //cursor
    this.cursorCanvas = document.createElement("canvas");
    this.cursorCanvas.width = 0;
    this.cursorCanvas.height = 0;

    this.resizeObserver = new ResizeObserver(entries => {
      for(let entry of entries) {
        if(entry.contentBoxSize) {
          this.localWidth = entry.contentRect.width;
          this.localHeight = entry.contentRect.height;
          this.snpStreamCanvas.resize(entry.contentRect.width, entry.contentRect.height);
        }
      }
    });
    this.resizeObserver.observe(this.canvasElement);

    //events
    this.toggleFullsceenEvent = new CustomEvent("togglefullscreen", {
      bubbles : true,
      cancelable : true,
      composed : true,
    })
  }

  get canvas() {
    return this.canvasElement;
  }

  get fullscreen() {
    return this.hasAttribute('fullscreen');
  }

  set fullscreen(isFullsceen) {
    if (isFullsceen) {
      this.setAttribute('fullscreen', '');
    } else {
      this.removeAttribute('fullscreen');
    }
  }

  addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions) {
    this.wrapperElement.addEventListener(type, listener, options);
  }

  removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions) {
    this.wrapperElement.removeEventListener(type, listener, options);
  }

  connectedCallback() {
    this.shadow.getElementById("wrapper").addEventListener("mousemove", (e:MouseEvent)=>{
      this.shadow.getElementById("coordinates").innerText = e.clientX + "/" + e.clientY;
    });

    this.shadow.getElementById("toggle-fullscreen").addEventListener("click", (e:MouseEvent)=>{
      this.fullscreen = !this.fullscreen;
      this.shadow.dispatchEvent(this.toggleFullsceenEvent);
    });

    this.localWidth = this.canvasElement.clientWidth;
    this.localHeight = this.canvasElement.clientHeight;
  }

  transformLocalToStream(x: number, y: number) {
    return { x : (x / this.localWidth)*this.streamWidth, y : (y / this.localHeight)*this.streamHeight };
  }

  transformStreamToLocal(x: number, y: number) {
    return { x : (x / this.streamWidth)*this.localWidth, y : (y / this.streamHeight)*this.localHeight };
  }

  setCursor(rgba: Uint8Array, width: number, height: number, hotx: number, hoty: number) {
    const canvas = this.cursorCanvas;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    let img = new ImageData(new Uint8ClampedArray(rgba), width, height);
    ctx.clearRect(0, 0, width, height);
    ctx.putImageData(img, 0, 0);
    let url = canvas.toDataURL();
    this.wrapperElement.style.cursor = 'url(' + url + ')' + hotx + ' ' + hoty + ', default';
  }

  static registerCustomElement() {
    customElements.define('snp-stream', SnpStreamElement);
  }


}
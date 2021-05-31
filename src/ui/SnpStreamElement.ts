import {SnpStreamCanvas} from "./SnpStreamCanvas";

export default class SnpStreamElement extends HTMLElement {

  shadow : ShadowRoot;
  canvasElement : HTMLCanvasElement;
  overlayElement : HTMLCanvasElement;
  snpStreamCanvas : SnpStreamCanvas;
  toggleFullsceenEvent : CustomEvent;
  resizeObserver : ResizeObserver;

  streamWidth : number;
  streamHeight : number;
  localWidth : number;
  localHeight : number;

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
                
                #canvas, #canvas-overlay, #input {
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
            <div id="wrapper">                                
                <div id="content">
<!--                    <img style="width:100%;height:100%" src="test.gif"/>                    -->
<!--                    <video style="width:100%;height:100%;object-fit:contain" muted autoplay loop="loop">-->
<!--                        <source src="bunny.mp4" type="video/mp4">                    -->
<!--                        Sorry, your browser doesn't support embedded videos.-->
<!--                    </video>-->
                    <canvas id="canvas"></canvas>
                    <canvas id="canvas-overlay"></canvas>    
                    <div id="input"></div>                
                </div>
                <div id="overlay">
                    <div id="coordinates"></div>
                    <div id="toggle-fullscreen">Fullscreen</div>
                </div>                
            </div>`;

    this.shadow = this.attachShadow({ mode: "closed" });
    this.shadow.appendChild(template.content.cloneNode(true));

    this.canvasElement = this.shadow.getElementById("canvas") as HTMLCanvasElement;

    this.resizeObserver = new ResizeObserver(entries => {
      for(let entry of entries) {
        if(entry.contentBoxSize) {
          this.snpStreamCanvas.resize(entry.contentRect.width, entry.contentRect.height);
        }
      }
    });
    this.resizeObserver.observe(this.canvasElement);

    // this.snpStreamCanvas = new SnpStreamCanvas(this.canvas);

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
    this.shadow.getElementById("input").addEventListener(type, listener, options);
  }

  removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions) {
    this.shadow.getElementById("input").removeEventListener(type, listener, options);
  }

  connectedCallback() {
    this.shadow.getElementById("wrapper").addEventListener("mousemove", (e:MouseEvent)=>{
      this.shadow.getElementById("coordinates").innerText = e.clientX + "/" + e.clientY;
    });

    this.shadow.getElementById("toggle-fullscreen").addEventListener("click", (e:MouseEvent)=>{
      this.fullscreen = !this.fullscreen;
      this.shadow.dispatchEvent(this.toggleFullsceenEvent);
    });
  }

  transformLocalToStream(x: number, y: number) {
    return { x : (x / this.localWidth)*this.streamWidth, y : (y / this.localHeight)*this.streamHeight };
  }

  transformStreamToLocal(x: number, y: number) {
    return { x : (x / this.streamWidth)*this.localWidth, y : (y / this.streamHeight)*this.localHeight };
  }

  static registerCustomElement() {
    customElements.define('snp-stream', SnpStreamElement);
  }

}
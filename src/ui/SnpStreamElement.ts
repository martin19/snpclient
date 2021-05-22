import {SnpStreamCanvas} from "./SnpStreamCanvas";

export default class SnpStreamElement extends HTMLElement {

  shadow : ShadowRoot;
  canvasElement : HTMLCanvasElement;
  snpStreamCanvas : SnpStreamCanvas;
  toggleFullsceenEvent : CustomEvent;
  resizeObserver : ResizeObserver;

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
                #input, #overlay, #content {
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                } 
                
                #canvas {
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

  connectedCallback() {
    this.shadow.getElementById("wrapper").addEventListener("mousemove", (e:MouseEvent)=>{
      this.shadow.getElementById("coordinates").innerText = e.clientX + "/" + e.clientY;
    });

    this.shadow.getElementById("toggle-fullscreen").addEventListener("click", (e:MouseEvent)=>{
      this.fullscreen = !this.fullscreen;
      this.shadow.dispatchEvent(this.toggleFullsceenEvent);
    });
  }

  static registerCustomElement() {
    customElements.define('snp-stream', SnpStreamElement);
  }
}
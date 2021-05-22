import {GridLayouter} from "./GridLayouter";
import SnpStreamElement from "./SnpStreamElement";
import "../../style/style.less";
import {SnpDecoderChain} from "../core/video/SnpDecoderChain";
import {SnpSource} from "../core/video/SnpSource";
import {SnpDecoderH264} from "../core/video/SnpDecoderH264";
import {SnpSinkYuv} from "../core/video/SnpSinkYuv";
import {fetchData} from "../core/util/BufferUtil";

SnpStreamElement.registerCustomElement();

function runApp() {
  const streams = document.getElementsByTagName("snp-stream");
  for(let i = 0; i < streams.length; i++) {
    streams.item(i).addEventListener("togglefullscreen", () => {
      console.log("toggle fullscreen");
      streams.item(i).classList.toggle("fullscreen");
    });
  }

  const layouter = new GridLayouter(document.getElementById("streams"));
  layouter.layout({ cols: [100], rows: [100] });
  document.getElementById("layout-select").addEventListener("change", (e)=>{
    switch((e.target as HTMLSelectElement).value) {
      case "1x1": layouter.layout({ cols: [100], rows: [100] }); break;
      case "2x1": layouter.layout({ cols: [50, 50], rows: [100] }); break;
      case "1x2": layouter.layout({ cols: [100], rows: [50, 50] }); break;
      case "2x2": layouter.layout({ cols: [50,50], rows: [50, 50] }); break;
      case "3x3": layouter.layout({ cols: [100/3,100/3,100/3], rows: [100/3, 100/3, 100/3] }); break;
    }
  });
}

document.addEventListener("DOMContentLoaded", async ()=>{
  runApp();


  let chains:SnpDecoderChain[] = [];
  for(let i = 0; i < 2; i++) {
    const snpStreamElement = document.getElementsByTagName("snp-stream").item(i) as SnpStreamElement;
    const h264DecoderChain = new SnpDecoderChain({
      source : new SnpSource({
        bufferSizeMs : 500,
        maxBitrate : 10000000
      }),
      decoder : new SnpDecoderH264({
        width : 1920,
        height : 800,
      }),
      sink : new SnpSinkYuv({
        width : 1920,
        height : 800,
        snpStreamElement : snpStreamElement
      })
    });
    chains.push(h264DecoderChain);
    h264DecoderChain.start();
  }


  // for(let i = 0; i < 3309; i++) {
  let i = 0;
  async function step() {
    const data = await fetchData("testdata/simpsons/simpsons.264." + (i.toString()).padStart(4, "0"));
    for(let j = 0; j < chains.length; j++) {
      chains[j].source.process(data);
    }
    i++;
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);


  // }
});
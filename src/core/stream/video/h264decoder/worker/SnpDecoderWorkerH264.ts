import {H264Decoder as H264Core} from "../src/index";

const decoder:H264Core = new H264Core();
const decoderPromise = decoder.init();

// Handle incoming messages
self.addEventListener('message', async (event) => {

  const {type, params} = event.data;

  let input = new Uint8Array(params.input).subarray(0, params.inputLen);
  let output = new Uint8Array(params.output);

  await decoderPromise;

  let result = decoder.decode(input);

  if(result === H264Core.PIC_RDY && decoder.pic) {
    //TODO: how to pass (wasm buffer) this buffer to caller thread zerocopy.
    //think its not possible now but will be later (spec in the making for sharing buffer from
    //wasm worker with main thread).
    output.set(decoder.pic);
    (self as any).postMessage({
      type : "onDecode",
      params : {
        input : input,
        output : output,
      }
    });
  } else {
  (self as any).postMessage({
      type: "onDecodeError",
      params: {
        code: "bla"
      }
    });
  }

}, false);
export function readUint32(buffer : Uint8Array, offset : number) {
  return (buffer[0] << 24) |
    (buffer[0] << 16) |
    (buffer[0] << 8) |
    (buffer[0]);
}

export function computeBufferSize(bitrate : number, ms : number) {
  return Math.ceil((bitrate / 1000) * ms);
}

export async function fetchData(path:string) {
  return new Promise<Uint8Array>((resolve, reject)=>{
    var oReq = new XMLHttpRequest();
    oReq.open("GET", path, true);
    oReq.responseType = "arraybuffer";
    oReq.onload = function (oEvent) {
      var arrayBuffer = oReq.response; // Note: not oReq.responseText
      if (arrayBuffer) {
        var buffer = new Uint8Array(arrayBuffer);
        resolve(buffer);
      }
    };
    oReq.send(null);
  });
}
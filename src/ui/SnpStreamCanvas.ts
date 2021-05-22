interface ShaderInfoBlock {
  code : string;
  type : number;
}

type ShaderInfo = ShaderInfoBlock[];

export class SnpStreamCanvas {
  glCanvas: HTMLCanvasElement;
  gl: WebGLRenderingContext;

  shaderProgram : WebGLProgram;

  width : number;
  height : number;

  // Aspect ratio and coordinate system details
  aspectRatio : number;
  currentRotation : number[];
  currentScale : number[];

  // Vertex information
  vertexArray : Float32Array;
  vertexBuffer : WebGLBuffer;
  vertexNumComponents : number;
  vertexCount : number;

  currentAngle : number;
  rotationRate : number;

  // Rendering data shared with the scalers.
  uScalingFactor : WebGLUniformLocation;
  uGlobalColor : WebGLUniformLocation;
  uRotationVector : WebGLUniformLocation;
  aVertexPosition : number;

  // Animation timing
  previousTime : number;
  degreesPerSecond : number;

  static vertexShader: string = `  
          attribute vec2 aVertexPosition;
          uniform vec2 uScalingFactor;
          uniform vec2 uRotationVector;
        
          void main() {
            vec2 rotatedPosition = vec2(
              aVertexPosition.x * uRotationVector.y +
                    aVertexPosition.y * uRotationVector.x,
              aVertexPosition.y * uRotationVector.y -
                    aVertexPosition.x * uRotationVector.x
            );
        
            gl_Position = vec4(rotatedPosition * uScalingFactor, 0.0, 1.0);
      }`;

  static fragmentShader: string = `
      #ifdef GL_ES
        precision highp float;
      #endif

      uniform vec4 uGlobalColor;
    
      void main() {
        gl_FragColor = uGlobalColor;
      }
    `

  constructor(canvas:HTMLCanvasElement) {
    this.glCanvas = canvas;
    this.gl = this.glCanvas.getContext("webgl");

    this.width = this.glCanvas.width;
    this.height = this.glCanvas.height;

    this.currentRotation = [0, 1];
    this.currentScale = [1.0, 1.0];

    this.previousTime = 0.0;
    this.degreesPerSecond = 90.0;

    this.startup();
  }

  startup() {
    const gl = this.gl;
    const shaderSet = [
      {
        code: SnpStreamCanvas.vertexShader,
        type: gl.VERTEX_SHADER
      },
      {
        code: SnpStreamCanvas.fragmentShader,
        type: gl.FRAGMENT_SHADER
      }
    ];

    this.shaderProgram = this.buildShaderProgram(shaderSet);

    this.aspectRatio = this.glCanvas.width / this.glCanvas.height;
    this.currentRotation = [0, 1];
    this.currentScale = [1.0, this.aspectRatio];

    this.vertexArray = new Float32Array([
      -0.5, 0.5, 0.5, 0.5, 0.5, -0.5,
      -0.5, 0.5, 0.5, -0.5, -0.5, -0.5
    ]);

    this.vertexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, this.vertexArray, this.gl.STATIC_DRAW);

    this.vertexNumComponents = 2;
    this.vertexCount = this.vertexArray.length / this.vertexNumComponents;

    this.currentAngle = 0.0;
    this.rotationRate = 6;

    this.animateScene();
  }

  buildShaderProgram(shaderInfo:ShaderInfo) {
    const program = this.gl.createProgram();

    shaderInfo.forEach((desc) => {
      let shader = this.compileShader(desc.code, desc.type);

      if (shader) {
        this.gl.attachShader(program, shader);
      }
    });

    this.gl.linkProgram(program)

    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      console.log("Error linking shader program:");
      console.log(this.gl.getProgramInfoLog(program));
    }

    return program;
  }

  compileShader(code : string, type:number) {
    const gl = this.gl;
    let shader = gl.createShader(type);

    gl.shaderSource(shader, code);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.log(`Error compiling ${type === gl.VERTEX_SHADER ? "vertex" : "fragment"} shader:`);
      console.log(gl.getShaderInfoLog(shader));
    }
    return shader;
  }

  animateScene() {
    const gl = this.gl;

    if(gl.canvas.width !== this.width || gl.canvas.height !== this.height) {
      this.glCanvas.width = this.width;
      this.glCanvas.height = this.height;
    }

    gl.viewport(0, 0, this.width, this.height);
    gl.clearColor(0.8, 0.9, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    let radians = this.currentAngle * Math.PI / 180.0;
    this.currentRotation[0] = Math.sin(radians);
    this.currentRotation[1] = Math.cos(radians);

    gl.useProgram(this.shaderProgram);

    this.uScalingFactor = gl.getUniformLocation(this.shaderProgram, "uScalingFactor");
    this.uGlobalColor = gl.getUniformLocation(this.shaderProgram, "uGlobalColor");
    this.uRotationVector = gl.getUniformLocation(this.shaderProgram, "uRotationVector");

    gl.uniform2fv(this.uScalingFactor, this.currentScale);
    gl.uniform2fv(this.uRotationVector, this.currentRotation);
    gl.uniform4fv(this.uGlobalColor, [0.2, 0.2, 0.8, 1.0]);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);

    this.aVertexPosition = gl.getAttribLocation(this.shaderProgram, "aVertexPosition");

    gl.enableVertexAttribArray(this.aVertexPosition);
    gl.vertexAttribPointer(this.aVertexPosition, this.vertexNumComponents,
      gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, this.vertexCount);

    window.requestAnimationFrame((currentTime) => {
      // let deltaAngle = ((currentTime - this.previousTime) / 1000.0)
      //   * this.degreesPerSecond;
      let deltaAngle = 0;

      this.currentAngle = (this.currentAngle + deltaAngle) % 360;

      this.previousTime = currentTime;
      this.animateScene();
    });
  }

  resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.aspectRatio = this.glCanvas.width / this.glCanvas.height;
  }
}
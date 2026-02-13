const canvas = document.getElementById("glcanvas");
const gl = canvas.getContext("webgl");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
gl.viewport(0, 0, canvas.width, canvas.height);

const video = document.getElementById("video");

// Fullscreen quad vertices
const vertices = new Float32Array([
  -1, -1,
   1, -1,
  -1,  1,
   1,  1,
]);

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);


// Vertex shader
const vsSource = `
  attribute vec2 aPosition;
  varying vec2 vUv;

  void main() {
    vUv = (aPosition + 1.0) * 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

// Fragment shader
const fsSource = `
  precision mediump float;

  uniform sampler2D uVideo;
  varying vec2 vUv;

  void main() {

    // Sample top half
    vec2 topUV = vec2(vUv.x, vUv.y * 0.5);
    vec4 topColor = texture2D(uVideo, topUV);

    // Sample bottom half (mask)
    vec2 maskUV = vec2(vUv.x, 0.5 + vUv.y * 0.5);
    vec4 maskColor = texture2D(uVideo, maskUV);

    // Convert mask to grayscale (brightness)
    float mask = dot(maskColor.rgb, vec3(0.299, 0.587, 0.114));

    // Apply mask as alpha
    gl_FragColor = vec4(topColor.rgb, mask);
  }
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

const program = gl.createProgram();
gl.attachShader(program, vs);
gl.attachShader(program, fs);
gl.linkProgram(program);
gl.useProgram(program);

const position = gl.getAttribLocation(program, "aPosition");
gl.enableVertexAttribArray(position);
gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

// Create texture
const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

function render() {
  if (video.readyState >= 2) {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGB,
      gl.RGB,
      gl.UNSIGNED_BYTE,
      video
    );
  }

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  requestAnimationFrame(render);
}

video.addEventListener("play", () => {
  render();
});
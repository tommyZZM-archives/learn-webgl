#version 100

precision mediump float;

uniform vec4 u_FragColor;

void main(void) {
    gl_FragColor = u_FragColor;//vec4(0.1, 0.73, 0.61, 1.0);
}
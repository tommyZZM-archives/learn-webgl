#version 100

//点计算,坐标变换

attribute vec4 a_Position;

void main(void) {
    gl_Position = a_Position;
    gl_PointSize = 10.0;
}
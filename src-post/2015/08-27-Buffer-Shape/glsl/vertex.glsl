#version 100

//点计算,坐标变换

attribute vec4 a_Position;

uniform vec4 u_Translation;
uniform mat4 u_xformMatrix;

void main(void) {
    gl_Position =  u_xformMatrix * a_Position + u_Translation ;
}
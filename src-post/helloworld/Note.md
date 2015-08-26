
<canvas name="hello"/>

## HelloWorld

### 渲染管线与着色器(Shader).
> WebGL(OpenGL ES 2.0 +)使用"顶点着色器(Vertex Shader)"取代了传统渲染管线中的“变换和光照”；“片元着色器(Fragment Shader)”取代了传统渲染管线中的“纹理环境和颜色求和”、“雾”以及“Alpha测试”。

### Shader到底是什么?
> 以前固定管線時代，頂點的運算是固定不變的，就是坐標變換，比如投影到屏幕上的坐標換算，後來(现代)GPU出現了，頂點的運算就可以編程了，把這些操作頂點的算法叫shader

在传统渲染管线中,每一个基本操作都由相应的方法来进行,而在Shader中,这些操作都统一在Shader程序里进行

#### 顶点着色器(Vertex Shader)

主要负责渲染管线中几何阶段的相关操作,例如：顶点坐标变换,图元装配,三角形处理等

#### 像素着色器(Pixel Shader)

主要负责渲染管线中光栅化阶段的相关操作,例如：像素颜色赋值,消除遮挡面,Alpha混合,后期像素处理.

在WebGL中像素着色器也叫做片元着色器(Fragment Shader)

### Shader的编写与编译

早期的Shader基于的是汇编语言的语法,但是由于汇编语言语法学习成本较高,并不容易表达一些复杂方法,

后来Shader语言通过引入C语言类似的语法发展成为高阶语言,方便开发者进行开发。如HLSL和GLSL都是基于C系的语法的高阶Shader语言。但ActionScript3.0的AGAL却是汇编语言的语法

在WebGL中,Shader程序由字符串定义,在作为参数传进相应编译器,编译成机器码,然后再GPU中运行.

**参考:**
- [OpenGL ES 2.0 Shader相关介绍](http://www.tuicool.com/articles/VZVJra)
- [Shader是什么?](http://blog.csdn.net/huangzeyy/article/details/6748266)
- [【西川善司】GPU和Shader技术的基础知识](http://www.opengpu.org/forum.php?mod=viewthread&tid=7376&highlight=%E8%A5%BF%E5%B7%9D%E5%96%84%E5%8F%B8)

## 着色器程序(Shader Progamme)

GLSL包括**顶点着色器**和**片元着色器**。

>   顶点着色器是一个可编程的处理单元，执行顶点变换、纹理坐标变换、光照、材质等顶点的相关操作，每顶点执行一次。替代了传统渲染管线中顶点变换、光照以及纹理坐标的处理，开发人员可以根据自己的需求自行开发，大大增加了程序的灵活性。

## 数据类型
````nohighlight
float  bool  int    //基本数据类型
vec2                //包含了2个浮点数的向量
vec3                //包含了3个浮点数的向量
vec4                //包含了4个浮点数的向量
ivec2               //包含了2个整数的向量
ivec3               //包含了3个整数的向量
ivec4               //包含了4个整数的向量
bvec2               //包含了2个布尔数的向量
bvec3               //包含了3个布尔数的向量
bvec4               //包含了4个布尔数的向量
mat2                //2*2维矩阵
mat3                //3*3维矩阵
mat4                //4*4维矩阵
sampler1D           //1D纹理采样器
sampler2D           //2D纹理采样器
sampler3D           //3D纹理采样器
````

## 变量初探

- ### attribute变量(属性变量)

> 只能用于顶点着色器中，不能用于片元着色器。 一般用该变量来表示一些顶点数据，如：顶点坐标、纹理坐标、颜色等。

- ### uniform变量(一致变量)

> 用来将数据值从应用程其序传递到顶点着色器或者片元着色器。 该变量有点类似C语言中的常量（const），即该变量的值不能被shader程序修改。一般用该变量表示变换矩阵、光照参数、纹理采样器等。

- ### varying变量(易变变量)

> 是从顶点着色器传递到片元着色器的数据变量。顶点着色器可以使用易变变量来传递需要插值的颜色、法向量、纹理坐标等任意值。 在顶点与片元shader程序间传递数据是很容易的，一般在顶点shader中修改varying变量值，然后片元shader中使用该值，当然，该变量在顶点及片元这两段shader程序中声明必须是一致的 。

- ### 内建变量

````glsl
gl_Position
//表示变换后点的空间位置。 顶点着色器从应用程序中获得原始的顶点位置数据，
//这些原始的顶点数据在顶点着色器中经过平移、旋转、缩放等数学变换后，生成新的顶点位置。
//新的顶点位置通过在顶点着色器中写入gl_Position传递到渲染管线的后继阶段继续处理。

gl_PointSize    //顶点着色器中使用，描述点的大小

gl_FragColor    //用来保存片元着色器计算完成的片元颜色值，此颜色值将送入渲染管线的后继阶段进行处理。
````

## 缓冲区(Buffer)

> 在许多OpenGL操作中，我们都向OpenGL发送一大块数据，例如向它传递需要处理的顶点数组数据。传输这种数据可能非常简单，例如把数据从系统的内存中复制到图形卡。但是，由于OpenGL是按照客户机-服务器模式设计的，在OpenGL需要数据的任何时候，都必须把数据从客户机内存传输到服务器。如果数据并没有修改，或者客户机和服务器位于不同的计算机（分布式渲染），数据的传输可能会比较缓慢，或者是冗余的。
 OpenGL 1.5版本增加了缓冲区对象（buffer object），允许应用程序显式地指定把哪些数据存储在图形服务器中。以提高程序运行效率。



## C/S图形绘制架构
...


## 基本图形

````javascript
gl.drawArrays(shape,first,count)
````
OpenGL图形都是由点作为基本图元构成的，点构成线段，点和线构成面片。

1参数,传入的是绘制图形的类型，WebGL支持以下图形的绘制。
````javascript
gl.POINTS         //点
gl.LINES          //线段
gl.LINE_STRIP     //连接线段
gl.LINE_LOOP      //闭合线段
gl.TRIANGLES      //三角形
gl.TRIANGLE_STRIP //三角形组合(带)
gl.TRIANGLE_FAN   //鳍状三角形组合(扇)
````
> GL_QUADS 以及 GL_POLYGON 已经在WebGL中移除。

<img src="http://ptgmedia.pearsoncmg.com/images/chap2_0321336798/elementLinks/02fig01.gif">

(c)《OpenGL Distilled》Figure 2-1 OpenGL primitive types.

**参考:**
- [Renderbuffer Object](https://www.opengl.org/wiki/Renderbuffer_Object)
- [OpenGL中的缓冲区对象](http://blog.csdn.net/mzyang272/article/details/7655464)
- [OpenGL中的缓冲区](http://blog.csdn.net/Haohan_Meng/article/details/25246519)
## Buffer & Shape

<canvas name="hello"/>


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
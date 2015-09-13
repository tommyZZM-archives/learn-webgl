## 线性代数与矩阵

### 矩阵?
在数学中，矩阵（Matrix）是指纵横排列的二维数据表格，最早来自于方程组的系数及常数所构成的方阵。

> 有时候,一个数a可以理解为1x1矩阵[a];一个矩阵不能看作是数。

> ax = 3;

### 矩阵运算

#### 加减法

矩阵的加减法计算十分简单,把矩阵中每个元素进行±即可,注意的是只有两个同样维数的矩阵才能进行加减操作。

#### 乘法

- **"数"×"矩阵"**:

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015090102.png" alt="" title="插图来自于www.ruanyifeng.com(c)" style="max-width:230px">

- **"矩阵"×"矩阵"**:

矩阵间的相乘就不太一样了,矩阵相乘的规则定义来自矩阵的本质，即矩阵作是一种线性方程组的表示形式。(见参考文献)

<img  src="http://7o51mi.com1.z0.glb.clouddn.com/webgl/20150913/illustration1.PNG" style="max-width:200px">

线性方程组可以通过矩阵表示,分析这样的规则之后可得

<img  src="http://7o51mi.com1.z0.glb.clouddn.com/webgl/20150913/illustration2(1).PNG" style="max-width:260px">

对于更加复杂的方程组结构，也有同样的规则

<img  src="http://7o51mi.com1.z0.glb.clouddn.com/webgl/20150913/illustration3(1).PNG" style="max-width:390px">

每个行元素逐次乘以每个列元素的规则进行运算

也可以发现，矩阵相乘的时候，A的列数必须等于B的行数。

相乘前后矩阵维数的关系。
````
A(m x n) * B(n * 1) = M(m * l)
````

###### 参考
- [理解矩阵乘法](http://www.ruanyifeng.com/blog/2015/09/matrix-multiplication.html)
- [Linear Algebra: What matrices actually are](https://nolaymanleftbehind.wordpress.com/2011/07/10/linear-algebra-what-matrices-actually-are/)
- [[基础知识]理解矩阵zzzzzz](http://www.opengpu.org/forum.php?mod=viewthread&tid=115)
- [KhanAcademy - Linear Algebra](https://www.youtube.com/watch?v=xyAuNHPsq-g&index=1)





## Quaternions

##### 参考

- [Understanding Quaternions](http://www.3dgep.com/understanding-quaternions/)

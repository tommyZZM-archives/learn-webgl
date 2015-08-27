/**
 * Created by tommyZZM on 2015/8/26.
 */

class Sample extends app.SampleField{
    onLaunch(canvas){
        this.canvas = canvas.query[0];
        if(!this.canvas)return;

        this.gl = this.canvas.getContext("webgl");
        this.gl["viewportWidth"] = this.canvas.width;
        this.gl["viewportHeight"] = this.canvas.height;
        this.gl.viewport(0,0,this.canvas.width,this.canvas.height);

        this.loadShaders(this.gl,()=>{
            this.onShadersLoad(this.gl);
        },[
            {
                url:this.srcPath("glsl/vertex.glsl"),//
                name:"vertex",
                type:this.CONSTANTS.V
            },{
                url:this.srcPath("glsl/fragment.glsl"),
                name:"fragment",
                type:this.CONSTANTS.F
            }
        ]);
    }

    onShadersLoad(gl){
        this.progamme = this.initShader(gl);
        //缓冲区
        this.vertices = this.initVertexBuffers(gl);

        this.rotation = 0;
        app.AnimationManager.onLoop(()=>{
            this.render(gl);
        });
        app.AnimationManager.run();
    }

    initShader(gl){
        var vertexShader = this.shadersDict["vertex"];
        var fragmentShader = this.shadersDict["fragment"];

        var shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader); //引入顶点着色器
        gl.attachShader(shaderProgram, fragmentShader);//引入片元着色器
        gl.linkProgram(shaderProgram);//初始化Shader程序
        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            error("Could not initialise shaders");
        }
        gl.useProgram(shaderProgram);

        gl.enable(gl.DEPTH_TEST);
        return shaderProgram;
    }

    initVertexBuffers(gl){
        //顶点数据
        var vertices = new Float32Array([
            0.0, 0.5,   -0.3, -0.3,   0.3, -0.3
        ]);

        //创建缓冲区
        var vertexBuffer = gl.createBuffer();
        if (!vertexBuffer) {
            console.log('Failed to create the buffer object');
            return -1;
        }

        // 绑定缓冲区 (缓冲区目标,缓冲区对象)
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        // 像缓冲区写入顶点数据
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        var a_Position = gl.getAttribLocation(this.progamme, 'a_Position');
        if (a_Position < 0) {
            console.log('Failed to get the storage location of a_Position');
            return -1;
        }
        // 将缓冲区数据分配到顶点着色器
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

        // 开启传入的缓冲区数据的attribute变量
        gl.enableVertexAttribArray(a_Position);

        return vertices;
    }

    render(gl){
        var u_FragColor = gl.getUniformLocation(this.progamme,"u_FragColor");
        if(u_FragColor){//rgb(241, 196, 15)
            gl.uniform4f(u_FragColor,241/255, 196/255, 15/255, 1.0);
        }

        gl.clearColor(0.0, 0.0, 0.0, 1.0);

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        this.rotation++;
        var radian = this.rotation*this.CONSTANTS.DEG_TO_RAD;
        var cosB = Math.cos(radian);
        var sinB = Math.sin(radian);

        var xformMatrix = new Float32Array([
            cosB , sinB , 0 , 0,
            -sinB, cosB , 0 , 0,
            0 , 0 , 1 , 0,
            0 , 0 , 0 , 1
        ]);

        var u_xformMatrix = gl.getUniformLocation(this.progamme,"u_xformMatrix");
        if (!u_xformMatrix) {
            error('Failed to get the storage location of u_xformMatrix');
            return;
        }
        gl.uniformMatrix4fv(u_xformMatrix,false,xformMatrix);

        var u_Translation = gl.getUniformLocation(this.progamme,"u_Translation");
        if(!u_Translation){
            error('Failed to get the storage location of u_Translate');
            return;
        }

        gl.uniform4f(u_Translation,0.0,0.0,-0.6,1.0);

        //模式，起始索引值，绘制数量
        gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length/2);
    }
}

module.exports = Sample;
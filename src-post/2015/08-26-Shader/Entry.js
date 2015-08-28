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
            this._points = [];
            this.onShadersLoad(this.gl);
            this.onTouchHandeler = this.onTouch.bind(this);

            this.canvas.addEventListener("click",this.onTouchHandeler);
            this.once("destruct",()=>{this.canvas.removeEventListener("click",this.onTouchHandeler||(()=>{}))})

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

    onTouch(e){
        var rect = e.target.getBoundingClientRect();

        var x = e.clientX; // x coordinate of a mouse pointer
        var y = e.clientY;

        var cw = rect.width;
        var ch = rect.height;

        x = ((e.clientX - rect.left) - cw/2)/(cw/2);
        y = (ch/2 - (e.clientY - rect.top))/(ch/2);

        this._points.push({x:x, y:y});
        //console.log(this._points,x,y,e.clientX,e.clientY,rect)
    }

    onShadersLoad(gl){
        this.progamme = this.initShader(gl);
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

        gl.detachShader(shaderProgram, vertexShader);
        gl.detachShader(shaderProgram, fragmentShader);

        gl.enable(gl.DEPTH_TEST);
        return shaderProgram;
    }

    render(gl){
        //console.log("render")
        var a_Position = gl.getAttribLocation(this.progamme,"a_Position");

        var u_FragColor = gl.getUniformLocation(this.progamme,"u_FragColor");
        if(u_FragColor){
            gl.uniform4f(u_FragColor,0.1, 0.73, 0.61, 1.0);
        }

        gl.clearColor(0.0, 0.0, 0.0, 1.0);

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        //gl.drawArrays(gl.POINTS,0,1);
        var length = this._points.length;
        for(var i = 0; i < length; i ++) {
            // Pass the position of a point to a_Position variable
            gl.vertexAttrib3f(a_Position, this._points[i].x, this._points[i].y, 0.0);

            // Draw
            gl.drawArrays(gl.POINTS, 0, 1);
        }
    }
}

module.exports = Sample;
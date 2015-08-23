/**
 * Created by tommyZZM on 2015/8/23.
 */
declare module app{
    export class SampleField{
        launch(canvas);
        destruct();
        onDestruct();
        srcPath(url):string;
        distPath(url):string;
        shadersDict:any;
        loadShaders(gl:WebGLRenderingContext,cb:Function,loadobj:{url:string;type:string;name:string}[]);
        CONSTANTS:any;
    }

    export class AnimationManager{
        static run();
        static stop(force:boolean = true);
        static onLoop(fn:Function);
    }
}

interface ICommonmarkRenderer{
    tag(node, name, attrs, children)
    isGrandParentOfList(node)
    addChild(node, child)
    createElement(tagName, props, children)

    sourcePos:any;
    softBreak:boolean;
    escapeHtml:boolean;
    skipHtml:boolean;
    render(block);
}
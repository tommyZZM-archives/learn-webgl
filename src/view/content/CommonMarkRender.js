/**
 * Created by tommyZZM on 2015/8/24.
 */
import React from 'react';
import * as Commonmark from 'commonmark';

var rex = {
    htmlSingleTag:(/^<(\w+)\s*(.*)\/?>(?:<\/\1>|)$/),
    html:/<|&#?\w+;/,
    htmlProps:/(\w+)=([^>]+)/i
};

var domIdentity;
if(typeof document!=="undefined"){
    domIdentity = document.createElement("div");
}else{
    console.error("document undefined!");
}

var markPraser = new Commonmark.Parser();

class Renderer implements ICommonmarkRenderer{
    constructor(options){
        var opts = options || {};
        this.sourcePos=opts.sourcePos;
        this.softBreak = opts.softBreak || '\n';
        this.escapeHtml = !!opts.escapeHtml;
        this.skipHtml = !!opts.skipHtml;

        this.howRenderHtml = {};


    }

    renderHtml(tagName,fn){
        if(typeof fn!=="function")return;
        this.howRenderHtml[tagName]=fn
    }

    render(source){
        var block = markPraser.parse(source || '');

        var self = MarkdownNodeElement;

        var walker = block.walker();
        var sourcePos = this.sourcePos;
        var escapeHtml = this.escapeHtml;
        var skipHtml = this.skipHtml;
        var infoWords;
        var softBreak = (
            this.softBreak === 'br' ?
                React.createElement('br') :
                this.softBreak
        );

        var e, node, entering, leaving, attrs, doc;
        while ((e = walker.next())) {
            entering = e.entering;
            leaving = !entering;
            node = e.node;
            attrs = {};

            if (!doc) {
                doc = node;
                node.react = { children: [] };
            }

            if (sourcePos && node.sourcepos) {
                var pos = node.sourcepos;
                attrs['data-sourcepos'] = [
                    pos[0][0], ':', pos[0][1], '-',
                    pos[1][0], ':', pos[1][1]
                ].map(String).join('');
            }

            if (node.type === 'Paragraph' && self.isGrandParentOfList(node)) {
                continue;
            }

            if (leaving) {
                if (node.type === 'Image') {
                    node.react.props.alt = node.react.children[0];
                    node.react.children = [];
                }

                if (node !== doc) {
                    self.addChild(node, self.createElement(
                        node.react.tag,
                        node.react.props,
                        node.react.children
                    ));
                }

                continue;
            }

            // Entering a new node
            switch (node.type) {
                case 'Html':
                case 'HtmlBlock':
                    if (escapeHtml) {
                        self.addChild(node, node.literal);
                    } else if (!skipHtml) {

                        var htmlprase = rex.htmlSingleTag.exec(node.literal);
                        if(Array.isArray(htmlprase)&&htmlprase[1]){

                            var htmltag = htmlprase[1];
                            var htmlele;

                            domIdentity.innerHTML = node.literal;
                            var htmlattributes = domIdentity.childNodes[0].attributes;
                            for(var i=0;i<htmlattributes.length;i++){
                                var a = htmlattributes[i];
                                var name = a.name;
                                if(name){
                                    if(name.toLowerCase()==="classname"){name="className"}
                                    attrs[name] = a.nodeValue.length>0?a.nodeValue:true;
                                }
                            }

                            if(typeof this.howRenderHtml[htmltag]==="function"){
                                htmlele = this.howRenderHtml[htmltag](htmltag,attrs);
                            }else{
                                if(attrs["style"]){
                                    attrs["style"] = {};
                                    var i =0;
                                    var style = domIdentity.childNodes[0].style[i];
                                    while(style){
                                        attrs["style"][style] = domIdentity.childNodes[0].style[style];
                                        i++;
                                        style = domIdentity.childNodes[0].style[i];
                                    }
                                };
                                //domIdentity.childNodes[0].style = attrs["style"];
                                console.log(attrs)

                                htmlele = self.createElement(
                                    "p",
                                    null,
                                    [self.createElement(
                                        htmltag,
                                        attrs
                                    )]
                                );
                            }

                            if(htmlele.__proto__ && htmlele.__proto__._isReactElement){
                                self.addChild(node, htmlele);
                            }else{
                                self.addChild(node, <p className="text-danger">...{htmlprase[0]} prase fail...</p>);
                            }
                        }
                    }
                    break;
                case 'Text':
                    self.addChild(node, node.literal);
                    break;
                case 'Paragraph':
                    self.tag(node, 'p', attrs);
                    break;
                case 'Header':
                    self.tag(node, 'h' + node.level, attrs);
                    break;
                case 'Softbreak':
                    self.addChild(node, softBreak);
                    break;
                case 'Strong':
                    self.tag(node, 'strong', attrs);
                    break;
                case 'Link':
                    attrs.href = node.destination;
                    attrs.target = "_blank";
                    if (node.title) {
                        attrs.title = node.title;
                    }
                    self.tag(node, 'a', attrs);
                    break;
                case 'Image':
                    attrs.src = node.destination;
                    if (node.title) {
                        attrs.title = node.title;
                    }
                    self.tag(node, 'img', attrs);
                    break;
                case 'Emph':
                    self.tag(node, 'em', attrs);
                    break;
                case 'Code':
                    self.addChild(node, self.createElement(
                        'code',
                        attrs,
                        [node.literal]
                    ));
                    break;
                case 'CodeBlock':
                    infoWords = node.info ? node.info.split(/ +/) : [];

                    //TODO:highlight

                    var codeWrapper = document.createElement("pre");
                    var code = document.createElement("code");
                    code.setAttribute("class",infoWords[0]||"");
                    codeWrapper.appendChild(code);

                    if(typeof hljs!=="undefined"){
                        //console.log(hljs.highlightAuto(node.literal,[infoWords[0]]))
                        code.innerHTML = hljs.highlightAuto(node.literal,[infoWords[0]]).value
                    }

                    //var code = self.createElement('code', attrs, [node.literal]);
                    self.addChild(node, self.createElement('pre', {dangerouslySetInnerHTML:{__html:codeWrapper.innerHTML}}));
                    break;
                case 'BlockQuote':
                    self.tag(node, 'blockquote', attrs);
                    break;
                case 'List':
                    var start = node.listStart;
                    if (start !== null && start !== 1) {
                        attrs.start = start.toString();
                    }
                    self.tag(node, node.listType === 'Bullet' ? 'ul' : 'ol', attrs);
                    break;
                case 'Item':
                    self.tag(node, 'li', attrs);
                    break;
                case 'HorizontalRule':
                    self.addChild(node, self.createElement('hr', attrs));
                    break;
                case 'Document':
                    break;
                default:
                    throw new Error('Unknown node type "' + node.type + '"');
            }
        }

        return doc.react.children;
    }
}

class MarkdownNodeElement{
    static tag(node, name, attrs, children){
        node.react = {
            tag: name,
            props: attrs,
            children: children || []
        };
    }

    static isGrandParentOfList(node){
        if(!node||!node.parent){return false}
        var grandparent = node.parent.parent;
        return (
            grandparent &&
            grandparent.type === 'List' &&
            grandparent.listTight
        );
    }

    static addChild(node, child){
        var parent = node;
        do {
            parent = parent.parent;
        } while (!parent.react);

        parent.react.children.push(child);
    }

    /**
     *
     * @param tagName
     * @param props
     * @param children
     * @returns {DOMElement<Array<any>|any[]>|ClassicElement<Array<any>|any[]>|ReactElement<Array<any>|any[]>}
     */
    static createElement(tagName, props, children){
        var args = [tagName, props].concat(children);
        var child = React.createElement.apply(React, args);
        return child;
    }
}

export default Renderer;
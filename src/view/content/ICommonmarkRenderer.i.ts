/**
 * Created by tommyZZM on 2015/8/23.
 */
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
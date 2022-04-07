/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
import{html}from"lit";import{renderNodes}from"@typo3/core/lit-helper.js";import*as d3drag from"d3-drag";import*as d3selection from"d3-selection";class DraggableTemplate{static get(e,t){return html`<div class="node-dd node-dd--nodrop">
        <div class="node-dd__ctrl-icon"></div>
        <div class="node-dd__text">
            <span class="node-dd__icon">
                <svg aria-hidden="true" style="width: 16px; height: 16px">
                    <use xlink:ref="${e}"></use>
                </svg>
            </span>
            <span class="node-dd__name">${t}</span>
        </div>
    </div>`}}export var DraggablePositionEnum;!function(e){e.INSIDE="inside",e.BEFORE="before",e.AFTER="after"}(DraggablePositionEnum||(DraggablePositionEnum={}));export class DragDrop{constructor(e){this.timeout={},this.minimalDistance=10,this.tree=e}static setDragStart(){document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="none")}static setDragEnd(){document.querySelectorAll("iframe").forEach(e=>e.style.pointerEvents="")}connectDragHandler(e){return d3drag.drag().clickDistance(5).on("start",(function(t){e.dragStart(t)&&DragDrop.setDragStart()})).on("drag",(function(t){e.dragDragged(t)})).on("end",(function(t){DragDrop.setDragEnd(),e.dragEnd(t)}))}createDraggable(e,t){let s=this.tree.svg.node();const o=renderNodes(DraggableTemplate.get(e,t));s.after(...o),this.tree.svg.node().querySelector(".nodes-wrapper")?.classList.add("nodes-wrapper--dragging")}updateDraggablePosition(e){let t=18,s=15;e.sourceEvent&&e.sourceEvent.pageX&&(t+=e.sourceEvent.pageX),e.sourceEvent&&e.sourceEvent.pageY&&(s+=e.sourceEvent.pageY),document.querySelectorAll(".node-dd").forEach(e=>{e.style.top=s+"px",e.style.left=t+"px",e.style.display="block"})}openNodeTimeout(){null!==this.tree.hoveredNode&&this.tree.hoveredNode.hasChildren&&!this.tree.hoveredNode.expanded?this.timeout.node!=this.tree.hoveredNode&&(this.timeout.node=this.tree.hoveredNode,clearTimeout(this.timeout.time),this.timeout.time=setTimeout(()=>{this.tree.hoveredNode&&(this.tree.showChildren(this.tree.hoveredNode),this.tree.prepareDataForVisibleNodes(),this.tree.updateVisibleNodes())},1e3)):clearTimeout(this.timeout.time)}changeNodeClasses(e){const t=this.tree.svg.select(".node-over"),s=this.tree.svg.node().parentNode.querySelector(".node-dd");let o=this.tree.nodesBgContainer.selectAll(".node-bg__border");if(t.size()&&this.tree.isOverSvg){o.empty()&&(o=this.tree.nodesBgContainer.append("rect").attr("class","node-bg__border").attr("height","1px").attr("width","100%"));let r=d3selection.pointer(e,t.node())[1];if(r<3){o.attr("transform","translate("+this.tree.settings.indentWidth/2*-1+", "+(this.tree.hoveredNode.y-this.tree.settings.nodeHeight/2)+")").style("display","block"),0===this.tree.hoveredNode.depth?this.addNodeDdClass(s,"nodrop"):this.tree.hoveredNode.firstChild?this.addNodeDdClass(s,"ok-above"):this.addNodeDdClass(s,"ok-between"),this.tree.settings.nodeDragPosition=DraggablePositionEnum.BEFORE}else if(r>17)if(o.style("display","none"),this.tree.hoveredNode.expanded&&this.tree.hoveredNode.hasChildren)this.addNodeDdClass(s,"ok-append"),this.tree.settings.nodeDragPosition=DraggablePositionEnum.INSIDE;else{o.attr("transform","translate("+this.tree.settings.indentWidth/2*-1+", "+(this.tree.hoveredNode.y+this.tree.settings.nodeHeight/2)+")").style("display","block"),this.tree.hoveredNode.lastChild?this.addNodeDdClass(s,"ok-below"):this.addNodeDdClass(s,"ok-between"),this.tree.settings.nodeDragPosition=DraggablePositionEnum.AFTER}else o.style("display","none"),this.addNodeDdClass(s,"ok-append"),this.tree.settings.nodeDragPosition=DraggablePositionEnum.INSIDE}else this.tree.nodesBgContainer.selectAll(".node-bg__border").style("display","none"),this.addNodeDdClass(s,"nodrop")}addNodeDdClass(e,t){const s=this.tree.svg.node().querySelector(".nodes-wrapper");e&&this.applyNodeClassNames(e,"node-dd--",t),s&&this.applyNodeClassNames(s,"nodes-wrapper--",t),this.tree.settings.canNodeDrag="nodrop"!==t}removeNodeDdClass(){const e=this.tree.svg.node().querySelector(".nodes-wrapper");["nodes-wrapper--nodrop","nodes-wrapper--ok-append","nodes-wrapper--ok-below","nodes-wrapper--ok-between","nodes-wrapper--ok-above","nodes-wrapper--dragging"].forEach(t=>e.classList.remove(t)),this.tree.nodesBgContainer.node().querySelector(".node-bg.node-bg--dragging")?.classList.remove("node-bg--dragging"),this.tree.nodesBgContainer.selectAll(".node-bg__border").style("display","none"),this.tree.svg.node().parentNode.querySelector(".node-dd").remove()}isDragNodeDistanceMore(e,t){return t.startDrag||t.startPageX-this.minimalDistance>e.sourceEvent.pageX||t.startPageX+this.minimalDistance<e.sourceEvent.pageX||t.startPageY-this.minimalDistance>e.sourceEvent.pageY||t.startPageY+this.minimalDistance<e.sourceEvent.pageY}applyNodeClassNames(e,t,s){["nodrop","ok-append","ok-below","ok-between","ok-above"].forEach(s=>e.classList.remove(t+s)),e.classList.add(t+s)}}
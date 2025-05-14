import{B as T,bp as V,a5 as z,L as h,v as w,az as j,K as P,m as l,aF as J,P as ue,q as M,R as Q,r as $,a9 as Z,o as m,b as d,F as x,e as E,h as p,k as B,c as y,g as k,X as I,W as C,V as D,j as g,w as S,aH as le,Y as me,ar as X,bq as ne,M as F,t as L,Z as H,J as ce,a6 as G,br as de,aN as pe,aM as fe,aa as Y,av as be,bk as he,aJ as _e,z as ie,l as A,U as O,b2 as je,bs as Ge,ac as Ue,s as qe,ad as We,n as Je}from"./index-9PW8RyKV.js";import{s as Qe}from"./index-6S19_ocb.js";import{s as Ze,a as Xe,b as Ye}from"./index-CfXB7hIK.js";var et=({dt:e})=>`
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: ${e("panelmenu.gap")};
}

.p-panelmenu-panel {
    background: ${e("panelmenu.panel.background")};
    border-width: ${e("panelmenu.panel.border.width")};
    border-style: solid;
    border-color: ${e("panelmenu.panel.border.color")};
    color: ${e("panelmenu.panel.color")};
    border-radius: ${e("panelmenu.panel.border.radius")};
    padding: ${e("panelmenu.panel.padding")};
}

.p-panelmenu-panel:first-child {
    border-width: ${e("panelmenu.panel.first.border.width")};
    border-start-start-radius: ${e("panelmenu.panel.first.top.border.radius")};
    border-start-end-radius: ${e("panelmenu.panel.first.top.border.radius")};
}

.p-panelmenu-panel:last-child {
    border-width: ${e("panelmenu.panel.last.border.width")};
    border-end-start-radius: ${e("panelmenu.panel.last.bottom.border.radius")};
    border-end-end-radius: ${e("panelmenu.panel.last.bottom.border.radius")};
}

.p-panelmenu-header {
    outline: 0 none;
}

.p-panelmenu-header-content {
    border-radius: ${e("panelmenu.item.border.radius")};
    transition: background ${e("panelmenu.transition.duration")}, color ${e("panelmenu.transition.duration")}, outline-color ${e("panelmenu.transition.duration")}, box-shadow ${e("panelmenu.transition.duration")};
    outline-color: transparent;
    color: ${e("panelmenu.item.color")};
}

.p-panelmenu-header-link {
    display: flex;
    gap: ${e("panelmenu.item.gap")};
    padding: ${e("panelmenu.item.padding")};
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: inherit;
}

.p-panelmenu-header-icon,
.p-panelmenu-item-icon {
    color: ${e("panelmenu.item.icon.color")};
}

.p-panelmenu-submenu-icon {
    color: ${e("panelmenu.submenu.icon.color")};
}

.p-panelmenu-submenu-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: ${e("panelmenu.item.focus.background")};
    color: ${e("panelmenu.item.focus.color")};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
    color: ${e("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
    color: ${e("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: ${e("panelmenu.item.focus.background")};
    color: ${e("panelmenu.item.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
    color: ${e("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
    color: ${e("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-submenu {
    margin: 0;
    padding: 0 0 0 ${e("panelmenu.submenu.indent")};
    outline: 0;
    list-style: none;
}

.p-panelmenu-submenu:dir(rtl) {
    padding: 0 ${e("panelmenu.submenu.indent")} 0 0;
}

.p-panelmenu-item-link {
    display: flex;
    gap: ${e("panelmenu.item.gap")};
    padding: ${e("panelmenu.item.padding")};
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
}

.p-panelmenu-item-label {
    line-height: 1;
}

.p-panelmenu-item-content {
    border-radius: ${e("panelmenu.item.border.radius")};
    transition: background ${e("panelmenu.transition.duration")}, color ${e("panelmenu.transition.duration")}, outline-color ${e("panelmenu.transition.duration")}, box-shadow ${e("panelmenu.transition.duration")};
    color: ${e("panelmenu.item.color")};
    outline-color: transparent;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content {
    background: ${e("panelmenu.item.focus.background")};
    color: ${e("panelmenu.item.focus.color")};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
    color: ${e("panelmenu.item.focus.color")};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
    color: ${e("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
    background: ${e("panelmenu.item.focus.background")};
    color: ${e("panelmenu.item.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
    color: ${e("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
    color: ${e("panelmenu.submenu.icon.focus.color")};
}
`,tt={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:function(t){var n=t.instance,a=t.item;return["p-panelmenu-header",{"p-panelmenu-header-active":n.isItemActive(a)&&!!a.items,"p-disabled":n.isItemDisabled(a)}]},headerContent:"p-panelmenu-header-content",headerLink:"p-panelmenu-header-link",headerIcon:"p-panelmenu-header-icon",headerLabel:"p-panelmenu-header-label",contentContainer:"p-panelmenu-content-container",content:"p-panelmenu-content",rootList:"p-panelmenu-root-list",item:function(t){var n=t.instance,a=t.processedItem;return["p-panelmenu-item",{"p-focus":n.isItemFocused(a),"p-disabled":n.isItemDisabled(a)}]},itemContent:"p-panelmenu-item-content",itemLink:"p-panelmenu-item-link",itemIcon:"p-panelmenu-item-icon",itemLabel:"p-panelmenu-item-label",submenuIcon:"p-panelmenu-submenu-icon",submenu:"p-panelmenu-submenu",separator:"p-menuitem-separator"},nt=T.extend({name:"panelmenu",style:et,classes:tt}),it={name:"BasePanelMenu",extends:M,props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},multiple:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},style:nt,provide:function(){return{$pcPanelMenu:this,$parentInstance:this}}},Ie={name:"PanelMenuSub",hostName:"PanelMenu",extends:M,emits:["item-toggle","item-mousemove"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:-1}},methods:{getItemId:function(t){return"".concat(this.panelId,"_").concat(t.key)},getItemKey:function(t){return this.getItemId(t)},getItemProp:function(t,n,a){return t&&t.item?V(t.item[n],a):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},getPTOptions:function(t,n,a){return this.ptm(t,{context:{item:n.item,index:a,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n)}})},isItemActive:function(t){return this.activeItemPath.some(function(n){return n.key===t.key})},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemFocused:function(t){return this.focusedItemId===this.getItemId(t)},isItemGroup:function(t){return h(t.items)},onItemClick:function(t,n){this.getItemProp(n,"command",{originalEvent:t,item:n.item}),this.$emit("item-toggle",{processedItem:n,expanded:!this.isItemActive(n)})},onItemToggle:function(t){this.$emit("item-toggle",t)},onItemMouseMove:function(t,n){this.$emit("item-mousemove",{originalEvent:t,processedItem:n})},getAriaSetSize:function(){var t=this;return this.items.filter(function(n){return t.isItemVisible(n)&&!t.getItemProp(n,"separator")}).length},getAriaPosInset:function(t){var n=this;return t-this.items.slice(0,t).filter(function(a){return n.isItemVisible(a)&&n.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(t,n){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",t,n)),icon:l({class:[this.cx("itemIcon"),this.getItemProp(t,"icon")]},this.getPTOptions("itemIcon",t,n)),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",t,n)),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",t,n))}}},components:{ChevronRightIcon:J,ChevronDownIcon:ue},directives:{ripple:Q}},at=["tabindex"],rt=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-focused","data-p-disabled"],st=["onClick","onMousemove"],ot=["href","target"];function ut(e,t,n,a,s,i){var u=$("PanelMenuSub",!0),o=Z("ripple");return m(),d("ul",{class:C(e.cx("submenu")),tabindex:n.tabindex},[(m(!0),d(x,null,E(n.items,function(r,c){return m(),d(x,{key:i.getItemKey(r)},[i.isItemVisible(r)&&!i.getItemProp(r,"separator")?(m(),d("li",l({key:0,id:i.getItemId(r),class:[e.cx("item",{processedItem:r}),i.getItemProp(r,"class")],style:i.getItemProp(r,"style"),role:"treeitem","aria-label":i.getItemLabel(r),"aria-expanded":i.isItemGroup(r)?i.isItemActive(r):void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(c),ref_for:!0},i.getPTOptions("item",r,c),{"data-p-focused":i.isItemFocused(r),"data-p-disabled":i.isItemDisabled(r)}),[p("div",l({class:e.cx("itemContent"),onClick:function(v){return i.onItemClick(v,r)},onMousemove:function(v){return i.onItemMouseMove(v,r)},ref_for:!0},i.getPTOptions("itemContent",r,c)),[n.templates.item?(m(),y(k(n.templates.item),{key:1,item:r.item,root:!1,active:i.isItemActive(r),hasSubmenu:i.isItemGroup(r),label:i.getItemLabel(r),props:i.getMenuItemProps(r,c)},null,8,["item","active","hasSubmenu","label","props"])):B((m(),d("a",l({key:0,href:i.getItemProp(r,"url"),class:e.cx("itemLink"),target:i.getItemProp(r,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions("itemLink",r,c)),[i.isItemGroup(r)?(m(),d(x,{key:0},[n.templates.submenuicon?(m(),y(k(n.templates.submenuicon),l({key:0,class:e.cx("submenuIcon"),active:i.isItemActive(r),ref_for:!0},i.getPTOptions("submenuIcon",r,c)),null,16,["class","active"])):(m(),y(k(i.isItemActive(r)?"ChevronDownIcon":"ChevronRightIcon"),l({key:1,class:e.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuIcon",r,c)),null,16,["class"]))],64)):I("",!0),n.templates.itemicon?(m(),y(k(n.templates.itemicon),{key:1,item:r.item,class:C(e.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(r,"icon")?(m(),d("span",l({key:2,class:[e.cx("itemIcon"),i.getItemProp(r,"icon")],ref_for:!0},i.getPTOptions("itemIcon",r,c)),null,16)):I("",!0),p("span",l({class:e.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",r,c)),D(i.getItemLabel(r)),17)],16,ot)),[[o]])],16,st),g(me,l({name:"p-toggleable-content",ref_for:!0},e.ptm("transition")),{default:S(function(){return[B(p("div",l({class:e.cx("contentContainer"),ref_for:!0},e.ptm("contentContainer")),[i.isItemVisible(r)&&i.isItemGroup(r)?(m(),y(u,l({key:0,id:i.getItemId(r)+"_list",role:"group",panelId:n.panelId,focusedItemId:n.focusedItemId,items:r.items,level:n.level+1,templates:n.templates,activeItemPath:n.activeItemPath,onItemToggle:i.onItemToggle,onItemMousemove:t[0]||(t[0]=function(f){return e.$emit("item-mousemove",f)}),pt:e.pt,unstyled:e.unstyled,ref_for:!0},e.ptm("submenu")),null,16,["id","panelId","focusedItemId","items","level","templates","activeItemPath","onItemToggle","pt","unstyled"])):I("",!0)],16),[[le,i.isItemActive(r)]])]}),_:2},1040)],16,rt)):I("",!0),i.isItemVisible(r)&&i.getItemProp(r,"separator")?(m(),d("li",l({key:1,style:i.getItemProp(r,"style"),class:[e.cx("separator"),i.getItemProp(r,"class")],role:"separator",ref_for:!0},e.ptm("separator")),null,16)):I("",!0)],64)}),128))],10,at)}Ie.render=ut;function lt(e,t){return pt(e)||dt(e,t)||ct(e,t)||mt()}function mt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ct(e,t){if(e){if(typeof e=="string")return ae(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}function ae(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function dt(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,s,i,u,o=[],r=!0,c=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(r=(a=i.call(n)).done)&&(o.push(a.value),o.length!==t);r=!0);}catch(f){c=!0,s=f}finally{try{if(!r&&n.return!=null&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw s}}return o}}function pt(e){if(Array.isArray(e))return e}var ge={name:"PanelMenuList",hostName:"PanelMenu",extends:M,emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null}},searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys:function(t){this.autoUpdateActiveItemPath(t)}},mounted:function(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp:function(t,n){return t&&t.item?V(t.item[n]):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemActive:function(t){return this.activeItemPath.some(function(n){return n.key===t.parentKey})},isItemGroup:function(t){return h(t.items)},onFocus:function(t){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(t,t.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur:function(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown:function(t){var n=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&X(t.key)&&this.searchItems(t,t.key);break}},onArrowDownKey:function(t){var n=h(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:t,processedItem:n,focusOnNext:!0}),t.preventDefault()},onArrowUpKey:function(t){var n=h(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:t,processedItem:n,selfCheck:!0}),t.preventDefault()},onArrowLeftKey:function(t){var n=this;if(h(this.focusedItem)){var a=this.activeItemPath.some(function(s){return s.key===n.focusedItem.key});a?this.activeItemPath=this.activeItemPath.filter(function(s){return s.key!==n.focusedItem.key}):this.focusedItem=h(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,t.preventDefault()}},onArrowRightKey:function(t){var n=this;if(h(this.focusedItem)){var a=this.isItemGroup(this.focusedItem);if(a){var s=this.activeItemPath.some(function(i){return i.key===n.focusedItem.key});s?this.onArrowDownKey(t):(this.activeItemPath=this.activeItemPath.filter(function(i){return i.parentKey!==n.focusedItem.parentKey}),this.activeItemPath.push(this.focusedItem))}t.preventDefault()}},onHomeKey:function(t){this.changeFocusedItem({originalEvent:t,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),t.preventDefault()},onEndKey:function(t){this.changeFocusedItem({originalEvent:t,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),t.preventDefault()},onEnterKey:function(t){if(h(this.focusedItem)){var n=P(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=n&&(P(n,'[data-pc-section="itemlink"]')||P(n,"a,button"));a?a.click():n&&n.click()}t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},onItemToggle:function(t){var n=t.processedItem,a=t.expanded;this.expandedKeys?this.$emit("item-toggle",{item:n.item,expanded:a}):(this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==n.parentKey}),a&&this.activeItemPath.push(n)),this.focusedItem=n,w(this.$el)},onItemMouseMove:function(t){this.focused&&(this.focusedItem=t.processedItem)},isElementInPanel:function(t,n){var a=t.currentTarget.closest('[data-pc-section="panel"]');return a&&a.contains(n)},isItemMatched:function(t){var n;return this.isValidItem(t)&&((n=this.getItemLabel(t))===null||n===void 0?void 0:n.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isVisibleItem:function(t){return!!t&&(t.level===0||this.isItemActive(t))&&this.isItemVisible(t)},isValidItem:function(t){return!!t&&!this.isItemDisabled(t)&&!this.getItemProp(t,"separator")},findFirstItem:function(){var t=this;return this.visibleItems.find(function(n){return t.isValidItem(n)})},findLastItem:function(){var t=this;return ne(this.visibleItems,function(n){return t.isValidItem(n)})},findNextItem:function(t){var n=this,a=this.visibleItems.findIndex(function(i){return i.key===t.key}),s=a<this.visibleItems.length-1?this.visibleItems.slice(a+1).find(function(i){return n.isValidItem(i)}):void 0;return s||t},findPrevItem:function(t){var n=this,a=this.visibleItems.findIndex(function(i){return i.key===t.key}),s=a>0?ne(this.visibleItems.slice(0,a),function(i){return n.isValidItem(i)}):void 0;return s||t},searchItems:function(t,n){var a=this;this.searchValue=(this.searchValue||"")+n;var s=null,i=!1;if(h(this.focusedItem)){var u=this.visibleItems.findIndex(function(o){return o.key===a.focusedItem.key});s=this.visibleItems.slice(u).find(function(o){return a.isItemMatched(o)}),s=F(s)?this.visibleItems.slice(0,u).find(function(o){return a.isItemMatched(o)}):s}else s=this.visibleItems.find(function(o){return a.isItemMatched(o)});return h(s)&&(i=!0),F(s)&&F(this.focusedItem)&&(s=this.findFirstItem()),h(s)&&this.changeFocusedItem({originalEvent:t,processedItem:s,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItem:function(t){var n=t.originalEvent,a=t.processedItem,s=t.focusOnNext,i=t.selfCheck,u=t.allowHeaderFocus,o=u===void 0?!0:u;h(this.focusedItem)&&this.focusedItem.key!==a.key?(this.focusedItem=a,this.scrollInView()):o&&this.$emit("header-focus",{originalEvent:n,focusOnNext:s,selfCheck:i})},scrollInView:function(){var t=P(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]'));t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath:function(t){var n=this;this.activeItemPath=Object.entries(t||{}).reduce(function(a,s){var i=lt(s,2),u=i[0],o=i[1];if(o){var r=n.findProcessedItemByItemKey(u);r&&a.push(r)}return a},[])},findProcessedItemByItemKey:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n=n||a===0&&this.processedItems,!n)return null;for(var s=0;s<n.length;s++){var i=n[s];if(this.getItemProp(i,"key")===t)return i;var u=this.findProcessedItemByItemKey(t,i.items,a+1);if(u)return u}},createProcessedItems:function(t){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return t&&t.forEach(function(o,r){var c=(i!==""?i+"_":"")+r,f={item:o,index:r,level:a,key:c,parent:s,parentKey:i};f.items=n.createProcessedItems(o.items,a+1,f,c),u.push(f)}),u},flatItems:function(t){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t&&t.forEach(function(s){n.isVisibleItem(s)&&(a.push(s),n.flatItems(s.items,a))}),a}},computed:{processedItems:function(){return this.createProcessedItems(this.items||[])},visibleItems:function(){return this.flatItems(this.processedItems)},focusedItemId:function(){return h(this.focusedItem)?"".concat(this.panelId,"_").concat(this.focusedItem.key):null}},components:{PanelMenuSub:Ie}};function ft(e,t,n,a,s,i){var u=$("PanelMenuSub");return m(),y(u,l({id:n.panelId+"_list",class:e.cx("rootList"),role:"tree",tabindex:-1,"aria-activedescendant":s.focused?i.focusedItemId:void 0,panelId:n.panelId,focusedItemId:s.focused?i.focusedItemId:void 0,items:i.processedItems,templates:n.templates,activeItemPath:s.activeItemPath,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemToggle:i.onItemToggle,onItemMousemove:i.onItemMouseMove,pt:e.pt,unstyled:e.unstyled},e.ptm("rootList")),null,16,["id","class","aria-activedescendant","panelId","focusedItemId","items","templates","activeItemPath","onFocus","onBlur","onKeydown","onItemToggle","onItemMousemove","pt","unstyled"])}ge.render=ft;function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(e)}function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,a)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?re(Object(n),!0).forEach(function(a){ht(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ht(e,t,n){return(t=It(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function It(e){var t=gt(e,"string");return R(t)=="symbol"?t:t+""}function gt(e,t){if(R(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(R(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ve={name:"PanelMenu",extends:it,inheritAttrs:!1,emits:["update:expandedKeys","panel-open","panel-close"],data:function(){return{activeItem:null,activeItems:[]}},methods:{getItemProp:function(t,n){return t?V(t[n]):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},getPTOptions:function(t,n,a){return this.ptm(t,{context:{index:a,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n)}})},isItemActive:function(t){return this.expandedKeys?this.expandedKeys[this.getItemProp(t,"key")]:this.multiple?this.activeItems.some(function(n){return z(t,n)}):z(t,this.activeItem)},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemFocused:function(t){return z(t,this.activeItem)},isItemGroup:function(t){return h(t.items)},getPanelId:function(t){return"".concat(this.$id,"_").concat(t)},getPanelKey:function(t){return this.getPanelId(t)},getHeaderId:function(t){return"".concat(this.getPanelId(t),"_header")},getContentId:function(t){return"".concat(this.getPanelId(t),"_content")},onHeaderClick:function(t,n){if(this.isItemDisabled(n)){t.preventDefault();return}n.command&&n.command({originalEvent:t,item:n}),this.changeActiveItem(t,n),w(t.currentTarget)},onHeaderKeyDown:function(t,n){switch(t.code){case"ArrowDown":this.onHeaderArrowDownKey(t);break;case"ArrowUp":this.onHeaderArrowUpKey(t);break;case"Home":this.onHeaderHomeKey(t);break;case"End":this.onHeaderEndKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onHeaderEnterKey(t,n);break}},onHeaderArrowDownKey:function(t){var n=j(t.currentTarget,"data-p-active")===!0?P(t.currentTarget.nextElementSibling,'[data-pc-section="rootlist"]'):null;n?w(n):this.updateFocusedHeader({originalEvent:t,focusOnNext:!0}),t.preventDefault()},onHeaderArrowUpKey:function(t){var n=this.findPrevHeader(t.currentTarget.parentElement)||this.findLastHeader(),a=j(n,"data-p-active")===!0?P(n.nextElementSibling,'[data-pc-section="rootlist"]'):null;a?w(a):this.updateFocusedHeader({originalEvent:t,focusOnNext:!1}),t.preventDefault()},onHeaderHomeKey:function(t){this.changeFocusedHeader(t,this.findFirstHeader()),t.preventDefault()},onHeaderEndKey:function(t){this.changeFocusedHeader(t,this.findLastHeader()),t.preventDefault()},onHeaderEnterKey:function(t,n){var a=P(t.currentTarget,'[data-pc-section="headerlink"]');a?a.click():this.onHeaderClick(t,n),t.preventDefault()},findNextHeader:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?t:t.nextElementSibling,s=P(a,'[data-pc-section="header"]');return s?j(s,"data-p-disabled")?this.findNextHeader(s.parentElement):s:null},findPrevHeader:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?t:t.previousElementSibling,s=P(a,'[data-pc-section="header"]');return s?j(s,"data-p-disabled")?this.findPrevHeader(s.parentElement):s:null},findFirstHeader:function(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader:function(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader:function(t){var n=t.originalEvent,a=t.focusOnNext,s=t.selfCheck,i=n.currentTarget.closest('[data-pc-section="panel"]'),u=s?P(i,'[data-pc-section="header"]'):a?this.findNextHeader(i):this.findPrevHeader(i);u?this.changeFocusedHeader(n,u):a?this.onHeaderHomeKey(n):this.onHeaderEndKey(n)},changeActiveItem:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!this.isItemDisabled(n)){var s=this.isItemActive(n),i=s?"panel-close":"panel-open";this.activeItem=a?n:this.activeItem&&z(n,this.activeItem)?null:n,this.multiple&&(this.activeItems.some(function(u){return z(n,u)})?this.activeItems=this.activeItems.filter(function(u){return!z(n,u)}):this.activeItems.push(n)),this.changeExpandedKeys({item:n,expanded:!s}),this.$emit(i,{originalEvent:t,item:n})}},changeExpandedKeys:function(t){var n=t.item,a=t.expanded,s=a===void 0?!1:a;if(this.expandedKeys){var i=bt({},this.expandedKeys);s?i[n.key]=!0:delete i[n.key],this.$emit("update:expandedKeys",i)}},changeFocusedHeader:function(t,n){n&&w(n)},getMenuItemProps:function(t,n){return{icon:l({class:[this.cx("headerIcon"),this.getItemProp(t,"icon")]},this.getPTOptions("headerIcon",t,n)),label:l({class:this.cx("headerLabel")},this.getPTOptions("headerLabel",t,n))}}},components:{PanelMenuList:ge,ChevronRightIcon:J,ChevronDownIcon:ue}},vt=["id"],yt=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown","data-p-active","data-p-disabled"],kt=["href"],wt=["id","aria-labelledby"];function Pt(e,t,n,a,s,i){var u=$("PanelMenuList");return m(),d("div",l({id:e.$id,class:e.cx("root")},e.ptmi("root")),[(m(!0),d(x,null,E(e.model,function(o,r){return m(),d(x,{key:i.getPanelKey(r)},[i.isItemVisible(o)?(m(),d("div",l({key:0,style:i.getItemProp(o,"style"),class:[e.cx("panel"),i.getItemProp(o,"class")],ref_for:!0},e.ptm("panel")),[p("div",l({id:i.getHeaderId(r),class:[e.cx("header",{item:o}),i.getItemProp(o,"headerClass")],tabindex:i.isItemDisabled(o)?-1:e.tabindex,role:"button","aria-label":i.getItemLabel(o),"aria-expanded":i.isItemActive(o),"aria-controls":i.getContentId(r),"aria-disabled":i.isItemDisabled(o),onClick:function(f){return i.onHeaderClick(f,o)},onKeydown:function(f){return i.onHeaderKeyDown(f,o)},ref_for:!0},i.getPTOptions("header",o,r),{"data-p-active":i.isItemActive(o),"data-p-disabled":i.isItemDisabled(o)}),[p("div",l({class:e.cx("headerContent"),ref_for:!0},i.getPTOptions("headerContent",o,r)),[e.$slots.item?(m(),y(k(e.$slots.item),{key:1,item:o,root:!0,active:i.isItemActive(o),hasSubmenu:i.isItemGroup(o),label:i.getItemLabel(o),props:i.getMenuItemProps(o,r)},null,8,["item","active","hasSubmenu","label","props"])):(m(),d("a",l({key:0,href:i.getItemProp(o,"url"),class:e.cx("headerLink"),tabindex:-1,ref_for:!0},i.getPTOptions("headerLink",o,r)),[i.getItemProp(o,"items")?L(e.$slots,"submenuicon",{key:0,active:i.isItemActive(o)},function(){return[(m(),y(k(i.isItemActive(o)?"ChevronDownIcon":"ChevronRightIcon"),l({class:e.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuIcon",o,r)),null,16,["class"]))]}):I("",!0),e.$slots.headericon?(m(),y(k(e.$slots.headericon),{key:1,item:o,class:C([e.cx("headerIcon"),i.getItemProp(o,"icon")])},null,8,["item","class"])):i.getItemProp(o,"icon")?(m(),d("span",l({key:2,class:[e.cx("headerIcon"),i.getItemProp(o,"icon")],ref_for:!0},i.getPTOptions("headerIcon",o,r)),null,16)):I("",!0),p("span",l({class:e.cx("headerLabel"),ref_for:!0},i.getPTOptions("headerLabel",o,r)),D(i.getItemLabel(o)),17)],16,kt))],16)],16,yt),g(me,l({name:"p-toggleable-content",ref_for:!0},e.ptm("transition")),{default:S(function(){return[B(p("div",l({id:i.getContentId(r),class:e.cx("contentContainer"),role:"region","aria-labelledby":i.getHeaderId(r),ref_for:!0},e.ptm("contentContainer")),[i.getItemProp(o,"items")?(m(),d("div",l({key:0,class:e.cx("content"),ref_for:!0},e.ptm("content")),[g(u,{panelId:i.getPanelId(r),items:i.getItemProp(o,"items"),templates:e.$slots,expandedKeys:e.expandedKeys,onItemToggle:i.changeExpandedKeys,onHeaderFocus:i.updateFocusedHeader,pt:e.pt,unstyled:e.unstyled},null,8,["panelId","items","templates","expandedKeys","onItemToggle","onHeaderFocus","pt","unstyled"])],16)):I("",!0)],16,wt),[[le,i.isItemActive(o)]])]}),_:2},1040)],16)):I("",!0)],64)}),128))],16,vt)}ve.render=Pt;var xt=({dt:e})=>`
.p-megamenu {
    position: relative;
    display: flex;
    align-items: center;
    background: ${e("megamenu.background")};
    border: 1px solid ${e("megamenu.border.color")};
    border-radius: ${e("megamenu.border.radius")};
    color: ${e("megamenu.color")};
    gap: ${e("megamenu.gap")};
}

.p-megamenu-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: ${e("megamenu.gap")};
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {
    border-radius: ${e("megamenu.base.item.border.radius")};
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
    padding: ${e("megamenu.base.item.padding")};
}

.p-megamenu-item-content {
    transition: background ${e("megamenu.transition.duration")}, color ${e("megamenu.transition.duration")};
    border-radius: ${e("megamenu.item.border.radius")};
    color: ${e("megamenu.item.color")};
}

.p-megamenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${e("megamenu.item.padding")};
    gap: ${e("megamenu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-megamenu-item-label {
    line-height: 1;
}

.p-megamenu-item-icon {
    color: ${e("megamenu.item.icon.color")};
}

.p-megamenu-submenu-icon {
    color: ${e("megamenu.submenu.icon.color")};
    font-size: ${e("megamenu.submenu.icon.size")};
    width: ${e("megamenu.submenu.icon.size")};
    height: ${e("megamenu.submenu.icon.size")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content {
    color: ${e("megamenu.item.focus.color")};
    background: ${e("megamenu.item.focus.background")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${e("megamenu.item.icon.focus.color")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${e("megamenu.submenu.icon.focus.color")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
    color: ${e("megamenu.item.focus.color")};
    background: ${e("megamenu.item.focus.background")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
    color: ${e("megamenu.item.icon.focus.color")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
    color: ${e("megamenu.submenu.icon.focus.color")};
}

.p-megamenu-item-active > .p-megamenu-item-content {
    color: ${e("megamenu.item.active.color")};
    background: ${e("megamenu.item.active.background")};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${e("megamenu.item.icon.active.color")};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${e("megamenu.submenu.icon.active.color")};
}

.p-megamenu-overlay {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    padding: ${e("megamenu.overlay.padding")};
    background: ${e("megamenu.overlay.background")};
    color: ${e("megamenu.overlay.color")};
    border: 1px solid ${e("megamenu.overlay.border.color")};
    border-radius: ${e("megamenu.overlay.border.radius")};
    box-shadow: ${e("megamenu.overlay.shadow")};
}

.p-megamenu-overlay:dir(rtl) {
    left: auto;
    right: 0;
}

.p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: ${e("megamenu.submenu.padding")};
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    gap: ${e("megamenu.submenu.gap")}
}

.p-megamenu-submenu-label {
    padding: ${e("megamenu.submenu.label.padding")};
    color: ${e("megamenu.submenu.label.color")};
    font-weight: ${e("megamenu.submenu.label.font.weight")};
    background: ${e("megamenu.submenu.label.background")};
}

.p-megamenu-separator {
    border-block-start: 1px solid ${e("megamenu.separator.border.color")};
}

.p-megamenu-horizontal {
    align-items: center;
    padding: ${e("megamenu.horizontal.orientation.padding")};
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${e("megamenu.horizontal.orientation.gap")};
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-horizontal .p-megamenu-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-megamenu-vertical {
    display: inline-flex;
    min-width: 12.5rem;
    flex-direction: column;
    align-items: stretch;
    padding: ${e("megamenu.vertical.orientation.padding")};
}

.p-megamenu-vertical .p-megamenu-root-list {
    align-items: stretch;
    flex-direction: column;
    gap: ${e("megamenu.vertical.orientation.gap")};
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {
    left: auto;
    right: 100%;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
    transform: rotate(180deg);
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: ${e("megamenu.overlay.gap")};
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${e("megamenu.mobile.button.size")};
    height: ${e("megamenu.mobile.button.size")};
    position: relative;
    color: ${e("megamenu.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${e("megamenu.mobile.button.border.radius")};
    transition: background ${e("megamenu.transition.duration")}, color ${e("megamenu.transition.duration")}, outline-color ${e("megamenu.transition.duration")}, box-shadow ${e("megamenu.transition.duration")};
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: ${e("megamenu.mobile.button.hover.color")};
    background: ${e("megamenu.mobile.button.hover.background")};
}

.p-megamenu-button:focus-visible {
    box-shadow: ${e("megamenu.mobile.button.focus.ring.shadow")};
    outline: ${e("megamenu.mobile.button.focus.ring.width")} ${e("megamenu.mobile.button.focus.ring.style")} ${e("megamenu.mobile.button.focus.ring.color")};
    outline-offset: ${e("megamenu.mobile.button.focus.ring.offset")};
}

.p-megamenu-mobile {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-button {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: ${e("megamenu.submenu.padding")};
    gap: ${e("megamenu.submenu.gap")};
    background: ${e("megamenu.overlay.background")};
    border: 1px solid ${e("megamenu.overlay.border.color")};
    box-shadow: ${e("megamenu.overlay.shadow")};
}

.p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: block;
}

.p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-overlay {
    position: static;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
}

.p-megamenu-mobile .p-megamenu-grid {
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90%;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    transform: rotate(-180deg);
}
`,Lt={rootList:function(t){var n=t.props;return{"max-height":n.scrollHeight,overflow:"auto"}}},Kt={root:function(t){var n=t.instance;return["p-megamenu p-component",{"p-megamenu-mobile":n.queryMatches,"p-megamenu-mobile-active":n.mobileActive,"p-megamenu-horizontal":n.horizontal,"p-megamenu-vertical":n.vertical}]},start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:function(t){var n=t.instance,a=t.processedItem;return["p-megamenu-submenu-label",{"p-disabled":n.isItemDisabled(a)}]},item:function(t){var n=t.instance,a=t.processedItem;return["p-megamenu-item",{"p-megamenu-item-active":n.isItemActive(a),"p-focus":n.isItemFocused(a),"p-disabled":n.isItemDisabled(a)}]},itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:function(t){var n=t.instance,a=t.processedItem,s=n.isItemGroup(a)?a.items.length:0,i;if(n.$parentInstance.queryMatches)i="p-megamenu-col-12";else switch(s){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},St=T.extend({name:"megamenu",style:xt,classes:Kt,inlineStyles:Lt}),Mt={name:"BaseMegaMenu",extends:M,props:{model:{type:Array,default:null},orientation:{type:String,default:"horizontal"},breakpoint:{type:String,default:"960px"},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},scrollHeight:{type:String,default:"20rem"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:St,provide:function(){return{$pcMegaMenu:this,$parentInstance:this}}},ye={name:"MegaMenuSub",hostName:"MegaMenu",extends:M,emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},mobileActive:{type:Boolean,default:!1},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItem:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getSubListId:function(t){return"".concat(this.getItemId(t),"_list")},getSubListKey:function(t){return this.getSubListId(t)},getItemId:function(t){return"".concat(this.menuId,"_").concat(t.key)},getItemKey:function(t){return this.getItemId(t)},getItemProp:function(t,n,a){return t&&t.item?V(t.item[n],a):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},getPTOptions:function(t,n,a){return this.ptm(a,{context:{item:t.item,index:n,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(t){return h(this.activeItem)?this.activeItem.key===t.key:!1},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemFocused:function(t){return this.focusedItemId===this.getItemId(t)},isItemGroup:function(t){return h(t.items)},onItemClick:function(t,n){this.getItemProp(n,"command",{originalEvent:t,item:n.item}),this.$emit("item-click",{originalEvent:t,processedItem:n,isFocus:!0})},onItemMouseEnter:function(t,n){this.$emit("item-mouseenter",{originalEvent:t,processedItem:n})},getAriaSetSize:function(){var t=this;return this.items.filter(function(n){return t.isItemVisible(n)&&!t.getItemProp(n,"separator")}).length},getAriaPosInset:function(t){var n=this;return t-this.items.slice(0,t).filter(function(a){return n.isItemVisible(a)&&n.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(t,n){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(t,n,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(t,"icon")]},this.getPTOptions(t,n,"itemIcon")),label:l({class:this.cx("label")},this.getPTOptions(t,n,"label")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(t,n,"submenuIcon"))}}},components:{AngleRightIcon:pe,AngleDownIcon:fe},directives:{ripple:Q}},$t=["tabindex"],At=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],Ct=["onClick","onMouseenter"],Ft=["href","target"],Ot=["id"];function Et(e,t,n,a,s,i){var u=$("MegaMenuSub",!0),o=Z("ripple");return m(),d("ul",l({class:n.level===0?e.cx("rootList"):e.cx("submenu"),tabindex:n.tabindex},n.level===0?e.ptm("rootList"):e.ptm("submenu")),[n.submenu?(m(),d("li",l({key:0,class:[e.cx("submenuLabel",{submenu:n.submenu}),i.getItemProp(n.submenu,"class")],style:i.getItemProp(n.submenu,"style"),role:"presentation"},e.ptm("submenuLabel")),D(i.getItemLabel(n.submenu)),17)):I("",!0),(m(!0),d(x,null,E(n.items,function(r,c){return m(),d(x,{key:i.getItemKey(r)},[i.isItemVisible(r)&&!i.getItemProp(r,"separator")?(m(),d("li",l({key:0,id:i.getItemId(r),style:i.getItemProp(r,"style"),class:[e.cx("item",{processedItem:r}),i.getItemProp(r,"class")],role:"menuitem","aria-label":i.getItemLabel(r),"aria-disabled":i.isItemDisabled(r)||void 0,"aria-expanded":i.isItemGroup(r)?i.isItemActive(r):void 0,"aria-haspopup":i.isItemGroup(r)&&!i.getItemProp(r,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(c),ref_for:!0},i.getPTOptions(r,c,"item"),{"data-p-active":i.isItemActive(r),"data-p-focused":i.isItemFocused(r),"data-p-disabled":i.isItemDisabled(r)}),[p("div",l({class:e.cx("itemContent"),onClick:function(v){return i.onItemClick(v,r)},onMouseenter:function(v){return i.onItemMouseEnter(v,r)},ref_for:!0},i.getPTOptions(r,c,"itemContent")),[n.templates.item?(m(),y(k(n.templates.item),{key:1,item:r.item,hasSubmenu:i.isItemGroup(r),label:i.getItemLabel(r),props:i.getMenuItemProps(r,c)},null,8,["item","hasSubmenu","label","props"])):B((m(),d("a",l({key:0,href:i.getItemProp(r,"url"),class:e.cx("itemLink"),target:i.getItemProp(r,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions(r,c,"itemLink")),[n.templates.itemicon?(m(),y(k(n.templates.itemicon),{key:0,item:r.item,class:C(e.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(r,"icon")?(m(),d("span",l({key:1,class:[e.cx("itemIcon"),i.getItemProp(r,"icon")],ref_for:!0},i.getPTOptions(r,c,"itemIcon")),null,16)):I("",!0),p("span",l({class:e.cx("itemLabel"),ref_for:!0},i.getPTOptions(r,c,"itemLabel")),D(i.getItemLabel(r)),17),i.isItemGroup(r)?(m(),d(x,{key:2},[n.templates.submenuicon?(m(),y(k(n.templates.submenuicon),l({key:0,active:i.isItemActive(r),class:e.cx("submenuIcon"),ref_for:!0},i.getPTOptions(r,c,"submenuIcon")),null,16,["active","class"])):(m(),y(k(n.horizontal||n.mobileActive?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:e.cx("submenuIcon"),ref_for:!0},i.getPTOptions(r,c,"submenuIcon")),null,16,["class"]))],64)):I("",!0)],16,Ft)),[[o]])],16,Ct),i.isItemVisible(r)&&i.isItemGroup(r)?(m(),d("div",l({key:0,class:e.cx("overlay"),ref_for:!0},e.ptm("overlay")),[p("div",l({class:e.cx("grid"),ref_for:!0},e.ptm("grid")),[(m(!0),d(x,null,E(r.items,function(f){return m(),d("div",l({key:i.getItemKey(f),class:e.cx("column",{processedItem:r}),ref_for:!0},e.ptm("column")),[(m(!0),d(x,null,E(f,function(v){return m(),y(u,{key:i.getSubListKey(v),id:i.getSubListId(v),style:Y(e.sx("submenu",!0,{processedItem:r})),role:"menu",menuId:n.menuId,focusedItemId:n.focusedItemId,submenu:v,items:v.items,templates:n.templates,level:n.level+1,mobileActive:n.mobileActive,pt:e.pt,unstyled:e.unstyled,onItemClick:t[0]||(t[0]=function(K){return e.$emit("item-click",K)}),onItemMouseenter:t[1]||(t[1]=function(K){return e.$emit("item-mouseenter",K)})},null,8,["id","style","menuId","focusedItemId","submenu","items","templates","level","mobileActive","pt","unstyled"])}),128))],16)}),128))],16)],16)):I("",!0)],16,At)):I("",!0),i.isItemVisible(r)&&i.getItemProp(r,"separator")?(m(),d("li",l({key:1,id:i.getItemId(r),class:[e.cx("separator"),i.getItemProp(r,"class")],style:i.getItemProp(r,"style"),role:"separator",ref_for:!0},e.ptm("separator")),null,16,Ot)):I("",!0)],64)}),128))],16,$t)}ye.render=Et;var ke={name:"MegaMenu",extends:Mt,inheritAttrs:!1,emits:["focus","blur"],outsideClickListener:null,resizeListener:null,matchMediaListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,key:"",parentKey:""},activeItem:null,dirty:!1,query:null,queryMatches:!1}},watch:{activeItem:function(t){h(t)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()},methods:{getItemProp:function(t,n){return t?V(t[n]):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemGroup:function(t){return h(this.getItemProp(t,"items"))},isItemSeparator:function(t){return this.getItemProp(t,"separator")},getProccessedItemLabel:function(t){return t?this.getItemLabel(t.item):void 0},isProccessedItemGroup:function(t){return t&&h(t.items)},toggle:function(t){var n=this;this.mobileActive?(this.mobileActive=!1,H.clear(this.menubar),this.hide()):(this.mobileActive=!0,H.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),t.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},w(this.menubar)},hide:function(t,n){var a=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){w(a.$refs.menubutton,{preventScroll:!0})},1)),this.activeItem=null,this.focusedItemInfo={index:-1,key:"",parentKey:""},n&&w(this.menubar),this.dirty=!1},onFocus:function(t){if(this.focused=!0,this.focusedItemInfo.index===-1){var n=this.findFirstFocusedItemIndex(),a=this.findVisibleItem(n);this.focusedItemInfo={index:n,key:a.key,parentKey:a.parentKey}}this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.focusedItemInfo={index:-1,key:"",parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",t)},onKeyDown:function(t){if(this.disabled){t.preventDefault();return}var n=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&X(t.key)&&this.searchItems(t,t.key);break}},onItemChange:function(t){var n=t.processedItem,a=t.isFocus;if(!F(n)){var s=n.index,i=n.key,u=n.parentKey,o=n.items,r=h(o);r&&(this.activeItem=n),this.focusedItemInfo={index:s,key:i,parentKey:u},r&&(this.dirty=!0),a&&w(this.menubar)}},onItemClick:function(t){var n=t.originalEvent,a=t.processedItem,s=this.isProccessedItemGroup(a),i=F(a.parent),u=this.isSelected(a);if(u){var o=a.index,r=a.key,c=a.parentKey;this.activeItem=null,this.focusedItemInfo={index:o,key:r,parentKey:c},this.dirty=!i,this.mobileActive||w(this.menubar,{preventScroll:!0})}else s?this.onItemChange(t):this.hide(n)},onItemMouseEnter:function(t){!this.mobileActive&&this.dirty&&this.onItemChange(t)},menuButtonClick:function(t){this.toggle(t)},menuButtonKeydown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&this.menuButtonClick(t)},onArrowDownKey:function(t){if(this.horizontal)if(h(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);a&&(this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo={index:-1,key:n.key,parentKey:n.parentKey},this.searchValue="")}var s=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(t,s),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);!a&&h(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(t,this.findFirstItemIndex()))}t.preventDefault()}else{var s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(t,s),t.preventDefault()}},onArrowLeftKey:function(t){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);if(a){if(this.horizontal){var s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(t,s)}}else{this.vertical&&h(this.activeItem)&&n.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);var i=n.columnIndex-1,u=this.visibleItems.findIndex(function(o){return o.columnIndex===i});u!==-1&&this.changeFocusedItemInfo(t,u)}t.preventDefault()},onArrowRightKey:function(t){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);if(a){if(this.vertical)if(h(this.activeItem)&&this.activeItem.key===n.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var s=this.findVisibleItem(this.focusedItemInfo.index),i=this.isProccessedItemGroup(s);i&&(this.onItemChange({originalEvent:t,processedItem:s}),this.focusedItemInfo={index:-1,key:s.key,parentKey:s.parentKey},this.searchValue="")}var u=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(t,u)}else{var o=n.columnIndex+1,r=this.visibleItems.findIndex(function(c){return c.columnIndex===o});r!==-1&&this.changeFocusedItemInfo(t,r)}t.preventDefault()},onHomeKey:function(t){this.changeFocusedItemInfo(t,this.findFirstItemIndex()),t.preventDefault()},onEndKey:function(t){this.changeFocusedItemInfo(t,this.findLastItemIndex()),t.preventDefault()},onEnterKey:function(t){if(this.focusedItemInfo.index!==-1){var n=P(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=n&&P(n,'a[data-pc-section="itemlink"]');a?a.click():n&&n.click();var s=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(s);!i&&this.changeFocusedItemInfo(t,this.findFirstFocusedItemIndex())}t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},onEscapeKey:function(t){h(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),t.preventDefault()},onTabKey:function(t){if(this.focusedItemInfo.index!==-1){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);!a&&this.onItemChange({originalEvent:t,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){var a=t.container&&!t.container.contains(n.target),s=!(t.target&&(t.target===n.target||t.target.contains(n.target)));a&&s&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(n){ce()||t.hide(n,!0),t.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var t=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){t.queryMatches=n.matches,t.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(t){var n;return this.isValidItem(t)&&((n=this.getProccessedItemLabel(t))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(t){return!!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)&&this.isItemVisible(t.item)},isValidSelectedItem:function(t){return this.isValidItem(t)&&this.isSelected(t)},isSelected:function(t){return h(this.activeItem)?this.activeItem.key===t.key:!1},findFirstItemIndex:function(){var t=this;return this.visibleItems.findIndex(function(n){return t.isValidItem(n)})},findLastItemIndex:function(){var t=this;return G(this.visibleItems,function(n){return t.isValidItem(n)})},findNextItemIndex:function(t){var n=this,a=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(function(s){return n.isValidItem(s)}):-1;return a>-1?a+t+1:t},findPrevItemIndex:function(t){var n=this,a=t>0?G(this.visibleItems.slice(0,t),function(s){return n.isValidItem(s)}):-1;return a>-1?a:t},findSelectedItemIndex:function(){var t=this;return this.visibleItems.findIndex(function(n){return t.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t},findLastFocusedItemIndex:function(){var t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t},findVisibleItem:function(t){return h(this.visibleItems)?this.visibleItems[t]:null},searchItems:function(t,n){var a=this;this.searchValue=(this.searchValue||"")+n;var s=-1,i=!1;return this.focusedItemInfo.index!==-1?(s=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return a.isItemMatched(u)}),s=s===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return a.isItemMatched(u)}):s+this.focusedItemInfo.index):s=this.visibleItems.findIndex(function(u){return a.isItemMatched(u)}),s!==-1&&(i=!0),s===-1&&this.focusedItemInfo.index===-1&&(s=this.findFirstFocusedItemIndex()),s!==-1&&this.changeFocusedItemInfo(t,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItemInfo:function(t,n){var a=this.findVisibleItem(n);this.focusedItemInfo.index=n,this.focusedItemInfo.key=h(a)?a.key:"",this.scrollInView()},scrollInView:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=t!==-1?"".concat(this.$id,"_").concat(t):this.focusedItemId,a;n===null&&this.queryMatches?a=this.$refs.menubutton:a=P(this.menubar,'li[id="'.concat(n,'"]')),a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},createProcessedItems:function(t){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=arguments.length>4?arguments[4]:void 0,o=[];return t&&t.forEach(function(r,c){var f=(i!==""?i+"_":"")+(u!==void 0?u+"_":"")+c,v={item:r,index:c,level:a,key:f,parent:s,parentKey:i,columnIndex:u!==void 0?u:s.columnIndex!==void 0?s.columnIndex:c};v.items=a===0&&r.items&&r.items.length>0?r.items.map(function(K,U){return n.createProcessedItems(K,a+1,v,f,U)}):n.createProcessedItems(r.items,a+1,v,f),o.push(v)}),o},containerRef:function(t){this.container=t},menubarRef:function(t){this.menubar=t?t.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var t=h(this.activeItem)?this.activeItem:null;return t&&t.key===this.focusedItemInfo.parentKey?t.items.reduce(function(n,a){return a.forEach(function(s){s.items.forEach(function(i){n.push(i)})}),n},[]):this.processedItems},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},focusedItemId:function(){return h(this.focusedItemInfo.key)?"".concat(this.$id,"_").concat(this.focusedItemInfo.key):null}},components:{MegaMenuSub:ye,BarsIcon:de}},Dt=["id"],Tt=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function Vt(e,t,n,a,s,i){var u=$("BarsIcon"),o=$("MegaMenuSub");return m(),d("div",l({ref:i.containerRef,id:e.$id,class:e.cx("root")},e.ptmi("root")),[e.$slots.start?(m(),d("div",l({key:0,class:e.cx("start")},e.ptm("start")),[L(e.$slots,"start")],16)):I("",!0),L(e.$slots,e.$slots.button?"button":"menubutton",{id:e.$id,class:C(e.cx("button")),toggleCallback:function(c){return i.menuButtonClick(c)}},function(){var r;return[e.model&&e.model.length>0?(m(),d("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:e.cx("button"),"aria-haspopup":!!(e.model.length&&e.model.length>0),"aria-expanded":s.mobileActive,"aria-controls":e.$id,"aria-label":(r=e.$primevue.config.locale.aria)===null||r===void 0?void 0:r.navigation,onClick:t[0]||(t[0]=function(c){return i.menuButtonClick(c)}),onKeydown:t[1]||(t[1]=function(c){return i.menuButtonKeydown(c)})},e.ptm("button")),[L(e.$slots,e.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[g(u,be(he(e.ptm("buttonIcon"))),null,16)]})],16,Tt)):I("",!0)]}),g(o,{ref:i.menubarRef,id:e.$id+"_list",tabindex:e.disabled?-1:e.tabindex,role:"menubar","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-disabled":e.disabled||void 0,"aria-orientation":e.orientation,"aria-activedescendant":s.focused?i.focusedItemId:void 0,menuId:e.$id,focusedItemId:s.focused?i.focusedItemId:void 0,items:i.processedItems,horizontal:i.horizontal,templates:e.$slots,activeItem:s.activeItem,mobileActive:s.mobileActive,level:0,style:Y(e.sx("rootList")),pt:e.pt,unstyled:e.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-orientation","aria-activedescendant","menuId","focusedItemId","items","horizontal","templates","activeItem","mobileActive","style","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),e.$slots.end?(m(),d("div",l({key:1,class:e.cx("end")},e.ptm("end")),[L(e.$slots,"end")],16)):I("",!0)],16,Dt)}ke.render=Vt;var zt=({dt:e})=>`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: ${e("stepper.step.gap")};
    padding: ${e("stepper.step.padding")};
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")};
    border-radius: ${e("stepper.step.header.border.radius")};
    outline-color: transparent;
    background: transparent;
    padding: ${e("stepper.step.header.padding")};
    gap: ${e("stepper.step.header.gap")};
}

.p-step-header:focus-visible {
    box-shadow: ${e("stepper.step.header.focus.ring.shadow")};
    outline: ${e("stepper.step.header.focus.ring.width")} ${e("stepper.step.header.focus.ring.style")} ${e("stepper.step.header.focus.ring.color")};
    outline-offset: ${e("stepper.step.header.focus.ring.offset")};
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e("stepper.step.title.color")};
    font-weight: ${e("stepper.step.title.font.weight")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e("stepper.step.number.color")};
    border: 2px solid ${e("stepper.step.number.border.color")};
    background: ${e("stepper.step.number.background")};
    min-width: ${e("stepper.step.number.size")};
    height: ${e("stepper.step.number.size")};
    line-height: ${e("stepper.step.number.size")};
    font-size: ${e("stepper.step.number.font.size")};
    z-index: 1;
    border-radius: ${e("stepper.step.number.border.radius")};
    position: relative;
    font-weight: ${e("stepper.step.number.font.weight")};
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("stepper.step.number.border.radius")};
    box-shadow: ${e("stepper.step.number.shadow")};
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: ${e("stepper.step.number.active.background")};
    border-color: ${e("stepper.step.number.active.border.color")};
    color: ${e("stepper.step.number.active.color")};
}

.p-step-active .p-step-title {
    color: ${e("stepper.step.title.active.color")};
}

.p-step:not(.p-disabled):focus-visible {
    outline: ${e("focus.ring.width")} ${e("focus.ring.style")} ${e("focus.ring.color")};
    outline-offset: ${e("focus.ring.offset")};
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepper-separator {
    flex: 1 1 0;
    background: ${e("stepper.separator.background")};
    width: 100%;
    height: ${e("stepper.separator.size")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-steppanels {
    padding: ${e("stepper.steppanels.padding")};
}

.p-steppanel {
    background: ${e("stepper.steppanel.background")};
    color: ${e("stepper.steppanel.color")};
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: ${e("stepper.steppanel.padding")};
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: ${e("stepper.separator.size")};
    height: auto;
    margin: ${e("stepper.separator.margin")};
    position: relative;
    left: calc(-1 * ${e("stepper.separator.size")});
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * ${e("stepper.separator.size")});
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: ${e("stepper.step.number.size")};
}
`,Ht={root:function(t){var n=t.props;return["p-stepper p-component",{"p-readonly":n.linear}]},separator:"p-stepper-separator"},Bt=T.extend({name:"stepper",style:zt,classes:Ht}),Rt={name:"BaseStepper",extends:M,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:Bt,provide:function(){return{$pcStepper:this,$parentInstance:this}}},we={name:"Stepper",extends:Rt,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isStepActive:function(t){return this.d_value===t},isStepDisabled:function(){return this.linear}}};function Nt(e,t,n,a,s,i){return m(),d("div",l({class:e.cx("root"),role:"tablist"},e.ptmi("root")),[e.$slots.start?L(e.$slots,"start",{key:0}):I("",!0),L(e.$slots,"default"),e.$slots.end?L(e.$slots,"end",{key:1}):I("",!0)],16)}we.render=Nt;var _t={root:"p-steplist"},jt=T.extend({name:"steplist",classes:_t}),Gt={name:"BaseStepList",extends:M,style:jt,provide:function(){return{$pcStepList:this,$parentInstance:this}}},Pe={name:"StepList",extends:Gt,inheritAttrs:!1};function Ut(e,t,n,a,s,i){return m(),d("div",l({class:e.cx("root")},e.ptmi("root")),[L(e.$slots,"default")],16)}Pe.render=Ut;var qt={root:function(t){var n=t.instance;return["p-step",{"p-step-active":n.active,"p-disabled":n.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},Wt=T.extend({name:"step",classes:qt}),xe={name:"StepperSeparator",hostName:"Stepper",extends:M};function Jt(e,t,n,a,s,i){return m(),d("span",l({class:e.cx("separator")},e.ptm("separator")),null,16)}xe.render=Jt;var Qt={name:"BaseStep",extends:M,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:Wt,provide:function(){return{$pcStep:this,$parentInstance:this}}},Le={name:"Step",extends:Qt,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var t=_e(this.$el,ie(this.$pcStepper.$el,'[data-pc-name="step"]')),n=ie(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=t!==n-1}},methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var t;return this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_step_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}}},components:{StepperSeparator:xe}},Zt=["id","tabindex","aria-controls","disabled"];function Xt(e,t,n,a,s,i){var u=$("StepperSeparator");return e.asChild?L(e.$slots,"default",{key:1,class:C(e.cx("root")),active:i.active,value:e.value,a11yAttrs:i.a11yAttrs,activateCallback:i.onStepClick}):(m(),y(k(e.as),l({key:0,class:e.cx("root"),"aria-current":i.active?"step":void 0,role:"presentation","data-p-active":i.active,"data-p-disabled":i.isStepDisabled},i.getPTOptions("root")),{default:S(function(){return[p("button",l({id:i.id,class:e.cx("header"),role:"tab",type:"button",tabindex:i.isStepDisabled?-1:void 0,"aria-controls":i.ariaControls,disabled:i.isStepDisabled,onClick:t[0]||(t[0]=function(){return i.onStepClick&&i.onStepClick.apply(i,arguments)})},i.getPTOptions("header")),[p("span",l({class:e.cx("number")},i.getPTOptions("number")),D(i.activeValue),17),p("span",l({class:e.cx("title")},i.getPTOptions("title")),[L(e.$slots,"default")],16)],16,Zt),s.isSeparatorVisible?(m(),y(u,{key:0})):I("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled"]))}Le.render=Xt;var Yt=({dt:e})=>`
.p-breadcrumb {
    background: ${e("breadcrumb.background")};
    padding: ${e("breadcrumb.padding")};
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: ${e("breadcrumb.gap")};
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: ${e("breadcrumb.separator.color")};
}

.p-breadcrumb-separator-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${e("breadcrumb.item.gap")};
    transition: background ${e("breadcrumb.transition.duration")}, color ${e("breadcrumb.transition.duration")}, outline-color ${e("breadcrumb.transition.duration")}, box-shadow ${e("breadcrumb.transition.duration")};
    border-radius: ${e("breadcrumb.item.border.radius")};
    outline-color: transparent;
    color: ${e("breadcrumb.item.color")};
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: ${e("breadcrumb.item.focus.ring.shadow")};
    outline: ${e("breadcrumb.item.focus.ring.width")} ${e("breadcrumb.item.focus.ring.style")} ${e("breadcrumb.item.focus.ring.color")};
    outline-offset: ${e("breadcrumb.item.focus.ring.offset")};
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: ${e("breadcrumb.item.hover.color")};
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: ${e("breadcrumb.item.icon.color")};
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: ${e("breadcrumb.item.icon.hover.color")};
}
`,en={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(t){var n=t.instance;return["p-breadcrumb-item",{"p-disabled":n.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},tn=T.extend({name:"breadcrumb",style:Yt,classes:en}),nn={name:"BaseBreadcrumb",extends:M,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:tn,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},Ke={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:M,props:{item:null,templates:null,index:null},methods:{onClick:function(t){this.item.command&&this.item.command({originalEvent:t,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var t=this.item,n=t.to,a=t.url,s=typeof window<"u"?window.location.pathname:"";return n===s||a===s?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var t=this;return{action:l({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(a){return t.onClick(a)}},this.ptm("itemLink",this.ptmOptions)),icon:l({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:l({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},an=["href","target","aria-current"];function rn(e,t,n,a,s,i){return i.visible()?(m(),d("li",l({key:0,class:[e.cx("item"),n.item.class]},e.ptm("item",i.ptmOptions)),[n.templates.item?(m(),y(k(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps},null,8,["item","label","props"])):(m(),d("a",l({key:0,href:n.item.url||"#",class:e.cx("itemLink"),target:n.item.target,"aria-current":i.isCurrentUrl(),onClick:t[0]||(t[0]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},e.ptm("itemLink",i.ptmOptions)),[n.templates&&n.templates.itemicon?(m(),y(k(n.templates.itemicon),{key:0,item:n.item,class:C(e.cx("itemIcon",i.ptmOptions))},null,8,["item","class"])):n.item.icon?(m(),d("span",l({key:1,class:[e.cx("itemIcon"),n.item.icon]},e.ptm("itemIcon",i.ptmOptions)),null,16)):I("",!0),n.item.label?(m(),d("span",l({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",i.ptmOptions)),D(i.label()),17)):I("",!0)],16,an))],16)):I("",!0)}Ke.render=rn;var Se={name:"Breadcrumb",extends:nn,inheritAttrs:!1,components:{BreadcrumbItem:Ke,ChevronRightIcon:J}};function sn(e,t,n,a,s,i){var u=$("BreadcrumbItem"),o=$("ChevronRightIcon");return m(),d("nav",l({class:e.cx("root")},e.ptmi("root")),[p("ol",l({class:e.cx("list")},e.ptm("list")),[e.home?(m(),y(u,l({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):I("",!0),(m(!0),d(x,null,E(e.model,function(r,c){return m(),d(x,{key:r.label+"_"+c},[e.home||c!==0?(m(),d("li",l({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[L(e.$slots,"separator",{},function(){return[g(o,l({"aria-hidden":"true",class:e.cx("separatorIcon"),ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):I("",!0),g(u,{item:r,index:c,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}Se.render=sn;var on=({dt:e})=>`
.p-menubar {
    display: flex;
    align-items: center;
    background: ${e("menubar.background")};
    border: 1px solid ${e("menubar.border.color")};
    border-radius: ${e("menubar.border.radius")};
    color: ${e("menubar.color")};
    padding: ${e("menubar.padding")};
    gap: ${e("menubar.gap")};
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: ${e("menubar.gap")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${e("menubar.base.item.border.radius")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${e("menubar.base.item.padding")};
}

.p-menubar-item-content {
    transition: background ${e("menubar.transition.duration")}, color ${e("menubar.transition.duration")};
    border-radius: ${e("menubar.item.border.radius")};
    color: ${e("menubar.item.color")};
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${e("menubar.item.padding")};
    gap: ${e("menubar.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: ${e("menubar.item.icon.color")};
}

.p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.color")};
    margin-left: auto;
    font-size: ${e("menubar.submenu.icon.size")};
    width: ${e("menubar.submenu.icon.size")};
    height: ${e("menubar.submenu.icon.size")};
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: ${e("menubar.item.focus.color")};
    background: ${e("menubar.item.focus.background")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: ${e("menubar.item.icon.focus.color")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: ${e("menubar.item.focus.color")};
    background: ${e("menubar.item.focus.background")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: ${e("menubar.item.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.focus.color")};
}

.p-menubar-item-active > .p-menubar-item-content {
    color: ${e("menubar.item.active.color")};
    background: ${e("menubar.item.active.background")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: ${e("menubar.item.icon.active.color")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${e("menubar.submenu.icon.active.color")};
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: ${e("menubar.submenu.background")};
    border: 1px solid ${e("menubar.submenu.border.color")};
    border-radius: ${e("menubar.submenu.border.radius")};
    box-shadow: ${e("menubar.submenu.shadow")};
    color: ${e("menubar.submenu.color")};
    flex-direction: column;
    padding: ${e("menubar.submenu.padding")};
    gap: ${e("menubar.submenu.gap")};
}

.p-menubar-submenu .p-menubar-separator {
    border-block-start: 1px solid ${e("menubar.separator.border.color")};
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

.p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${e("menubar.mobile.button.size")};
    height: ${e("menubar.mobile.button.size")};
    position: relative;
    color: ${e("menubar.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${e("menubar.mobile.button.border.radius")};
    transition: background ${e("menubar.transition.duration")}, color ${e("menubar.transition.duration")}, outline-color ${e("menubar.transition.duration")};
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: ${e("menubar.mobile.button.hover.color")};
    background: ${e("menubar.mobile.button.hover.background")};
}

.p-menubar-button:focus-visible {
    box-shadow: ${e("menubar.mobile.button.focus.ring.shadow")};
    outline: ${e("menubar.mobile.button.focus.ring.width")} ${e("menubar.mobile.button.focus.ring.style")} ${e("menubar.mobile.button.focus.ring.color")};
    outline-offset: ${e("menubar.mobile.button.focus.ring.offset")};
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    padding: ${e("menubar.submenu.padding")};
    background: ${e("menubar.submenu.background")};
    border: 1px solid ${e("menubar.submenu.border.color")};
    box-shadow: ${e("menubar.submenu.shadow")};
    border-radius: ${e("menubar.submenu.border.radius")};
    gap: ${e("menubar.submenu.gap")};
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${e("menubar.item.padding")};
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-block-start: 1px solid ${e("menubar.separator.border.color")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
.p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: ${e("menubar.submenu.mobile.indent")};
    padding-inline-end: 0;
}
`,un={submenu:function(t){var n=t.instance,a=t.processedItem;return{display:n.isItemActive(a)?"flex":"none"}}},ln={root:function(t){var n=t.instance;return["p-menubar p-component",{"p-menubar-mobile":n.queryMatches,"p-menubar-mobile-active":n.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:function(t){var n=t.instance,a=t.processedItem;return["p-menubar-item",{"p-menubar-item-active":n.isItemActive(a),"p-focus":n.isItemFocused(a),"p-disabled":n.isItemDisabled(a)}]},itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},mn=T.extend({name:"menubar",style:on,classes:ln,inlineStyles:un}),cn={name:"BaseMenubar",extends:M,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:mn,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},Me={name:"MenubarSub",hostName:"Menubar",extends:M,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(t){return"".concat(this.menuId,"_").concat(t.key)},getItemKey:function(t){return this.getItemId(t)},getItemProp:function(t,n,a){return t&&t.item?V(t.item[n],a):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},getItemLabelId:function(t){return"".concat(this.menuId,"_").concat(t.key,"_label")},getPTOptions:function(t,n,a){return this.ptm(a,{context:{item:t.item,index:n,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t),level:this.level}})},isItemActive:function(t){return this.activeItemPath.some(function(n){return n.key===t.key})},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemFocused:function(t){return this.focusedItemId===this.getItemId(t)},isItemGroup:function(t){return h(t.items)},onItemClick:function(t,n){this.getItemProp(n,"command",{originalEvent:t,item:n.item}),this.$emit("item-click",{originalEvent:t,processedItem:n,isFocus:!0})},onItemMouseEnter:function(t,n){this.$emit("item-mouseenter",{originalEvent:t,processedItem:n})},onItemMouseMove:function(t,n){this.$emit("item-mousemove",{originalEvent:t,processedItem:n})},getAriaPosInset:function(t){return t-this.calculateAriaSetSize.slice(0,t).length+1},getMenuItemProps:function(t,n){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(t,n,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(t,"icon")]},this.getPTOptions(t,n,"itemIcon")),label:l({class:this.cx("itemLabel")},this.getPTOptions(t,n,"itemLabel")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(t,n,"submenuIcon"))}}},computed:{calculateAriaSetSize:function(){var t=this;return this.items.filter(function(n){return t.isItemVisible(n)&&t.getItemProp(n,"separator")})},getAriaSetSize:function(){var t=this;return this.items.filter(function(n){return t.isItemVisible(n)&&!t.getItemProp(n,"separator")}).length}},components:{AngleRightIcon:pe,AngleDownIcon:fe},directives:{ripple:Q}},dn=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],pn=["onClick","onMouseenter","onMousemove"],fn=["href","target"],bn=["id"],hn=["id"];function In(e,t,n,a,s,i){var u=$("MenubarSub",!0),o=Z("ripple");return m(),d("ul",l({class:n.level===0?e.cx("rootList"):e.cx("submenu")},n.level===0?e.ptm("rootList"):e.ptm("submenu")),[(m(!0),d(x,null,E(n.items,function(r,c){return m(),d(x,{key:i.getItemKey(r)},[i.isItemVisible(r)&&!i.getItemProp(r,"separator")?(m(),d("li",l({key:0,id:i.getItemId(r),style:i.getItemProp(r,"style"),class:[e.cx("item",{processedItem:r}),i.getItemProp(r,"class")],role:"menuitem","aria-label":i.getItemLabel(r),"aria-disabled":i.isItemDisabled(r)||void 0,"aria-expanded":i.isItemGroup(r)?i.isItemActive(r):void 0,"aria-haspopup":i.isItemGroup(r)&&!i.getItemProp(r,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize,"aria-posinset":i.getAriaPosInset(c),ref_for:!0},i.getPTOptions(r,c,"item"),{"data-p-active":i.isItemActive(r),"data-p-focused":i.isItemFocused(r),"data-p-disabled":i.isItemDisabled(r)}),[p("div",l({class:e.cx("itemContent"),onClick:function(v){return i.onItemClick(v,r)},onMouseenter:function(v){return i.onItemMouseEnter(v,r)},onMousemove:function(v){return i.onItemMouseMove(v,r)},ref_for:!0},i.getPTOptions(r,c,"itemContent")),[n.templates.item?(m(),y(k(n.templates.item),{key:1,item:r.item,root:n.root,hasSubmenu:i.getItemProp(r,"items"),label:i.getItemLabel(r),props:i.getMenuItemProps(r,c)},null,8,["item","root","hasSubmenu","label","props"])):B((m(),d("a",l({key:0,href:i.getItemProp(r,"url"),class:e.cx("itemLink"),target:i.getItemProp(r,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions(r,c,"itemLink")),[n.templates.itemicon?(m(),y(k(n.templates.itemicon),{key:0,item:r.item,class:C(e.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(r,"icon")?(m(),d("span",l({key:1,class:[e.cx("itemIcon"),i.getItemProp(r,"icon")],ref_for:!0},i.getPTOptions(r,c,"itemIcon")),null,16)):I("",!0),p("span",l({id:i.getItemLabelId(r),class:e.cx("itemLabel"),ref_for:!0},i.getPTOptions(r,c,"itemLabel")),D(i.getItemLabel(r)),17,bn),i.getItemProp(r,"items")?(m(),d(x,{key:2},[n.templates.submenuicon?(m(),y(k(n.templates.submenuicon),{key:0,root:n.root,active:i.isItemActive(r),class:C(e.cx("submenuIcon"))},null,8,["root","active","class"])):(m(),y(k(n.root?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:e.cx("submenuIcon"),ref_for:!0},i.getPTOptions(r,c,"submenuIcon")),null,16,["class"]))],64)):I("",!0)],16,fn)),[[o]])],16,pn),i.isItemVisible(r)&&i.isItemGroup(r)?(m(),y(u,{key:0,id:i.getItemId(r)+"_list",menuId:n.menuId,role:"menu",style:Y(e.sx("submenu",!0,{processedItem:r})),focusedItemId:n.focusedItemId,items:r.items,mobileActive:n.mobileActive,activeItemPath:n.activeItemPath,templates:n.templates,level:n.level+1,"aria-labelledby":i.getItemLabelId(r),pt:e.pt,unstyled:e.unstyled,onItemClick:t[0]||(t[0]=function(f){return e.$emit("item-click",f)}),onItemMouseenter:t[1]||(t[1]=function(f){return e.$emit("item-mouseenter",f)}),onItemMousemove:t[2]||(t[2]=function(f){return e.$emit("item-mousemove",f)})},null,8,["id","menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):I("",!0)],16,dn)):I("",!0),i.isItemVisible(r)&&i.getItemProp(r,"separator")?(m(),d("li",l({key:1,id:i.getItemId(r),class:[e.cx("separator"),i.getItemProp(r,"class")],style:i.getItemProp(r,"style"),role:"separator",ref_for:!0},e.ptm("separator")),null,16,hn)):I("",!0)],64)}),128))],16)}Me.render=In;var $e={name:"Menubar",extends:cn,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(t){h(t)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&H.clear(this.container),this.container=null},methods:{getItemProp:function(t,n){return t?V(t[n]):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemGroup:function(t){return h(this.getItemProp(t,"items"))},isItemSeparator:function(t){return this.getItemProp(t,"separator")},getProccessedItemLabel:function(t){return t?this.getItemLabel(t.item):void 0},isProccessedItemGroup:function(t){return t&&h(t.items)},toggle:function(t){var n=this;this.mobileActive?(this.mobileActive=!1,H.clear(this.menubar),this.hide()):(this.mobileActive=!0,H.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),t.preventDefault()},show:function(){w(this.menubar)},hide:function(t,n){var a=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){w(a.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},n&&w(this.menubar),this.dirty=!1},onFocus:function(t){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",t)},onKeyDown:function(t){var n=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&X(t.key)&&this.searchItems(t,t.key);break}},onItemChange:function(t,n){var a=t.processedItem,s=t.isFocus;if(!F(a)){var i=a.index,u=a.key,o=a.level,r=a.parentKey,c=a.items,f=h(c),v=this.activeItemPath.filter(function(K){return K.parentKey!==r&&K.parentKey!==u});f&&v.push(a),this.focusedItemInfo={index:i,level:o,parentKey:r},f&&(this.dirty=!0),s&&w(this.menubar),!(n==="hover"&&this.queryMatches)&&(this.activeItemPath=v)}},onItemClick:function(t){var n=t.originalEvent,a=t.processedItem,s=this.isProccessedItemGroup(a),i=F(a.parent),u=this.isSelected(a);if(u){var o=a.index,r=a.key,c=a.level,f=a.parentKey;this.activeItemPath=this.activeItemPath.filter(function(K){return r!==K.key&&r.startsWith(K.key)}),this.focusedItemInfo={index:o,level:c,parentKey:f},this.dirty=!i,w(this.menubar)}else if(s)this.onItemChange(t);else{var v=i?a:this.activeItemPath.find(function(K){return K.parentKey===""});this.hide(n),this.changeFocusedItemIndex(n,v?v.index:-1),this.mobileActive=!1,w(this.menubar)}},onItemMouseEnter:function(t){this.dirty&&this.onItemChange(t,"hover")},onItemMouseMove:function(t){this.focused&&this.changeFocusedItemIndex(t,t.processedItem.index)},menuButtonClick:function(t){this.toggle(t)},menuButtonKeydown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&this.menuButtonClick(t)},onArrowDownKey:function(t){var n=this.visibleItems[this.focusedItemInfo.index],a=n?F(n.parent):null;if(a){var s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowRightKey(t))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,i)}t.preventDefault()},onArrowUpKey:function(t){var n=this,a=this.visibleItems[this.focusedItemInfo.index],s=F(a.parent);if(s){var i=this.isProccessedItemGroup(a);if(i){this.onItemChange({originalEvent:t,processedItem:a}),this.focusedItemInfo={index:-1,parentKey:a.key};var u=this.findLastItemIndex();this.changeFocusedItemIndex(t,u)}}else{var o=this.activeItemPath.find(function(c){return c.key===a.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:o?o.parentKey:""},this.searchValue="",this.onArrowLeftKey(t),this.activeItemPath=this.activeItemPath.filter(function(c){return c.parentKey!==n.focusedItemInfo.parentKey});else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,r)}}t.preventDefault()},onArrowLeftKey:function(t){var n=this,a=this.visibleItems[this.focusedItemInfo.index],s=a?this.activeItemPath.find(function(u){return u.key===a.parentKey}):null;if(s)this.onItemChange({originalEvent:t,processedItem:s}),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==n.focusedItemInfo.parentKey}),t.preventDefault();else{var i=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,i),t.preventDefault()}},onArrowRightKey:function(t){var n=this.visibleItems[this.focusedItemInfo.index],a=n?this.activeItemPath.find(function(u){return u.key===n.parentKey}):null;if(a){var s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowDownKey(t))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,i),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedItemIndex(t,this.findFirstItemIndex()),t.preventDefault()},onEndKey:function(t){this.changeFocusedItemIndex(t,this.findLastItemIndex()),t.preventDefault()},onEnterKey:function(t){if(this.focusedItemInfo.index!==-1){var n=P(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=n&&P(n,'a[data-pc-section="itemlink"]');a?a.click():n&&n.click();var s=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(s);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},onEscapeKey:function(t){if(this.focusedItemInfo.level!==0){var n=this.focusedItemInfo;this.hide(t,!1),this.focusedItemInfo={index:Number(n.parentKey.split("_")[0]),level:0,parentKey:""}}t.preventDefault()},onTabKey:function(t){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(n);!a&&this.onItemChange({originalEvent:t,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){var a=t.container&&!t.container.contains(n.target),s=!(t.target&&(t.target===n.target||t.target.contains(n.target)));a&&s&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(n){ce()||t.hide(n,!0),t.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var t=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){t.queryMatches=n.matches,t.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(t){var n;return this.isValidItem(t)&&((n=this.getProccessedItemLabel(t))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(t){return!!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)&&this.isItemVisible(t.item)},isValidSelectedItem:function(t){return this.isValidItem(t)&&this.isSelected(t)},isSelected:function(t){return this.activeItemPath.some(function(n){return n.key===t.key})},findFirstItemIndex:function(){var t=this;return this.visibleItems.findIndex(function(n){return t.isValidItem(n)})},findLastItemIndex:function(){var t=this;return G(this.visibleItems,function(n){return t.isValidItem(n)})},findNextItemIndex:function(t){var n=this,a=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(function(s){return n.isValidItem(s)}):-1;return a>-1?a+t+1:t},findPrevItemIndex:function(t){var n=this,a=t>0?G(this.visibleItems.slice(0,t),function(s){return n.isValidItem(s)}):-1;return a>-1?a:t},findSelectedItemIndex:function(){var t=this;return this.visibleItems.findIndex(function(n){return t.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t},findLastFocusedItemIndex:function(){var t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t},searchItems:function(t,n){var a=this;this.searchValue=(this.searchValue||"")+n;var s=-1,i=!1;return this.focusedItemInfo.index!==-1?(s=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return a.isItemMatched(u)}),s=s===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return a.isItemMatched(u)}):s+this.focusedItemInfo.index):s=this.visibleItems.findIndex(function(u){return a.isItemMatched(u)}),s!==-1&&(i=!0),s===-1&&this.focusedItemInfo.index===-1&&(s=this.findFirstFocusedItemIndex()),s!==-1&&this.changeFocusedItemIndex(t,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItemIndex:function(t,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=t!==-1?"".concat(this.$id,"_").concat(t):this.focusedItemId,a=P(this.menubar,'li[id="'.concat(n,'"]'));a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(t){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return t&&t.forEach(function(o,r){var c=(i!==""?i+"_":"")+r,f={item:o,index:r,level:a,key:c,parent:s,parentKey:i};f.items=n.createProcessedItems(o.items,a+1,f,c),u.push(f)}),u},containerRef:function(t){this.container=t},menubarRef:function(t){this.menubar=t?t.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var t=this,n=this.activeItemPath.find(function(a){return a.key===t.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(h(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:Me,BarsIcon:de}};function N(e){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(e)}function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?se(Object(n),!0).forEach(function(a){gn(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function gn(e,t,n){return(t=vn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vn(e){var t=yn(e,"string");return N(t)=="symbol"?t:t+""}function yn(e,t){if(N(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(N(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var kn=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function wn(e,t,n,a,s,i){var u=$("BarsIcon"),o=$("MenubarSub");return m(),d("div",l({ref:i.containerRef,class:e.cx("root")},e.ptmi("root")),[e.$slots.start?(m(),d("div",l({key:0,class:e.cx("start")},e.ptm("start")),[L(e.$slots,"start")],16)):I("",!0),L(e.$slots,e.$slots.button?"button":"menubutton",{id:e.$id,class:C(e.cx("button")),toggleCallback:function(c){return i.menuButtonClick(c)}},function(){var r;return[e.model&&e.model.length>0?(m(),d("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:e.cx("button"),"aria-haspopup":!!(e.model.length&&e.model.length>0),"aria-expanded":s.mobileActive,"aria-controls":e.$id,"aria-label":(r=e.$primevue.config.locale.aria)===null||r===void 0?void 0:r.navigation,onClick:t[0]||(t[0]=function(c){return i.menuButtonClick(c)}),onKeydown:t[1]||(t[1]=function(c){return i.menuButtonKeydown(c)})},oe(oe({},e.buttonProps),e.ptm("button"))),[L(e.$slots,e.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[g(u,be(he(e.ptm("buttonicon"))),null,16)]})],16,kn)):I("",!0)]}),g(o,{ref:i.menubarRef,id:e.$id+"_list",role:"menubar",items:i.processedItems,templates:e.$slots,root:!0,mobileActive:s.mobileActive,tabindex:"0","aria-activedescendant":s.focused?i.focusedItemId:void 0,menuId:e.$id,focusedItemId:s.focused?i.focusedItemId:void 0,activeItemPath:s.activeItemPath,level:0,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,pt:e.pt,unstyled:e.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),e.$slots.end?(m(),d("div",l({key:1,class:e.cx("end")},e.ptm("end")),[L(e.$slots,"end")],16)):I("",!0)],16)}$e.render=wn;const Pn={class:"card"},xn={class:"card"},Ln={class:"flex flex-col md:flex-row gap-8"},Kn={class:"md:w-1/2"},Sn={class:"card"},Mn={class:"md:w-1/2"},$n={class:"card"},An={class:"flex flex-col md:flex-row gap-8 mt-6"},Cn={class:"md:w-1/3"},Fn={class:"card"},On={class:"md:w-1/3"},En={class:"card"},Dn={class:"md:w-1/3"},Tn={class:"card"},Vn={class:"flex flex-col md:flex-row gap-8 mt-8"},zn={class:"md:w-1/2"},Hn={class:"card"},Bn={class:"md:w-1/2"},Rn={class:"card"},Gn={__name:"MenuDoc",setup(e){const t=A(null),n=A(null),a=A([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),s=A({icon:"pi pi-home",to:"/"}),i=A([{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}]),u=A([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),o=A([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Home",icon:"pi pi-home"}]),r=A([{label:"Customers",items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]}]),c=A([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Options",icon:"pi pi-cog"}]),f=A([{label:"Fashion",icon:"pi pi-fw pi-tag",items:[[{label:"Woman",items:[{label:"Woman Item"},{label:"Woman Item"},{label:"Woman Item"}]},{label:"Men",items:[{label:"Men Item"},{label:"Men Item"},{label:"Men Item"}]}],[{label:"Kids",items:[{label:"Kids Item"},{label:"Kids Item"}]},{label:"Luggage",items:[{label:"Luggage Item"},{label:"Luggage Item"},{label:"Luggage Item"}]}]]},{label:"Electronics",icon:"pi pi-fw pi-desktop",items:[[{label:"Computer",items:[{label:"Computer Item"},{label:"Computer Item"}]},{label:"Camcorder",items:[{label:"Camcorder Item"},{label:"Camcorder Item"},{label:"Camcorder Item"}]}],[{label:"TV",items:[{label:"TV Item"},{label:"TV Item"}]},{label:"Audio",items:[{label:"Audio Item"},{label:"Audio Item"},{label:"Audio Item"}]}],[{label:"Sports.7",items:[{label:"Sports.7.1"},{label:"Sports.7.2"}]}]]},{label:"Furniture",icon:"pi pi-fw pi-image",items:[[{label:"Living Room",items:[{label:"Living Room Item"},{label:"Living Room Item"}]},{label:"Kitchen",items:[{label:"Kitchen Item"},{label:"Kitchen Item"},{label:"Kitchen Item"}]}],[{label:"Bedroom",items:[{label:"Bedroom Item"},{label:"Bedroom Item"}]},{label:"Outdoor",items:[{label:"Outdoor Item"},{label:"Outdoor Item"},{label:"Outdoor Item"}]}]]},{label:"Sports",icon:"pi pi-fw pi-star",items:[[{label:"Basketball",items:[{label:"Basketball Item"},{label:"Basketball Item"}]},{label:"Football",items:[{label:"Football Item"},{label:"Football Item"},{label:"Football Item"}]}],[{label:"Tennis",items:[{label:"Tennis Item"},{label:"Tennis Item"}]}]]}]),v=A([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]}]);function K(_){t.value.toggle(_)}function U(_){n.value.show(_)}return(_,b)=>{const Ae=Ue,Ce=qe,Fe=We,Oe=$e,Ee=Se,q=Le,De=Pe,Te=we,W=Xe,Ve=Ye,ze=Ze,He=Qe,ee=je,Be=Je,Re=Ge,te=ke,Ne=ve;return m(),d(x,null,[p("div",Pn,[b[0]||(b[0]=p("div",{class:"font-semibold text-xl mb-4"},"Menubar",-1)),g(Oe,{model:a.value},{end:S(()=>[g(Fe,{iconPosition:"left"},{default:S(()=>[g(Ae,{class:"pi pi-search"}),g(Ce,{type:"text",placeholder:"Search"})]),_:1})]),_:1},8,["model"])]),p("div",xn,[b[1]||(b[1]=p("div",{class:"font-semibold text-xl mb-4"},"Breadcrumb",-1)),g(Ee,{home:s.value,model:i.value},null,8,["home","model"])]),p("div",Ln,[p("div",Kn,[p("div",Sn,[b[5]||(b[5]=p("div",{class:"font-semibold text-xl mb-4"},"Steps",-1)),g(Te,{value:"1"},{default:S(()=>[g(De,null,{default:S(()=>[g(q,{value:"1"},{default:S(()=>b[2]||(b[2]=[O("Header I")])),_:1}),g(q,{value:"2"},{default:S(()=>b[3]||(b[3]=[O("Header II")])),_:1}),g(q,{value:"3"},{default:S(()=>b[4]||(b[4]=[O("Header III")])),_:1})]),_:1})]),_:1})])]),p("div",Mn,[p("div",$n,[b[9]||(b[9]=p("div",{class:"font-semibold text-xl mb-4"},"TabMenu",-1)),g(ze,{value:"0"},{default:S(()=>[g(Ve,null,{default:S(()=>[g(W,{value:"0"},{default:S(()=>b[6]||(b[6]=[O("Header I")])),_:1}),g(W,{value:"1"},{default:S(()=>b[7]||(b[7]=[O("Header II")])),_:1}),g(W,{value:"2"},{default:S(()=>b[8]||(b[8]=[O("Header III")])),_:1})]),_:1})]),_:1})])])]),p("div",An,[p("div",Cn,[p("div",Fn,[b[10]||(b[10]=p("div",{class:"font-semibold text-xl mb-4"},"Tiered Menu",-1)),g(He,{model:u.value},null,8,["model"])])]),p("div",On,[p("div",En,[b[11]||(b[11]=p("div",{class:"font-semibold text-xl mb-4"},"Plain Menu",-1)),g(ee,{model:r.value},null,8,["model"])])]),p("div",Dn,[p("div",Tn,[b[12]||(b[12]=p("div",{class:"font-semibold text-xl mb-4"},"Overlay Menu",-1)),g(ee,{ref_key:"menu",ref:t,model:o.value,popup:!0},null,8,["model"]),g(Be,{type:"button",label:"Options",icon:"pi pi-angle-down",onClick:K,style:{width:"auto"}})]),p("div",{class:"card",onContextmenu:U},[b[13]||(b[13]=p("div",{class:"font-semibold text-xl mb-4"},"Context Menu",-1)),b[14]||(b[14]=O(" Right click to display. ")),g(Re,{ref_key:"contextMenu",ref:n,model:c.value},null,8,["model"])],32)])]),p("div",Vn,[p("div",zn,[p("div",Hn,[b[15]||(b[15]=p("div",{class:"font-semibold text-xl mb-4"},"MegaMenu | Horizontal",-1)),g(te,{model:f.value},null,8,["model"]),b[16]||(b[16]=p("div",{class:"font-semibold text-xl mb-4 mt-8"},"MegaMenu | Vertical",-1)),g(te,{model:f.value,orientation:"vertical"},null,8,["model"])])]),p("div",Bn,[p("div",Rn,[b[17]||(b[17]=p("div",{class:"font-semibold text-xl mb-4"},"PanelMenu",-1)),g(Ne,{model:v.value},null,8,["model"])])])])],64)}}};export{Gn as default};

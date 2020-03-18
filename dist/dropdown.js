/* layui_dropdown v1.0.0 by Microanswer,doc:http://test.microanswer.cn/dropdown.html */
layui.define(["jquery","laytpl"],function(i){"use strict";function e(i,t){"string"==typeof i&&(i=h(i)),this.$dom=i,this.option=h.extend({downid:String(Math.random()).split(".")[1],filter:i.attr("lay-filter")},o,t),this.init()}var h=layui.jquery||layui.$,n=layui.laytpl,t=h(window.document.body),s=window.MICROANSWER_DROPDOWAN||"dropdown",d="<div tabindex='0' class='layui-anim layui-anim-upbit dropdown-root' "+s+"-id='{{d.downid}}' style='min-width: {{d.minWidth}}px;min-height: {{d.minHeight}}px;max-height: {{d.maxHeight}}px;overflow: auto;z-index: {{d.zIndex}}'>",a="</div>",p=d+"{{# layui.each(d.menus, function(index, item){ }}<div class='menu-item'><a href='javascript:;' lay-event='{{item.event}}'>{{# if (item.layIcon){ }}<i class='layui-icon {{item.layIcon}}'></i>&nbsp;{{# } }}<span>{{item.txt}}</span></a></div>{{# }); }}"+a,o={showBy:"click",align:"left",minWidth:10,minHeight:10,maxHeight:300,zIndex:102,gap:4};function l(i,n){h(i||"[lay-"+s+"]").each(function(){var i=h(this),t=new Function("return "+(i.attr("lay-"+s)||"{}"))(),o=i.data(s)||new e(i,h.extend({},t,n||{}));i.data(s,o)})}e.prototype.init=function(){var t=this;if(t.option.menus)n(p).render(t.option,function(i){t.$down=h(i),t.$dom.after(t.$down),t.initEvent()});else if(t.option.template){var i;i=-1===t.option.template.indexOf("#")?"#"+t.option.template:t.option.template;var o=h.extend({downid:t.option.downid,minWidth:t.option.minWidth,minHeight:t.option.minHeight,maxHeight:t.option.maxHeight,zIndex:t.option.zIndex},t.option.data||{});n(d+h(i).html()+a).render(o,function(i){t.$down=h(i),t.$dom.after(t.$down),t.option.success&&t.option.success(t.$down),t.initEvent()})}else layui.hint().error("下拉框目前即没配置菜单项，也没配置下拉模板。")},e.prototype.initPosition=function(){var i,t,o=this.$dom.offset(),n=this.$dom.outerHeight(),e=this.$dom.outerWidth(),d=o.left,h=o.top-window.scrollY,s=this.$down.outerHeight(),a=this.$down.outerWidth();i="right"===this.option.align?d+e-a:"center"===this.option.align?d+(e-a)/2:d,(t=n+h+this.option.gap)+s>=window.innerHeight&&(t=h-s-this.option.gap),i+a>=window.innerWidth&&(i=window.innerWidth-a-this.option.gap),this.$down.css("left",i),this.$down.css("top",t)},e.prototype.show=function(){this.initPosition(),this.$down.addClass("layui-show"),this.opened=!0},e.prototype.hide=function(){this.fcd=!1,this.$down.removeClass("layui-show"),this.opened=!1},e.prototype.hideWhenCan=function(){this.mouseInCompoent||this.fcd||this.hide()},e.prototype.toggle=function(){this.opened?this.hide():this.show()},e.prototype.initEvent=function(){var d=this;"click"===d.option.showBy&&d.$dom.on("click",function(){d.fcd=!0,d.toggle()}),d.$down.on("click",function(){d.fcd=!0,d.$down.focus()}),t.on("click",function(){d.mouseInCompoent||(d.fcd=!1),d.hideWhenCan()}),h(window).on("scroll",function(){d.initPosition()}),h(window).on("resize",function(){d.initPosition()}),h(window).on("mousemove",function(i){var t,o=i.pageX,n=i.pageY,e=d.$dom.offset();d.mouseInCompoent=o>=e.left&&o<=e.left+d.$dom.width()&&n>=e.top&&n<=e.top+d.$dom.height(),d.$down&&d.opened&&(t=d.$down.offset(),d.mouseInCompoent=d.mouseInCompoent||o>=t.left&&o<=t.left+d.$down.width()&&n>=t.top&&n<=t.top+d.$down.height()),d.mouseInCompoent?"hover"===d.option.showBy&&(d.fcd=!0,d.$down.focus(),d.show()):"hover"===d.option.showBy&&d.hideWhenCan()}),d.$dom.on("blur",function(){d.fcd=!1,d.hideWhenCan()}),d.$down.on("blur",function(){d.fcd=!1,d.hideWhenCan()}),d.option.menus&&h("["+s+"-id='"+d.option.downid+"']").on("click","a",function(){var i=h(this).attr("lay-event");i?(layui.event.call(this,s,s+"("+d.option.filter+")",i),d.hide()):layui.hint().error("菜单条目["+this.outerHTML+"]未设置event。")})},l(),i(s,{suite:l,onFilter:function(i,t){layui.onevent(s,s+"("+i+")",function(i){t&&t(i)})}})});
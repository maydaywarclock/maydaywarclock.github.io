$(function(){function a(){clearTimeout(k);clearTimeout(l);clearTimeout(m);k=setTimeout(function(){l=setTimeout(function(){m=setTimeout(function(){b()},500);b()},100);b()},50)}function b(){n.b("overflow","hidden");g();h();e();d("value-wrapper");d("clock-time");d("clock-date");n.b("overflow","visible")}function e(){var a=$(".unit_name:visible");if(a.length){var b=$(".unit_value:visible").K(".colon .unit_value").K("#id_sign"),e="",c=Infinity;a.B(function(){$(this).text().length>e.length&&(e=$(this).text())});
b.B(function(){$(this).width()<c&&(c=$(this).width())});c+=17;f(a,c,a.first().height(),e)}}function h(){var a=$(".unit_value:visible");if(a.length){var b="";a.B(function(){b+=$(this).text()});f(a,$(".counter-wrapper").width(),a.first().height(),b)}}function g(){var a=$("#name");if(a.is(":visible")){var b=String(a.C()).replace(/[&<>"'\/]/g,function(a){return c[a]});f(a,a.width(),a.height(),b)}}function d(a){a=$("#"+a+":visible");a.length&&f(a,a.width(),a.height(),a.text())}function f(b,c,e,f){var d=
b.first().clone();0<c-17&&(c-=17);var h=Math.round(b.length*c*3/4/100);0<c-h&&(c-=h);d.b("height",e+"px");d.b("width",c+"px");d.C(f);d.M(q);try{textFit(d,{O:!1,S:1,R:1E3});var g=d.find("span").b("font-size");b.b("font-size",g);b.b("line-height",b.first().height()+"px")}catch(t){a()}d.remove()}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},k,l,m,r=$("body"),n=$("html, body, .pure-g, #create-form"),p=$(".wrapper"),q=p.length?p:r;window.s=a});
$(function(){function a(){}a.prototype.A=!1;a.prototype.D=null;a.prototype.u=null;a.prototype.F="";a.prototype.H=null;a.prototype.constructor=a;a.prototype.j=function(){};a.prototype.w=function(){};a.prototype.now=function(){return new Date-this.D+this.u};a.prototype.c=function(a){return"none"!=a.b("display")};a.prototype.J=function(){this.D=new Date;this.u=(new Date).getTime();this.A=!0;this.G()};a.prototype.G=function(){clearInterval(this.H);if(this.u){this.w();var a=this;this.H=window.setInterval(function(){a.w()},
50)}window.s();$(window).resize(window.s)};a.prototype.g=function(){this.j();this.A?this.G():this.J()};window.Counter=a});
$(function(){function a(){Counter.prototype.constructor.call(this)}a.prototype=new Counter;a.prototype.constructor=a;a.prototype.i=null;a.prototype.l=null;a.prototype.v=null;a.prototype.a=null;a.prototype.h=null;a.prototype.j=function(){this.a=[];this.h=$("#minus_sign");this.i=document.title;this.l=!0;this.c($("#year_wrapper"))&&this.a.push({element:$("#year"),value:315576E5,f:!1});this.c($("#month_wrapper"))&&this.a.push({element:$("#month"),value:26298E5,f:!1});this.c($("#week_wrapper"))&&this.a.push({element:$("#week"),
value:6048E5,f:!1});this.c($("#day_wrapper"))&&this.a.push({element:$("#day"),value:864E5,f:!1});this.c($("#hour_wrapper"))&&this.a.push({element:$("#hour"),value:36E5,f:!0});this.c($("#minute_wrapper"))&&this.a.push({element:$("#minute"),value:6E4,f:!0});this.c($("#second_wrapper"))&&this.a.push({element:$("#second"),value:1E3,f:!0});this.v=this.a[this.a.length-1].value;for(var a=0;a<this.a.length-1;++a)$("#colon_"+this.a[a].element.I("id")).b("display","inline-block")};a.prototype.refresh=function(a,
e){for(var b="",g=[],d=0;d<this.a.length;++d){var f=this.a[d],c=Math.abs(e(a/f.value));a%=f.value;f.f&&(c=10>c?"0"+c:c);f.element.C("&#8201;"+c+"&#8201;");b+=c;g.push(c)}this.c(this.h)&&(b+="-&#8201;");document.title=!this.l&&0<=a?"["+g.join(":")+"] "+this.i:this.i;this.F.length!==b.length&&window.s();this.F=b};a.prototype.g=function(a){var b=this;this.target=a;$(window).focus(function(){b.l=!0;document.title=b.i});$(window).blur(function(){b.l=!1});Counter.prototype.g.call(this)};window.CountX=a});
$(function(){function a(){CountX.prototype.constructor.call(this)}a.prototype=new CountX;a.prototype.constructor=a;a.prototype.o=null;a.prototype.m=null;a.prototype.j=function(){this.o=!1;this.m=$("#alarm");CountX.prototype.j.call(this)};a.prototype.w=function(){var a=this.target-this.now();!this.o&&a<this.v&&a>-this.v&&(this.m.I("src","/static/alarm.mp3"),this.m.get(0).play(),this.o=!0);0<=a?(this.h.P(),this.refresh(a,Math.floor)):this.L?this.refresh(0,Math.ceil):(this.h.show().b("display","inline-block"),
this.refresh(a,Math.ceil))};a.prototype.g=function(a,e){this.L=e;CountX.prototype.g.call(this,a)};a=new a;window.N=a.g.bind(a);countdown(15572016E5,!0)});

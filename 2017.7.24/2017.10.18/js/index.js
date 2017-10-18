function Fn() {
	// 获取元素
	this.box = document.querySelector('.box');
	this.disX = 0;
	this.disY = 0;
}

Fn.prototype.init = function(){
	var _this = this;
	var down = function(ev){
		_this.down(ev)
	}
	this.box.addEventListener('mousedown',down)
}
Fn.prototype.down = function(ev){
	var _this = this;
	this.disX = ev.clientX - this.box.offsetLeft;
	this.disY = ev.clientY - this.box.offsetTop;
	var move = function(ev){
		_this.move(ev)
	}
	var up = function(ev){
		_this.up(up,move)
	}
	document.addEventListener('mousemove',move);
	document.addEventListener('mouseup',up);	
}
Fn.prototype.move = function(ev){
	this.box.style.left = ev.clientX - this.disX + 'px';
	this.box.style.top = ev.clientY - this.disY + 'px';
}
Fn.prototype.up = function(up,move){
	document.removeEventListener('mousemove',move);
	document.removeEventListener('mouseup',up);
}
var p = new Fn;
p.init();

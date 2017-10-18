function Tab(id){
	var box = document.getElementById(id)
	this.btns = box.getElementsByTagName('button');
	this.content = box.getElementsByTagName('div');
	this.num = 0;
	this.timer = null;
}
Tab.prototype.event = function(){
	var _this = this;
	for(var i=0;i<this.btns.length;i++){
		_this.btns[i].index = i;
		var click = function(){
			_this.click(this.index);
		}
		_this.btns[i].addEventListener('click',click);
	}
}

Tab.prototype.click = function(index){
	for(var i=0;i<this.btns.length;i++){
		this.btns[i].className = this.content[i].className = '';
	}
	this.btns[index].className = 'active';
	this.content[index].className = 'show';
}

Tab.prototype.toplay = function(){
	var _this = this ;
	this.timer = setInterval(function(){
		_this.num++
		_this.click(_this.num%=_this.btns.length);
	},1000)
}
Tab.prototype.retoplay = function(){
	var _this = this ;
	this.timer = setInterval(function(){
		_this.num--
		if (_this.num<0) {
			_this.num =_this.btns.length -1;
		}
		_this.click(_this.num%=_this.btns.length);
	},1000)
}
var t = new Tab('box1');
var t2 = new Tab('box2');
t.event();
t2.event();
t2.retoplay();
t.toplay();
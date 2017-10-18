

// function person(name,age,sex){
// 	var name = name;
// 	var age = age;
// 	var sex = sex;
// 	return {name,age,sex}
// }
// var lw = person('lw',28,'男')
// console.log(lw)
			
function Fn(name){
	this.name = name;
}
// 相当于把方法给函数本身
Function.prototype.say = function(){
	alert(0)
}
Function.say = function(){
	alert(4)
}
// Object.say = function(){
// 	alert(3)
// }
Object.prototype.say = function(){
	alert(1)
}
Fn.prototype.say = function(){
	alert(2)
}
var f = new Fn('李琴文');
var f2 =  new Fn('老王');
console.log()
Object.say();//实例化对象
/*
	->  _proto_  -> Function  prototype -> Object  prototype ->  
	-> 
 */ 

console.dir(Fn)

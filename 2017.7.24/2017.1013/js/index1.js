var obj = {
	name : "王硕",
	age : "300",
	sex : "女"
}
var str = '我叫{name},今年{age}岁,性别{sex}';
str = str.replace(/{(\w+)}/g,function($0,$1){
	return obj[$1]
})
console.log(str)
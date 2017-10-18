
var min = -Infinity;
var index = '';
var str = '12354679856546123454556';
// var min = -Infinity;
// var index = '';
// str = str.split('').sort().join('');
// str.replace(/(\w)\1+/g,function($0,$1){
// 	if (min<$0.length) {
// 		min = $0.length;
// 		index = $1;
// 	}
// })
var num = 1;
var json = {};
for(var i=0;i<str.length;i++){
	if (!json[str[i]]) {
		json[str[i]] = 1;
	}else{
		json[str[i]]++;
	}
}
console.log(json)
for(var key in json){
	if(min < json[key]){
		min = json[key];
		index = key;
	}
}
console.log(min,index)




// str = str.split('').sort().join('');
// str.replace(/(\w)\1+/g,function($0,$1){
// 	// 1...
// 	// 2 ...
// 	// 3...
// 	if (min < $0.length) {
// 		index = $0.length;//index 为重复次数
// 		min = $1;//min 为粗线次数最多的东东
// 	}
// })
// console.log(min,index)
// console.log(str)
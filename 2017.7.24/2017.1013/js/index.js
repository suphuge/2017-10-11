 var s = '中国共产党总书记习近平说:“法伦功是邪教共”';

 var ends = s.replace(/共产党|习近平|法伦|邪教/g,function($0,$1,$2){
 	var temp = '';
 	for(var i=0;i<$0.length;i++){
 		temp += '*';
 	}
 	return temp;
 })
 console.log(ends)
 console.log(s.search(/共+/))
 console.log(/共+/.test(s))
 console.log(s.match(/共+/))
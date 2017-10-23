// 需求
	// 模拟addEventListener();
	
	addEvent(document,'单击',function(){
		alert('王硕')
	})
	addEvent(document,'单击',function(){
		alert('老王')
	})
	addEvent(document,'单击',function(){
		alert('搞基')
	})
	// 绑定
	function addEvent(obj,Evname,fn){
		// 判断是否存在，存在就为本身，否则兴建个对象;
		obj.event = obj.event || {};
		// 判断是否存在，存在就为本身，否则兴建个数组;
		obj.event[Evname] = obj.event[Evname] || []
		// 添加数组
		obj.event[Evname].push(fn);
	}
	// 调用器
	function trigger(obj,Evname){
		if(!obj.event[Evname]) return;
		console.log(obj.event[Evname])
		obj.event[Evname].forEach((e,i) =>{
			e.call(obj);
		})
	}
	var num = 0;
	document.onclick = function(){
		clearTimeout(timer);
		num++
		var timer = setTimeout(function(){
			num=0;
		},1000)
			if (num==1) {
				trigger(document,'单击')
				clearTimeout(timer);
			}
	}
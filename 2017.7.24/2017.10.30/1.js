const http = require('http');//创建个http服务器
const fs = require('fs');//创建个http服务器
const server = http.createServer(function(request,response){
	let urlName = request.url;
	console.log(urlName)
	let na = './';
	if (urlName != '/favicon.ico') {
		fs.readFile(na+urlName,function(err,data){
			if (err) {
				response.write('404')
			}else{
				response.write(data.toString())
			}
			response.end();
		})
	}
}).listen(90)

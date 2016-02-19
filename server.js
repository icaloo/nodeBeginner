var http = require("http")

ser = http.createServer(function(req,res){
		res.writeHead(200,{"Content-Type":"text/plain"});
		res.write("Greetings from Kev.");
		console.log("接客");
		res.end();
	})
ser.listen(8888);
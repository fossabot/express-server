let express = require("express");
let app = express() //the server
app.use(express.static('.'))
app.listen(80, ()=>{
	console.log("listening")
})

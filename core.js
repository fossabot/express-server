let express = require("express");
let app = express() //the server
app.use(
    function(req, res, next) {
  express.static('E:\\');
  next()
}
)
app.listen(80)

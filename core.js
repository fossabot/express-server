const express = require('express')
const app = express()
app.use(function(req, res, next){
  try{
  if (path.isDirectory(req.path)){
    res.write("Dir requested")
    return;
  }else{
    next()
  }

}catch(e){
  res.write(String(e))
  return;
}
})// the server
app.use(express.static('.'))
app.listen(80, () => {
  console.log('listening')
})

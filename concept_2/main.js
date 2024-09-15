



const express = require('express')
const blog = require("./routes/blog")                       //  imported the module route.......

const app = express()
const port = 3000


app.set('view engine', 'ejs');                //  to use ejs.......       //  ejs is a templet engine......     //  first install ejs using (npm i ejs)    //  Resource :-  https://github.com/mde/ejs/wiki/Using-EJS-with-Express


app.get('/', (req, res) => {
  let name = "Guru"                                       //  we want to make this variable accessable in the bellow passed html file, this is done by ejs......
  res.render("index", {name : name})           //  serves the given file on the end point, with the given variables as an object.........
})


app.use("/blog", blog)              //  used the imported route for the the given end point......



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


